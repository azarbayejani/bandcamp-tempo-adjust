import { existsSync, readdirSync } from 'node:fs';
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
    name: browser === 'safari' ? 'Tempo Adjust' : 'Bandcamp Tempo Adjust',
    description:
      'A browser extension to detect and adjust track tempo on Bandcamp',
    browser_specific_settings: {
      gecko: {
        id: '{e7517334-00b5-4560-a933-4c4cffbeaa05}',
        data_collection_permissions: { required: ['none'] },
      },
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
    'build:publicAssets': (wxt, files) => {
      if (wxt.config.browser !== 'safari') return;
      const safariDir = join(wxt.config.root, 'public-safari');
      for (const file of files) {
        if (!('absoluteSrc' in file)) continue;
        const override = join(safariDir, file.relativeDest);
        if (existsSync(override)) file.absoluteSrc = override;
      }
      const existing = new Set(files.map((file) => file.relativeDest));
      for (const name of readdirSync(safariDir)) {
        if (existing.has(name)) continue;
        files.push({ absoluteSrc: join(safariDir, name), relativeDest: name });
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
