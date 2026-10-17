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
#   reset-install.sh [-n] mac           # this Mac's Safari and app (default)
#   reset-install.sh [-n] ios [udid]    # a simulator; defaults to the booted one
#
# -n prints what would be removed without removing it.
#
# Safari's container is protected by TCC, so the terminal running this needs
# Full Disk Access (or run it from Xcode's or Terminal's own prompt); otherwise
# the removals fail with "Operation not permitted".

set -euo pipefail

APP_ID="com.miseryconfusion.tempoadjust"
GROUP_ID="group.$APP_ID"

# pnpm passes a "--" through to the script rather than eating it.
[[ "${1:-}" == "--" ]] && shift
dry_run=false
if [[ "${1:-}" == "-n" ]]; then
  dry_run=true
  shift
fi
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
    for app in Safari "Tempo Adjust"; do
      if pgrep -xq "$app"; then
        echo "Quitting $app"
        osascript -e "tell application \"$app\" to quit"
        for _ in $(seq 1 50); do pgrep -xq "$app" || break; sleep 0.2; done
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
      -name "$APP_ID*" -print0 2>/dev/null
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
    /usr/bin/python3 - "$p" "$APP_ID" "$dry_run" <<'PY'
import plistlib, sys
path, app_id, dry_run = sys.argv[1], sys.argv[2], sys.argv[3] == "true"
with open(path, "rb") as f:
    registry = plistlib.load(f)
keys = [k for k in registry if k == app_id or k.startswith(app_id + " ") or k.startswith(app_id + ".")]
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
  *) echo "usage: $0 [-n] mac | ios [udid]" >&2; exit 2 ;;
esac
