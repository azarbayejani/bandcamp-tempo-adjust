import { readdirSync } from 'node:fs';
import { join } from 'node:path';
import { defineConfig } from 'wxt';

// Safari picks the first variant matching the toolbar's appearance and falls
// back to `icons` if it doesn't support icon_variants. WXT only generates
// light/dark action icons for Firefox, in Firefox's own theme_icons format.
const safariActionIconVariants = [
  { 34: 'icon-34.png', 128: 'icon-128.png', color_schemes: ['light'] },
  {
    34: 'toolbar-dark-34.png',
    128: 'toolbar-dark-128.png',
    color_schemes: ['dark'],
  },
];

export default defineConfig({
  manifest: ({ browser }) => ({
    // Xcode's Debug builds pass "Tempo Adjust (Dev)" (see
    // safari/scripts/build-web-extension.sh) so Safari's extension list tells
    // the dev build from the App Store one.
    name:
      browser === 'safari'
        ? process.env.SAFARI_EXTENSION_NAME || 'Tempo Adjust'
        : 'Bandcamp Tempo Adjust',
    description:
      browser === 'safari'
        ? 'A browser extension to detect and adjust track tempo on Bandcamp and Discogs'
        : 'A browser extension to detect and adjust track tempo on Bandcamp',
    browser_specific_settings: {
      gecko: {
        id: '{e7517334-00b5-4560-a933-4c4cffbeaa05}',
        data_collection_permissions: { required: ['none'] },
      },
      // Marks each AMO upload as Firefox for Android compatible; AMO floors
      // the Android minimum at 120, above anything the extension needs.
      gecko_android: {},
    },
    action:
      browser === 'safari' ? { icon_variants: safariActionIconVariants } : {},
    host_permissions: ['https://*.bcbits.com/stream/*'],
    permissions:
      browser === 'safari' ? ['nativeMessaging', 'storage'] : ['storage'],
  }),
  hooks: {
    // The App Store build ships its own icon art (keeping the Bandcamp mark out
    // of App Review), so files in public-safari/ replace same-named public/ files
    // and Safari-only files (the dark toolbar icons) are added alongside them.
    // Xcode's Debug builds (SAFARI_APP_VARIANT=dev) then layer
    // public-safari-dev/ on top, which holds the same icons with the dev band.
    'build:publicAssets': (wxt, files) => {
      if (wxt.config.browser !== 'safari') return;
      const overlayDirs = ['public-safari'];
      if (process.env.SAFARI_APP_VARIANT === 'dev') {
        overlayDirs.push('public-safari-dev');
      }
      for (const dirName of overlayDirs) {
        const overlayDir = join(wxt.config.root, dirName);
        const byDest = new Map(files.map((file) => [file.relativeDest, file]));
        for (const name of readdirSync(overlayDir)) {
          const absoluteSrc = join(overlayDir, name);
          const file = byDest.get(name);
          if (!file) {
            files.push({ absoluteSrc, relativeDest: name });
          } else if ('absoluteSrc' in file) {
            file.absoluteSrc = absoluteSrc;
          }
        }
      }
    },
  },
  modules: [
    '@wxt-dev/module-react',
    '@tempo-adjust/wxt-hooks',
    '@wxt-dev/webextension-polyfill',
  ],
  srcDir: 'src',
});
