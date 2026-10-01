import { fileURLToPath } from 'node:url';
import { configDefaults, defineConfig } from 'vitest/config';

const bandcampSrc = fileURLToPath(
  new URL('./apps/bandcamp-tempo-adjust/src/', import.meta.url)
);

export default defineConfig({
  test: {
    setupFiles: ['./test_setup.ts'],
    environment: 'jsdom',
    css: true,
    globals: true,
    exclude: [
      ...configDefaults.exclude,
      '**/e2e/**',
      '**/.output/**',
    ],
  },
  resolve: {
    alias: {
      'webextension-polyfill': '@webext-core/fake-browser',
      // WXT only applies its `@/` and `~/` source aliases to its own
      // builds, so Vitest needs them spelled out.
      '@/': bandcampSrc,
      '~/': bandcampSrc,
    },
  },
});
