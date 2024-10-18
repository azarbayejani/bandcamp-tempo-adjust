# Bandcamp Tempo Adjust + Discogs Tempo Adjust

<a href="https://buymeacoffee.com/miseryconfusion"><img src="https://cdn.buymeacoffee.com/buttons/v2/arial-orange.png" height="36px" alt="Donate" /></a>

https://user-images.githubusercontent.com/241079/211879993-bf036e16-253f-450c-a950-51a9d3b20b34.mp4

## Features

- Tempo Adjust Slider
- BPM Detection (only on Bandcamp)
- Purchase Export

## Installation

### Bandcamp Tempo Adjust

🔗 [Chrome Web Store](https://chrome.google.com/webstore/detail/bandcamp-tempo-slider/iniomjoihcjgakkfaebmcbnhmiobppel)

🔗 [Firefox Add-On](https://addons.mozilla.org/en-US/firefox/addon/bandcamp-tempo-adjust/)

### Discogs Tempo Adjust

Coming to Chrome / Firefox soon!

## Donation

If this project has helped you, please consider donating:

<a href="https://buymeacoffee.com/miseryconfusion"><img src="https://cdn.buymeacoffee.com/buttons/v2/arial-orange.png" height="36px" alt="Donate" /></a>

## Development

### Prerequisites

Install all dependencies

```
yarn
```

### Chrome

```
yarn dev
```

### Firefox

wxt's dev mode doesn't work with Firefox, so you need to manually rebuild and install the extension for Firefox using `wxt build`

## Building for release

Run the command

```
yarn workspace bandcamp-tempo-adjust zip
yarn workspace discogs-tempo-adjust zip
```

Now, the content of the `.output` folder in `apps/bandcamp-tempo-adjust` and `apps/discogs-tempo-adjust` will be the extension ready to be submitted to the Chrome and Firefox web stores.
