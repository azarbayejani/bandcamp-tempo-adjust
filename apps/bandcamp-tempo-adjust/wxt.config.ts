import { defineConfig } from 'wxt';

export default defineConfig({
  manifest: {
    name: 'Bandcamp Tempo Adjust',
    version: '0.9.2',
    description:
      'A browser extension to detect and adjust track tempo on Bandcamp',
    browser_specific_settings: {
      gecko: {
        id: '{e7517334-00b5-4560-a933-4c4cffbeaa05}',
      },
    },
    action: {},
    host_permissions: ['https://*.bcbits.com/stream/*'],
    permissions: ['storage'],
  },
  modules: [
    '@wxt-dev/module-react',
    '@tempo-adjust/wxt-hooks',
    '@wxt-dev/webextension-polyfill',
  ],
  srcDir: 'src',
});
