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

## Building for release

Run the command

```
pnpm zip
```

Now, the content of the `.output` folder in `apps/bandcamp-tempo-adjust` and `apps/discogs-tempo-adjust` will be the extension ready to be submitted to the Chrome and Firefox web stores.
