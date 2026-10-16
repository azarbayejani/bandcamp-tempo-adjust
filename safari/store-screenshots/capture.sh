#!/usr/bin/env bash
# Recaptures the screenshots' source images from the iOS Simulator, then
# renders the App Store screenshots from them.
#
#   ./capture.sh [simulator udid]     # defaults to the booted iPhone
#
# Needs the one-time simulator setup from README.md (extension enabled in
# Settings and allowed on Bandcamp and Discogs).
set -euo pipefail

here=$(cd "$(dirname "$0")" && pwd)
repo=$(cd "$here/../.." && pwd)
project="$repo/safari/Tempo Adjust.xcodeproj"
captures="$here/exports/captures"
log="$here/exports/xcodebuild.log"
app=com.miseryconfusion.tempoadjust

udid=${1:-$(xcrun simctl list devices booted | grep -o '[0-9A-F-]\{36\}' | head -n 1 || true)}
if [ -z "$udid" ]; then
  echo "No simulator is booted. Pass a udid from: xcrun simctl list devices" >&2
  exit 1
fi

echo "Booting $udid"
xcrun simctl bootstatus "$udid" -b >/dev/null

# 9:41, full bars, and a discharging battery so iOS draws it plain rather
# than with the charging bolt.
xcrun simctl status_bar "$udid" override --time 9:41 --batteryState discharging \
  --batteryLevel 100 --cellularMode active --cellularBars 4 --wifiBars 3 --dataNetwork wifi

# The extension remembers detected BPMs in Safari's copy of its
# browser.storage.local, which a rebuild does not touch. Clear it so the
# captures start from a clean state; the enable and allowed-site settings
# live elsewhere and survive this.
echo "Resetting the extension's storage"
xcrun simctl terminate "$udid" com.apple.mobilesafari 2>/dev/null || true
safari=$(xcrun simctl get_app_container "$udid" com.apple.mobilesafari data)
find "$safari/Library/WebKit/com.apple.mobilesafari/WebExtensions" \
  -path '*tempoadjust*' -name 'LocalStorage.db*' -delete

echo "Running the capture UI tests (log: $log)"
mkdir -p "$captures"
rm -f "$captures"/*.png
if ! TEST_RUNNER_SCREENSHOT_DIR="$captures" xcodebuild test \
  -project "$project" -scheme Screenshots -destination "id=$udid" \
  -parallel-testing-enabled NO \
  -only-testing:'Tempo AdjustUITests/ScreenshotTests/testBandcampCaptures' \
  -only-testing:'Tempo AdjustUITests/ScreenshotTests/testDiscogsCaptures' \
  >"$log" 2>&1; then
  grep -E "error:|Test Case .* failed" "$log" >&2 || true
  echo "UI tests failed; see $log" >&2
  exit 1
fi
grep -E "Test Case .* passed" "$log"

# Which capture each template source comes from.
for pair in hero:bc-hero bpm:bc-detect range:bc-wide-down \
            master-tempo:bc-master-tempo tap:bc-tap discogs:dg-nudged; do
  cp -f "$captures/${pair##*:}.png" "$here/public/screenshots/${pair%%:*}.png"
done

# The app's own screen, straight from the simulator.
echo "Capturing the app"
xcrun simctl launch "$udid" "$app" >/dev/null
sleep 4
xcrun simctl io "$udid" screenshot "$here/public/screenshots/ios-setup.png" >/dev/null 2>&1

echo "Rendering"
(cd "$here" && pnpm exec open-assets render | tail -n 1)
