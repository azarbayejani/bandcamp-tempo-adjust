# Bandcamp Tempo Adjust
[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)]([YOUR_EMAIL_CODE](https://www.paypal.com/donate/?business=8PMHBGHW49248&no_recurring=0&item_name=Your+donation+will+contribute+to+the+continued+development+of+Bandcamp+Tempo+Adjust+and+other+free+tools+for+DJs&currency_code=USD))


https://user-images.githubusercontent.com/241079/211879993-bf036e16-253f-450c-a950-51a9d3b20b34.mp4

## Features

- Tempo Adjust Slider
- BPM Detection
- Purchase Export

## Installation

🔗 [Chrome Web Store](https://chrome.google.com/webstore/detail/bandcamp-tempo-slider/iniomjoihcjgakkfaebmcbnhmiobppel)

🔗 [Firefox Add-On](https://addons.mozilla.org/en-US/firefox/addon/bandcamp-tempo-adjust/)

## Donation

If this project has helped you, please consider donating:

[![paypal](https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif)](https://www.paypal.com/donate/?business=8PMHBGHW49248&no_recurring=0&item_name=Your+donation+will+contribute+to+the+continued+development+of+Bandcamp+Tempo+Adjust+and+other+free+tools+for+DJs&currency_code=USD)

## Development

### Prerequisites

Using `web-ext` makes installing and developing more straightforward:

```
npm install --global web-ext
```

Install all dependencies

```
yarn
```

### Chrome

```
yarn
yarn start
```

In another terminal, use web-ext to run

```
web-ext run -s build/ --target chromium
```

### Firefox

```
yarn
yarn start-firefox
```

In another terminal, use web-ext to run

```
web-ext run -s build/ --target firefox
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
