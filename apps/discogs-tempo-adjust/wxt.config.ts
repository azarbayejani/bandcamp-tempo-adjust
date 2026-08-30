import { defineConfig } from 'wxt';

export default defineConfig({
  manifest: {
    name: 'Discogs Tempo Adjust',
    description: 'A browser extension to adjust track tempo on Discogs',
    action: {},
    browser_specific_settings: {
      gecko: {
        id: '{6fc0284b-f220-4709-acad-d8b95f55637f}',
      },
    },
  },
  modules: [
    '@wxt-dev/module-react',
    '@tempo-adjust/wxt-hooks',
    '@wxt-dev/webextension-polyfill',
  ],
  srcDir: 'src',
});
