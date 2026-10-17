#!/usr/bin/env bash
# Captures the front Safari window as a source image for the Mac templates.
#
#   ./capture-mac.sh <name> [height]   # writes public/screenshots/mac/<name>.png
#
# Set the page up in Safari by hand (see README.md), then run this once per
# screenshot. It resizes Safari's front window to 1190×900 points, the
# narrowest width at which Bandcamp keeps its two-column layout, so every
# capture has the same geometry. A height makes the window shorter, to end
# it above something the page shows further down, such as the account
# details on the purchases page. It then captures that window the way
# Shift-Cmd-4 + Space does: the window alone, with its macOS shadow on a
# transparent margin, at 2x on a Retina display. The Mac templates in
# templates/mac place it on the canvas.
set -euo pipefail

here=$(cd "$(dirname "$0")" && pwd)
out="$here/public/screenshots/mac"
width=1190

name=${1:-}
height=${2:-900}
if [ -z "$name" ]; then
  echo "Usage: $0 <name> [height]" >&2
  exit 1
fi

# Place the window just under the menu bar, which is 37pt tall on notched
# MacBooks, and read the bounds back in case Safari clamps them to the screen.
bounds=$(osascript - "$width" "$height" <<'APPLESCRIPT'
on run {w, h}
  tell application "Safari"
    activate
    if (count of windows) is 0 then error "Safari has no open window"
    set bounds of front window to {0, 40, (w as integer), (h as integer) + 40}
    delay 0.5
    set b to bounds of front window
    set x to item 1 of b
    set y to item 2 of b
    -- "&" on numbers builds a list, so coerce each to text first
    return (x as text) & "," & (y as text) & "," & (((item 3 of b) - x) as text) & "," & (((item 4 of b) - y) as text)
  end tell
end run
APPLESCRIPT
)
if [ "$bounds" != "0,40,$width,$height" ]; then
  echo "Safari's window ended up at $bounds, not 0,40,$width,$height; is the display at least $((width))×$((height + 40)) points?" >&2
  exit 1
fi

# AppleScript's window id is the Cocoa window number, which is what
# screencapture -l takes.
wid=$(osascript -e 'tell application "Safari" to id of front window')

mkdir -p "$out"
file="$out/$name.png"
# -x: no shutter sound. The cursor is left out unless -C is given. The
# window server refuses the capture ("could not create image") while Safari
# is still animating to the front, say from another Space, so let it settle
# and retry a few times.
sleep 1
for attempt in 1 2 3 4 5; do
  if screencapture -x -l "$wid" "$file" 2>/dev/null; then
    break
  fi
  if [ "$attempt" = 5 ]; then
    echo "screencapture kept failing on window $wid" >&2
    exit 1
  fi
  sleep 1
done

size=$(sips -g pixelWidth -g pixelHeight "$file" | awk '/pixel/ { printf "%s%s", sep, $2; sep = "x" }')
if [ "${size%x*}" -lt $((width * 2)) ]; then
  echo "Captured $size, narrower than the $((width * 2))px window; is the display Retina (2x)?" >&2
  exit 1
fi
echo "Wrote $file ($size, window plus shadow margin)"
