import { existsSync } from 'node:fs';
import { join } from 'node:path';
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
  hooks: {
    // The App Store build ships its own icon art (keeping the Bandcamp mark out
    // of App Review), so files in public-safari/ replace same-named public/ files.
    'build:publicAssets': (wxt, files) => {
      if (wxt.config.browser !== 'safari') return;
      for (const file of files) {
        if (!('absoluteSrc' in file)) continue;
        const override = join(
          wxt.config.root,
          'public-safari',
          file.relativeDest
        );
        if (existsSync(override)) file.absoluteSrc = override;
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
