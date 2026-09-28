#!/bin/bash
# Builds the Safari web extension with WXT and copies it into the
# extension target's bundle. Called from the "Build Web Extension" Run
# Script phase of the "Tempo Adjust Extension" target, so every Xcode
# build, run and archive packages a fresh build of the current source.
# It first checks that the app version matches package.json.
#
# Can also be run by hand from an Xcode-like environment; it needs
# TARGET_BUILD_DIR and UNLOCALIZED_RESOURCES_FOLDER_PATH to know where
# to copy, and DERIVED_FILE_DIR to remember what it copied last time.

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "$SCRIPT_DIR/../.." && pwd)"
WXT_OUTPUT="$REPO_ROOT/apps/bandcamp-tempo-adjust/.output/safari-mv3"

: "${TARGET_BUILD_DIR:?must be run from an Xcode build phase}"
: "${UNLOCALIZED_RESOURCES_FOLDER_PATH:?must be run from an Xcode build phase}"
: "${DERIVED_FILE_DIR:?must be run from an Xcode build phase}"

# The macOS .appex keeps resources in Contents/Resources; the iOS .appex
# is flat, so this is the bundle root and also holds the executable,
# Info.plist and signature. Safari needs manifest.json at this level.
DEST="$TARGET_BUILD_DIR/$UNLOCALIZED_RESOURCES_FOLDER_PATH"
COPIED_LIST="$DERIVED_FILE_DIR/web-extension-files.txt"

# --- Check the app version --------------------------------------------------
# package.json is the single source of the version for every store. Xcode
# resolves MARKETING_VERSION (from Config/Version.xcconfig) before any build
# phase runs, so this build can't pick up a new value; instead, on a
# mismatch, rewrite Version.xcconfig and fail so the next build uses it.
# The app target depends on this one, so it never builds with a stale value.
PACKAGE_JSON="$REPO_ROOT/apps/bandcamp-tempo-adjust/package.json"
VERSION_XCCONFIG="$SCRIPT_DIR/../Config/Version.xcconfig"
PACKAGE_VERSION="$(plutil -extract version raw -o - "$PACKAGE_JSON")"

if [ "${MARKETING_VERSION:-}" != "$PACKAGE_VERSION" ]; then
  sed -i '' -E "s/^MARKETING_VERSION = .*/MARKETING_VERSION = $PACKAGE_VERSION/" "$VERSION_XCCONFIG"
  echo "error: MARKETING_VERSION is '${MARKETING_VERSION:-}' but package.json says '$PACKAGE_VERSION'." >&2
  echo "error: Updated safari/Config/Version.xcconfig to $PACKAGE_VERSION. Build again and commit it." >&2
  echo "error: If this repeats, something overrides MARKETING_VERSION (a target build setting or Config/Local.xcconfig)." >&2
  exit 1
fi

# --- Find node and pnpm -----------------------------------------------------
# Xcode runs build phases with a minimal PATH (/usr/bin:/bin:...), so none
# of the shell-profile setup from mise, asdf, Homebrew or Volta applies.
# Version-manager shims come first so .tool-versions picks the node version.
EXTRA_PATH=""
for dir in \
  "$HOME/.local/share/mise/shims" \
  "${ASDF_DATA_DIR:-$HOME/.asdf}/shims" \
  "$HOME/.volta/bin" \
  "$HOME/Library/pnpm" \
  /opt/homebrew/bin \
  /usr/local/bin; do
  if [ -d "$dir" ]; then
    EXTRA_PATH="$EXTRA_PATH$dir:"
  fi
done
export PATH="$EXTRA_PATH$PATH"

if ! command -v node >/dev/null 2>&1; then
  echo "error: node not found. Install it (the repo's .tool-versions pins the version) with mise, asdf, Volta or Homebrew." >&2
  echo "error: searched PATH=$PATH" >&2
  exit 1
fi

if command -v pnpm >/dev/null 2>&1; then
  PNPM=(pnpm)
elif command -v corepack >/dev/null 2>&1; then
  PNPM=(corepack pnpm)
else
  echo "error: pnpm not found. Install it (or enable corepack) so Xcode can build the web extension." >&2
  echo "error: searched PATH=$PATH" >&2
  exit 1
fi

# --- Build ------------------------------------------------------------------
echo "Building web extension with $(command -v node) ($(node --version))"
cd "$REPO_ROOT"
"${PNPM[@]}" --filter bandcamp-tempo-adjust build:safari

if [ ! -f "$WXT_OUTPUT/manifest.json" ]; then
  echo "error: WXT build finished but $WXT_OUTPUT/manifest.json is missing." >&2
  exit 1
fi

# --- Copy into the bundle ---------------------------------------------------
# Not rsync --delete: on iOS DEST is the bundle root, and deleting whatever
# WXT didn't produce would take the executable and Info.plist with it.
# Instead remember which top-level entries we copied, and remove only those
# before copying again, so files dropped from the WXT output go away too.
mkdir -p "$DEST" "$DERIVED_FILE_DIR"

if [ -f "$COPIED_LIST" ]; then
  while IFS= read -r entry; do
    case "$entry" in
      "" | . | .. | */*) continue ;;
    esac
    rm -rf "${DEST:?}/$entry"
  done <"$COPIED_LIST"
fi

: >"$COPIED_LIST.tmp"
for path in "$WXT_OUTPUT"/* "$WXT_OUTPUT"/.[!.]*; do
  [ -e "$path" ] || continue
  entry="$(basename "$path")"
  case "$entry" in
    Info.plist | _CodeSignature | embedded.mobileprovision | "${EXECUTABLE_NAME:-}")
      echo "error: WXT output contains '$entry', which would overwrite part of the extension bundle." >&2
      exit 1
      ;;
  esac
  cp -R "$path" "$DEST/"
  echo "$entry" >>"$COPIED_LIST.tmp"
done
mv -f "$COPIED_LIST.tmp" "$COPIED_LIST"

echo "Copied web extension into $DEST"
