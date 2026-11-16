#!/bin/bash
# Puts this Mac, or an iOS Simulator, back to the state of a fresh install of
# Tempo Adjust, so the next Run from Xcode behaves like a first launch: the
# extension is new to Safari (disabled, no site permissions, empty storage,
# runtime.onInstalled fires with reason "install") and the app shows its setup
# screen. Clean Build Folder and deleting Derived Data don't do this: all of
# that state lives in Safari's container and the app's own containers, which
# a rebuild never touches.
#
# Usage:
#   reset-install.sh [-n] [--store] mac           # this Mac's Safari and app (default)
#   reset-install.sh [-n] [--store] ios [udid]    # a simulator; defaults to the booted one
#   reset-install.sh [-n] stale                   # only unregister stale copies (see below)
#
# -n prints what would be removed without removing it.
#
# The mac reset ends by unregistering stale copies of the app, and "stale"
# does only that, touching no data. Use it when an extension vanishes from
# Safari's Extensions list or the app's "Open Safari Settings" button fails.
#
# Debug builds are a separate dev app (see Config/Shared.xcconfig), and that
# is the one reset by default, leaving an installed App Store copy alone.
# --store resets the store app (a Release build) instead.
#
# Safari's container is protected by TCC, so the terminal running this needs
# Full Disk Access (or run it from Xcode's or Terminal's own prompt); otherwise
# the removals fail with "Operation not permitted".

set -euo pipefail

STORE_ID="com.miseryconfusion.tempoadjust"
DEV_ID="$STORE_ID.dev"

# pnpm passes a "--" through to the script rather than eating it.
[[ "${1:-}" == "--" ]] && shift
dry_run=false
APP_ID="$DEV_ID"
# The dev ID extends the store ID, so the store reset's prefix matches have
# to skip it; nothing extends the dev ID.
SKIP_ID=""
while [[ "${1:-}" == -* ]]; do
  case "$1" in
    -n) dry_run=true ;;
    --store) APP_ID="$STORE_ID"; SKIP_ID="$DEV_ID" ;;
    *) echo "usage: $0 [-n] [--store] mac | ios [udid] | stale" >&2; exit 2 ;;
  esac
  shift
done
GROUP_ID="group.$APP_ID"
target="${1:-mac}"

remove() {
  if $dry_run; then
    echo "would remove: $*"
  else
    echo "removing: $*"
    rm -rf "$@"
  fi
}

reset_ios() {
  local udid="${1:-booted}"
  # Deleting the app from iOS removes the extension with it, and Safari drops
  # the extension's enabled state, permissions and storage at the same time.
  if $dry_run; then
    echo "would run: xcrun simctl uninstall $udid $APP_ID"
  else
    xcrun simctl uninstall "$udid" "$APP_ID"
    echo "Uninstalled $APP_ID from simulator $udid. Run from Xcode to reinstall."
  fi
}

