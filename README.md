# Bandcamp Tempo Adjust

https://user-images.githubusercontent.com/241079/207227186-d3f913aa-ea38-4fab-a735-57bb3d71b8fb.mp4

## Features

- Pitch Adjust Knob

## Installation

🔗 [Chrome Web Store](https://chrome.google.com/webstore/detail/bandcamp-tempo-slider/iniomjoihcjgakkfaebmcbnhmiobppel)

## Development 

This package is based off of [lxieyang/chrome-extension-boilerplate-react](https://github.com/lxieyang/chrome-extension-boilerplate-react)

### Procedures:

1. Check if your [Node.js](https://nodejs.org/) version is >= **14**.
2. Clone this repository.
3. Change the package's `name`, `description`, and `repository` fields in `package.json`.
4. Change the name of your extension on `src/manifest.json`.
5. Run `npm install` to install the dependencies.
6. Run `npm start`
7. Load your extension on Chrome following:
   1. Access `chrome://extensions/`
   2. Check `Developer mode`
   3. Click on `Load unpacked extension`
   4. Select the `build` folder.
8. Happy hacking.

## Deployment

Run the command

```
$ NODE_ENV=production npm run build
```

Now, the content of `build` folder will be the extension ready to be submitted to the Chrome Web Store. Just take a look at the [official guide](https://developer.chrome.com/webstore/publish) to more infos about publishing.

### Building for Firefox

This extension needs to know to use manifest v2 to target Firefox:

```
$ BROWSER_TARGET=firefox yarn build
$ cd build/
$ web-ext build # or web-ext run if you want to preview it
```

## Secrets (there are none at the moment)

:point_right: The files with name `secrets.*.js` already are ignored on the repository.

You can add `./secrets.<THE-NODE_ENV>.js` and it can be imported as `secrets`, so you can do things like this:

_./secrets.development.js_

```js
export default { key: '123' };
```

_./src/popup.js_

```js
import secrets from 'secrets';
ApiCall({ key: secrets.key });
```
