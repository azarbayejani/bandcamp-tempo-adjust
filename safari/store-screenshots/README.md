# App Store screenshots

A workspace package (`safari/store-screenshots/`) holding the screenshot
templates, the self-hosted fonts, the Safari captures they show and the
[open-assets](https://github.com/parra-Inc/open-assets) config that renders
them. There are `iphone`, `ipad`, `mac`, Instagram and website collections in
`assets.json`; each has a template folder under `templates/`, captures under
`public/screenshots/` and renders under `exports/`, all by the same name.
Run the scripts here or through the root wrappers:

```sh
pnpm screenshots:dev      # live preview at http://localhost:3200
pnpm screenshots:render   # writes exports/<collection>/<size>/<template>.png
```

## The composition

Every screenshot is a headline with one word on orange tape, a pitch-scale
strip down the left edge with its marker at the capture's fader position,
and the capture itself in a device: a phone, an iPad, or on the Mac a Safari
window rising from the bottom edge. `templates/shared.css` holds the
palette, type, the scale and the phone mockup; `templates/ipad/ipad.css`
and `templates/mac/mac.css` resize the canvas and copy for their shapes. Fonts are self-hosted in `public/fonts` so
renders never depend on the network. Each template's comment says what its
capture shows and how it was set up.

The iPhone templates are authored at 440×956 and rendered at the two Dynamic
Island sizes App Store Connect lists, 1206×2622 (the one it requires) and
1320×2868, both the same aspect ratio as the source. It scales these down
for every other iPhone, so the Face ID slots stay empty. The frame is
Apple's iPhone 18 Pro product bezel (`public/screenshots/iphone/bezel.png`,
the black portrait PNG from the `Bezel-iPhone-18` disk image on
[Apple Design Resources](https://developer.apple.com/design/resources/)).
Its screen window is 1206×2622, the native size of the captures, so the
capture sits under it pixel for pixel: the Dynamic Island comes from the
bezel and the status bar from the capture. To swap colours or models, copy
another portrait PNG over `bezel.png`; every current iPhone bezel shares the
same geometry.

The iPad templates are landscape, authored at 1376×1032 (the 13-inch iPad
Pro in points) and rendered at 2752×2064, the one iPad size App Store
Connect requires. They are the Mac composition with an iPad in place of
the window: the captures are the desktop site at Safari's 150% page zoom,
like the Mac ones, so the panel reads at listing size. The purchases slide
stands its portrait capture upright on the same canvas. The frames are
Apple's iPad Pro (M5) 13" Space Black bezels (`bezel-landscape.png` and
`bezel-portrait.png` beside the captures), whose windows are the captures'
native size, so they sit under the frame pixel for pixel like the iPhone.

The Mac templates are authored at 1440×900 and rendered at 2880×1800, the
size App Store Connect lists for Mac (it scales that down for the smaller
16:10 slots). The copy matters more here because a full window is mostly
Bandcamp: even in a window just wide enough for the two-column layout, the
tempo panel is about a quarter of the frame, so the headline says what the
panel is. There is no Mac BPM slide for the same reason: on Bandcamp the
tracklist sits under the merch listings, far from the player, and its BPMs
are small parenthetical text, so the hero's subhead and its detected BPM
carry the feature instead.

## Instagram

The `instagram-2026-11-16-launch` collection (4:5, 1080×1350, for posts and carousels)
rebuilds the slides for social. It uses the existing captures, bezels,
fonts and copy, so nothing new is captured; `templates/instagram.css`
loads `shared.css` and recomposes it, and `templates/instagram-2026-11-16-launch/`
holds the six slides with a `feed` class on `<body>`. A
store screenshot is seen at listing size and a post at thumbnail size, so
the social version is louder: every slide is dark with an orange glow and
film grain, a kicker with the app icon names the product (a post needs that
and a listing does not), and the slide's own setting runs up the right edge
as outlined type.

The deck opens differently from the store sets. `01-lineup` is the
product-family shot: the Mac hero window, the iPad and the iPhone, all on
the same album page, bottom-aligned with the phone in front, under
"Now available for desktop, iPad and mobile" and a row of platform chips
(the Mac capture carries its own macOS shadow; there is no MacBook bezel in
the repository). `02-hero` answers where the fader appears and what is in it: the
phone is small enough for the page to run through the tempo panel, a
spotlight dims the rest of the screen around it with an "Added by Tempo
Adjust" tag, and three labels hang off the phone's edge at the panel's
rows (the fader, the ranges, Master Tempo), so the store's range and
Master Tempo slides fold into this one.
Every feature slide after it uses the same spotlight on whatever its page
gains from the extension (the tracklist's detected BPMs, the Tap screen,
the Discogs panel, the Purchase Export card), with the phone tilted and sized so that region sits on the
canvas; each rectangle is in the capture's native pixels, one class per
slide in `instagram.css`. The purchases slide also blurs the page outside
its spotlight, because the capture has a real order under the exporter's
card.

## Website

The `web` collection renders the two lineup images on the Tempo Adjust page
of miseryconfusion.com: the lineup slide's three devices on one page, with
no copy, since the page has its own. `templates/web/web.css` loads
`instagram.css` for the device mockups and sets a 650×380 canvas, the
page's column width, rendered at 2x (1300×760). `hero` is the Bandcamp
album page, the lineup slide mirrored so the Mac window stands at the left
with its tempo panel in the clear and the iPad and iPhone in front of its
album art; `discogs` is the Discogs release page in the same arrangement: the window
shows the page itself, since its panel sits in the right column behind the
iPad, and the iPad and iPhone carry the panel.
Each comes in a `-light` template on the icon's platter grey and a `-dark`
one on the Instagram slides' black with the orange glow, and the page
serves them through a `<picture>` element keyed on `prefers-color-scheme`.
Copy the renders over `images/tempo-adjust-{hero,discogs}-{light,dark}.png`
in the website repository.

## Capturing

Captures are tracked in `public/screenshots/<collection>`, because some
need a signed-in account and the Mac ones are taken by hand, so a fresh
checkout renders without any device.

### iPhone

The iPhone captures come from Safari in the iOS Simulator with the real
extension, driven by the `ScreenshotTests` UI test in
`safari/Tempo AdjustUITests`. It plays a track, detects BPMs, moves the
fader, taps a BPM in, and on Discogs opens a video so the panel mounts.

One-time setup on the simulator: install the app, then in Settings go to
Apps > Safari > Extensions > Tempo Adjust, turn it on, tap Extension Settings
and allow it on Bandcamp and Discogs.

Then, with that simulator booted:

```sh
pnpm screenshots:capture:iphone     # or ./capture-iphone.sh [udid] from this folder
```

The script sets the status bar to 9:41 with full bars and a plain
(discharging) battery, deletes the extension's remembered BPMs from Safari's
copy of its `browser.storage.local` so every run starts clean (a rebuild does
not touch that, and the enable and allowed-site settings live elsewhere and
survive it), runs the capture tests from the shared `Screenshots` scheme,
copies the states the templates use over `public/screenshots/iphone` under
their template names (the mapping is in the script), screenshots the app
itself for the setup-screen slide, and renders. The raw captures stay in
`exports/captures` and xcodebuild's output in `exports/xcodebuild.log`.

The `Screenshots` scheme exists because the `Tempo AdjustTests` unit target
does not currently build for the simulator, which breaks the main scheme's
test build; it runs only the UI test target.

Not every capture comes from the test. The purchases page needs a signed-in
account, so `purchase-export.png` is a plain simulator screenshot of Safari
on bandcamp.com/<you>/purchases, taken by hand; it shows the exporter before
"Load purchases" with a real order below it, and the template ends the
screen above that order. The app's own screen, `ios-setup.png`, shows
"You're all set" while the extension is enabled; turn the extension off in
Settings before running to get the setup steps instead. `icon.png` is
`safari/Tempo Adjust/Resources/Icon.png`.

### iPad

The iPad captures are simulator screenshots of Safari on the iPad Pro
13-inch (M5) simulator, taken by hand (Cmd-S in Simulator) after the same
`simctl status_bar` override `capture-iphone.sh` uses, and saved under
their template names in `public/screenshots/ipad`. The UI test does not
run here, since it drives the mobile Bandcamp page and the iPad gets the
desktop one. Each template's comment says what its capture shows and how
the page was set up. `purchase-export.png` is cropped just above the first
order, whose paid-by line carries the account's email and PayPal ID; files
named `Screenshot *.png` under `public/screenshots` are gitignored so an
uncropped original kept beside it cannot be committed.

### Mac

Each Mac capture is the window alone with its macOS shadow on a transparent
margin, as Shift-Cmd-4 + Space takes it, so it floats on the canvas.
`capture-mac.sh` takes one that way from Safari's front window:

```sh
pnpm screenshots:capture:mac <name> [height]   # or ./capture-mac.sh from this folder
pnpm screenshots:render                        # renders both collections
```

It resizes the window to 1190×900 points first, the narrowest width at
which Bandcamp keeps its two-column layout, so every capture shares one
geometry, then captures it at 2x. The display has to be Retina and at least
1190×940 points. The optional height makes the window shorter, to end it
above something lower on the page; the purchases capture uses 640 so the
window ends inside the first order, before the line with the account's
email and PayPal ID. A capture taken at another window size still works:
set the image width in the template so the window fits (0.5 of the
capture's pixel width is 1:1 with the screen).

One-time Safari setup: a profile made for screenshots, with the favorites
and tab bars hidden and the profile button dragged off the toolbar
(View > Customize Toolbar), signed in to Bandcamp as a fan rather than the
label, the Tempo Adjust extension enabled and in the toolbar, and
Safari > Settings > Websites > Page Zoom set to 150% for bandcamp.com and
discogs.com. Set each page up as its template's comment describes, then
run the script once per capture.

## Licensing

The templates are MIT like the rest of the repository; the screenshots and
icon are branding, the fonts are OFL, and the bezels are Apple's, used under
its
[marketing guidelines](https://developer.apple.com/app-store/marketing/guidelines/#section-products).
See the License section of the root `README.md`.
