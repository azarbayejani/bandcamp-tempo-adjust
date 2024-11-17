import { defineConfig } from 'wxt';

export default defineConfig({
  manifest: {
    name: 'Discogs Tempo Adjust',
    version: '0.1.0',
    description:
      'A browser extension to detect and adjust track tempo on Discogs',
    action: {},
  },
  modules: ['@wxt-dev/module-react', '@tempo-adjust/wxt-hooks'],
  srcDir: 'src',
});
