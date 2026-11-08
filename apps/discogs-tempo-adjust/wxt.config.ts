import { defineConfig } from 'wxt';

export default defineConfig({
  manifest: {
    name: 'Discogs Tempo Adjust',
    description: 'A browser extension to adjust track tempo on Discogs',
    action: {},
    browser_specific_settings: {
      gecko: {
        id: '{6fc0284b-f220-4709-acad-d8b95f55637f}',
        data_collection_permissions: { required: ['none'] },
      },
      // Marks each AMO upload as Firefox for Android compatible; AMO floors
      // the Android minimum at 120, above anything the extension needs.
      gecko_android: {},
    },
  },
  modules: [
    '@wxt-dev/module-react',
    '@tempo-adjust/wxt-hooks',
    '@wxt-dev/webextension-polyfill',
  ],
  srcDir: 'src',
});
