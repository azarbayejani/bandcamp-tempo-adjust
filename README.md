# Bandcamp Tempo Adjust

<a href="https://buymeacoffee.com/miseryconfusion"><img src="https://cdn.buymeacoffee.com/buttons/v2/arial-orange.png" height="36px" alt="Donate" /></a>

https://user-images.githubusercontent.com/241079/211879993-bf036e16-253f-450c-a950-51a9d3b20b34.mp4

## Features

- Tempo Adjust Slider
- BPM Detection
- Purchase Export (temporarily disabled)

## Installation

🔗 [Chrome Web Store](https://chrome.google.com/webstore/detail/bandcamp-tempo-slider/iniomjoihcjgakkfaebmcbnhmiobppel)

🔗 [Firefox Add-On](https://addons.mozilla.org/en-US/firefox/addon/bandcamp-tempo-adjust/)

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
yarn start:chrome
```

### Firefox

```
yarn start:firefox
```

## Deployment

Run the command

```
$ NODE_ENV=production npm run build
```

Now, the content of `build` folder will be the extension ready to be submitted to the Chrome Web Store. Just take a look at the [official guide](https://developer.chrome.com/webstore/publish) to more infos about publishing.

### Building for Firefox

This extension needs to know to use manifest v2 to target Firefox:

```
$ yarn build-firefox
```
