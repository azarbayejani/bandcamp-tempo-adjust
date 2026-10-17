<h1 align="center">
  Bandcamp Tempo Adjust
</h1>

<p align="center">
  <a href="http://buymeacoffee.com/miseryconfusion"><img src="https://img.shields.io/badge/-buy_me_a%C2%A0coffee-gray?logo=buy-me-a-coffee" alt="buy me a coffee" /></a>
  <a href="https://chromewebstore.google.com/detail/bandcamp-tempo-adjust/iniomjoihcjgakkfaebmcbnhmiobppel?hl=en-US"><img src="https://img.shields.io/chrome-web-store/users/iniomjoihcjgakkfaebmcbnhmiobppel?logo=googlechrome&logoColor=white&label=users" alt="chrome users" /></a>
  <a href="https://addons.mozilla.org/en-US/firefox/addon/bandcamp-tempo-adjust/"><img src="https://img.shields.io/amo/users/bandcamp-tempo-adjust?logo=firefoxbrowser&logoColor=white" alt="firefox users" /></a>
</p>

<p align="center">and Discogs Tempo Adjust, too</p>

<p align="center"><img src="https://github.com/user-attachments/assets/6dfc0381-49c1-4a58-83d1-e19f12c2f5d4" /></p>

## Demo

https://github.com/user-attachments/assets/7412e241-3d17-474c-9137-3f8c51e4d5c3

## Features

- Tempo Adjust Slider
- BPM Detection (only on Bandcamp)
- Purchase Export

## Installation

### Bandcamp Tempo Adjust

🔗 [Chrome Web Store](https://chrome.google.com/webstore/detail/bandcamp-tempo-slider/iniomjoihcjgakkfaebmcbnhmiobppel)

🔗 [Firefox Add-On](https://addons.mozilla.org/en-US/firefox/addon/bandcamp-tempo-adjust/)

### Discogs Tempo Adjust

🔗 [Chrome Web Store](https://chromewebstore.google.com/detail/discogs-tempo-adjust/lifpcepdalajjkklljnfcjpjjjllfhha)

🔗 [Firefox Add-On](https://addons.mozilla.org/en-US/firefox/addon/discogs-tempo-adjust/)


## Support

Found a bug or have a feature request? Open an issue at
https://github.com/azarbayejani/bandcamp-tempo-adjust/issues, or email
dev@miseryconfusion.com if you'd rather not use GitHub.

If Tempo Adjust doesn't appear on Bandcamp or Discogs in Safari, check that the
extension is enabled and allowed on those sites:

- **iPhone and iPad:** open Settings, go to Apps > Safari > Extensions (just
  Safari > Extensions on iOS 17), tap Tempo Adjust and turn it on. Then open
  Extension Settings and allow it on bandcamp.com and discogs.com.
- **Mac:** open Safari > Settings > Extensions, check Tempo Adjust, and choose
  Always Allow when asked about bandcamp.com and discogs.com.

## Donation

If this project has helped you, please consider donating:

<a href="https://buymeacoffee.com/miseryconfusion"><img src="https://cdn.buymeacoffee.com/buttons/v2/arial-orange.png" height="36px" alt="Donate" /></a>

## Development

### Prerequisites

Install all dependencies

```
pnpm i
```

### Chrome

#### For Bandcamp Tempo Adjust

```
pnpm dev:bandcamp
```

#### For Discogs Tempo Adjust

```
pnpm dev:discogs
```

### Firefox

wxt's dev mode doesn't work with Firefox, so you need to manually rebuild and install the extension for Firefox using `pnpm build`

### Safari

Open `safari/Tempo Adjust.xcodeproj` in Xcode and run the `Tempo Adjust`
scheme; its build phase runs `pnpm build:safari` and copies the extension into
the app. Safari, not Xcode, remembers that the extension was installed (whether
it's enabled, which sites it's allowed on, its storage, and the version that
drives `runtime.onInstalled`), and the app keeps its own state in its
containers, so a clean build doesn't give you a first launch. To get one:

```
pnpm reset:safari-app            # this Mac; quits Safari and the app first
pnpm reset:safari-app ios        # the booted simulator (or pass a UDID)
```

Pass `-n` first to see what it would remove. On the Mac it needs a terminal
with Full Disk Access, because Safari's container is protected.

## Building for release

Run the command

```
pnpm zip
```

Now, the content of the `.output` folder in `apps/bandcamp-tempo-adjust` and `apps/discogs-tempo-adjust` will be the extension ready to be submitted to the Chrome and Firefox web stores.

### Versioning

Bandcamp Tempo Adjust uses calendar versions in the form `YYYY.M.N`:

- `YYYY` is the year of the release
- `M` is the month of the release, without a leading zero
- `N` counts releases within that month, starting at `0`

So the first release in October 2026 is `2026.10.0`, a second one that month is
`2026.10.1`, and the first release in November is `2026.11.0`. The version says
when a build shipped rather than how big the change was; there is no notion of
a major or breaking release.

The version lives once, in `"version"` in `apps/bandcamp-tempo-adjust/package.json`.
The Chrome and Firefox manifests take it from there at build time, and the
Safari app's Xcode build copies it into `safari/Config/Version.xcconfig`,
failing once when the two differ so you can rebuild and commit the updated
file. Store versions can only go up, so never lower it once a build has been
submitted anywhere.

Discogs Tempo Adjust still uses its old `0.x.y` numbering, in
`apps/discogs-tempo-adjust/package.json`. It will move to the same calendar
scheme with a future release.

## License

Everything in this repository is under the MIT License (see `LICENSE`),
including the Safari app in `safari/` and the screenshot templates in
`safari/store-screenshots/`.

The license covers code, not branding. The Tempo Adjust name (including
Bandcamp Tempo Adjust and Discogs Tempo Adjust), the app and extension icons
(`safari/Tempo Adjust/AppIcon.icon`, the toolbar icons rendered from it, and
the icons in each app's `public/` folder), and the App Store screenshots in
`safari/store-screenshots/` identify this software and its author. Don't use
them to publish, list or promote other software, including your own build of
this code. If you ship a build, give it your own name and icon.

Some images in this repository belong to others and are included under
their own terms. The screenshot at the top of this README, the captures in
`safari/store-screenshots/`, and the recorded pages in each app's `e2e/har/`
folder show pages from bandcamp.com and discogs.com, and artwork belonging
to the artists and labels shown. The Barlow typeface in
`safari/store-screenshots/public/fonts` is distributed under the SIL Open
Font License 1.1; see `OFL.txt` there.
