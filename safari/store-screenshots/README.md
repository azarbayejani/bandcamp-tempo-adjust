# App Store screenshots

A workspace package (`safari/store-screenshots/`) holding the templates, the self-hosted
fonts, the Safari captures and the open-assets config. Run the scripts here or
via the root wrappers.

Eight iPhone screenshots for the Safari app, authored as HTML in `templates/` at 440×956 and
rendered by [open-assets](https://github.com/parra-Inc/open-assets) (`assets.json` in this
folder) at the two Dynamic Island sizes App Store Connect lists: 1206×2622 for
the medium display, which is the one it requires, and 1320×2868 for the large
display. It scales these down for every other iPhone, so the Face ID slots
stay empty. Both renders come from the same 440×956 source, which has the same
aspect ratio.

```sh
pnpm screenshots:dev      # live preview at http://localhost:3200
pnpm screenshots:render   # writes safari/store-screenshots/exports/screenshots/<size>/<template>.png
```

## Templates

| Template | Capture it shows |
| --- | --- |
| `01-hero` | Bandcamp album page, fader at +3.2% |
| `02-bpm` | an unanalyzed track's Detect BPM button over a tracklist with detected BPMs |
| `03-range` | ±16 range, fader at −8% |
| `04-master-tempo` | Master Tempo on |
| `05-tap` | Tap BPM screen, eight taps in |
| `06-discogs` | Discogs release page with a video open, fader at +4.3% |
| `07-purchases` | the purchase exporter on the Bandcamp purchases page, cut off above the first order |
| `08-cta` | the app's own setup screen from the iOS Simulator |

`shared.css` holds the palette, type, the pitch-scale strip and the phone
mockup; the captures carry Safari's own toolbar. The frame is Apple's
iPhone 18 Pro product bezel (`public/screenshots/bezel.png`, the black
portrait PNG from the `Bezel-iPhone-18` disk image on
[Apple Design Resources](https://developer.apple.com/design/resources/)).
Its screen window is 1206×2622, the native size of the captures, so the
capture sits under it pixel for pixel and the Dynamic Island comes from the
bezel, while the status bar is the capture's own (the `simctl status_bar`
override below sets 9:41 and a full battery). To swap colours or models, copy
another portrait PNG over `bezel.png`; every current iPhone bezel shares the
same geometry. Fonts are self-hosted in `public/fonts` so
renders never depend on the network.

## Recapturing the app

The captures in `public/screenshots` come from Safari in the iOS Simulator
with the real extension, driven by the `ScreenshotTests` UI test in
`safari/Tempo AdjustUITests`. It plays a track, detects BPMs, moves the fader,
taps a BPM in, and on Discogs opens a video so the panel mounts.

One-time setup on the simulator: install the app, then in Settings go to
Apps > Safari > Extensions > Tempo Adjust, turn it on, tap Extension Settings
and allow it on Bandcamp and Discogs.

Then, with that simulator booted:

```sh
pnpm screenshots:capture            # or ./capture.sh [udid] from this folder
```

The script sets the status bar to 9:41 with full bars and a plain (discharging)
battery, deletes the extension's remembered BPMs from Safari's copy of its
`browser.storage.local` so every run starts clean (a rebuild does not touch
that, and the enable and allowed-site settings live elsewhere and survive it),
runs the two capture tests from the shared `Screenshots` scheme, copies the
wanted states over `public/screenshots`, screenshots the app itself for
`ios-setup.png`, and renders. The raw captures stay in `exports/captures` and
xcodebuild's output in `exports/xcodebuild.log`.

The `Screenshots` scheme exists because the `Tempo AdjustTests` unit target
does not currently build for the simulator, which breaks the main scheme's
test build; it runs only the UI test target.

Which capture each template source comes from:

| File | Capture |
| --- | --- |
| `hero.png` | `bc-hero.png` |
| `bpm.png` | `bc-detect.png` |
| `range.png` | `bc-wide-down.png` |
| `master-tempo.png` | `bc-master-tempo.png` |
| `tap.png` | `bc-tap.png` |
| `discogs.png` | `dg-nudged.png` |

`purchase-export.png` is a plain simulator screenshot of Safari on
bandcamp.com/<you>/purchases, taken by hand because it needs a signed-in
account. It shows the exporter before "Load purchases" with a real order
below it; the template places the phone so the screen ends above that order.

`ios-setup.png` is a plain simulator screenshot of the app. With the extension
enabled it shows the "You're all set" screen; turn the extension off in
Settings before running to get the setup steps instead. `icon.png` is
`safari/Tempo Adjust/Resources/Icon.png`.

Licensing: the templates are MIT like the rest of the repository; the
screenshots and icon are branding, the fonts are OFL, and the bezel is
Apple's, used under its
[marketing guidelines](https://developer.apple.com/app-store/marketing/guidelines/#section-products). See the License
section of the root `README.md`.
