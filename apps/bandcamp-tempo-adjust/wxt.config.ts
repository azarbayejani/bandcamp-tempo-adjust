import { defineConfig } from 'wxt';

export default defineConfig({
  manifest: ({ browser }) => ({
    name: import.meta.env.WXT_EXTENSION_NAME || 'Bandcamp Tempo Adjust',
    description:
      'A browser extension to detect and adjust track tempo on Bandcamp',
    browser_specific_settings: {
      gecko: {
        id: '{e7517334-00b5-4560-a933-4c4cffbeaa05}',
        data_collection_permissions: { required: ['none'] },
      },
    },
    action: {},
    host_permissions: ['https://*.bcbits.com/stream/*'],
    permissions:
      browser === 'safari' ? ['nativeMessaging', 'storage'] : ['storage'],
  }),
  modules: [
    '@wxt-dev/module-react',
    '@tempo-adjust/wxt-hooks',
    '@wxt-dev/webextension-polyfill',
  ],
  srcDir: 'src',
});