is_running() {
  # Errors (and so counts as not running) if no app has this bundle ID.
  [[ "$(osascript -e "application id \"$1\" is running" 2>/dev/null)" == "true" ]]
}

# Archives and command-line builds leave their products registered with
# LaunchServices and PlugInKit after the files are gone or superseded. Safari
# then finds several extensions with one bundle ID, and when it picks a dead
# one it drops the extension from its list ("Couldn't find LSApplicationRecord"
# in its log). Unregister every copy of the dev and store apps except the live
# ones: an installed app, and Xcode's own build products.
unregister_stale() {
  local lsregister="/System/Library/Frameworks/CoreServices.framework/Frameworks/LaunchServices.framework/Support/lsregister"
  local live_appexes=() found=false id path

  while IFS=$'\t' read -r id path; do
    if [[ -e "$path" ]]; then
      case "$path" in
        /Applications/* | "$HOME"/Applications/* | \
          "$HOME"/Library/Developer/Xcode/DerivedData/*/Build/Products/*)
          [[ "$path" == *.appex ]] && live_appexes+=("$path")
          continue
          ;;
      esac
    fi
    found=true
    if $dry_run; then
      echo "would unregister: $path"
      continue
    fi
    echo "unregistering: $path"
    # Both fail harmlessly for a path that is already gone from disk or that
    # went away with its parent app's record.
    if [[ "$path" == *.appex ]]; then
      pluginkit -r "$path" 2>/dev/null || true
    fi
    "$lsregister" -u "$path" >/dev/null 2>&1 || true
  done < <(
    # One record per bundle, fields in no fixed order, separated by dashes.
    "$lsregister" -dump 2>/dev/null | awk -v store="$STORE_ID" -v dev="$DEV_ID" '
      function flush() {
        if (path != "" && (id == store || id == dev ||
            id == store ".Extension" || id == dev ".Extension"))
          print id "\t" path
        path = ""; id = ""
      }
      /^-{20,}$/ { flush(); next }
      /^path: / { sub(/^path: +/, ""); sub(/ \(0x[0-9a-f]+\)$/, ""); path = $0 }
      /^identifier: / { id = $2 }
      END { flush() }
    '
  )

  if ! $found; then
    echo "No stale registrations of Tempo Adjust."
    return
  fi
  if $dry_run; then
    return
  fi
  # Safari may already have dropped an extension because of a stale copy;
  # registering the live one again makes it look again.
  if [[ ${#live_appexes[@]} -gt 0 ]]; then
    for path in "${live_appexes[@]}"; do
      pluginkit -a "$path" 2>/dev/null || true
    done
  fi
  echo "Done. An extension Safari had dropped comes back disabled; enable it"
  echo "again in Safari's Extensions settings."
}

reset_mac() {
  local safari_data="$HOME/Library/Containers/com.apple.Safari/Data/Library"

  if ! ls "$safari_data/Safari" >/dev/null 2>&1; then
    echo "Can't read Safari's container; give this terminal Full Disk Access" >&2
    echo "in System Settings > Privacy & Security and try again." >&2
    exit 1
  fi

  # Safari rewrites its extension registry on quit and the app's prefs are
  # cached by cfprefsd, so both must be gone before anything is deleted.
  if ! $dry_run; then
    # By bundle ID: the dev and store apps share the name "Tempo Adjust".
    for app in com.apple.Safari "$APP_ID"; do
      if is_running "$app"; then
        echo "Quitting $app"
        osascript -e "tell application id \"$app\" to quit"
        for _ in $(seq 1 50); do is_running "$app" || break; sleep 0.2; done
      fi
    done
  fi

  # 1. Safari's copy of the extension's data: browser.storage.local plus the
  #    State.plist whose LastSeenVersion decides install vs. update. There is
  #    one directory per Safari profile (Default plus a UUID per profile), and
  #    the name carries the signing team ID, so match on the bundle ID prefix.
  local dirs=()
  while IFS= read -r -d '' dir; do dirs+=("$dir"); done < <(
    find "$safari_data/WebKit/WebExtensions" -mindepth 2 -maxdepth 2 \
      -name "$APP_ID*" ! -name "${SKIP_ID:-/}*" -print0 2>/dev/null
  )
  if [[ ${#dirs[@]} -gt 0 ]]; then
    remove "${dirs[@]}"
  fi

  # 2. Safari's extension registry: the enabled flag, granted permissions and
  #    allowed origins. Again one file for the default profile and one per
  #    named profile. Entries from builds signed with other team IDs linger
  #    here too, so drop every key for the app or its extension.
  local plists=("$safari_data/Safari/WebExtensions/Extensions.plist")
  for p in "$safari_data"/Safari/Profiles/*/WebExtensions/Extensions.plist; do
    [[ -f "$p" ]] && plists+=("$p")
  done
  for p in "${plists[@]}"; do
    [[ -f "$p" ]] || continue
    /usr/bin/python3 - "$p" "$APP_ID" "$dry_run" "$SKIP_ID" <<'PY'
import plistlib, sys
path, app_id, dry_run, skip_id = sys.argv[1], sys.argv[2], sys.argv[3] == "true", sys.argv[4]
with open(path, "rb") as f:
    registry = plistlib.load(f)
keys = [k for k in registry if k == app_id or k.startswith(app_id + " ") or k.startswith(app_id + ".")]
if skip_id:
    keys = [k for k in keys if not k.startswith(skip_id)]
for k in keys:
    print(("would remove: " if dry_run else "removing: ") + f"{k} from {path}")
    del registry[k]
if keys and not dry_run:
    with open(path, "wb") as f:
        plistlib.dump(registry, f, fmt=plistlib.FMT_XML)
PY
  done

  # 3. The app's and extension's own containers (tip count, StoreKit's last
  #    check, window frame) and the shared app group, which holds the
  #    "has all permissions" flag the setup screen reads.
  local containers=()
  for c in "$HOME/Library/Containers/$APP_ID" \
           "$HOME/Library/Containers/$APP_ID.Extension" \
           "$HOME/Library/Group Containers/$GROUP_ID"; do
    [[ -e "$c" ]] && containers+=("$c")
  done
  if [[ ${#containers[@]} -gt 0 ]]; then
    remove "${containers[@]}"
  fi

  # 4. Stale registrations of the app and its extension.
  unregister_stale

  if $dry_run; then
    return
  fi
  # cfprefsd keeps a copy of those preferences in memory and would write them
  # straight back; it relaunches on demand.
  killall cfprefsd 2>/dev/null || true

  echo
  echo "Done. Run the Tempo Adjust scheme from Xcode; Safari will treat the"
  echo "extension as newly installed. Tip-jar transactions from the local"
  echo "StoreKit configuration are separate: clear them in Xcode under"
  echo "Debug > StoreKit > Manage Transactions."
}

case "$target" in
  mac) reset_mac ;;
  ios) reset_ios "${2:-}" ;;
  stale) unregister_stale ;;
  *) echo "usage: $0 [-n] [--store] mac | ios [udid] | stale" >&2; exit 2 ;;
esac
