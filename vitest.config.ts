import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    setupFiles: ['./test_setup.ts'],
    environment: 'jsdom',
    css: true,
    globals: true,
  },
  resolve: {
    alias: {
      'webextension-polyfill': '@webext-core/fake-browser',
    },
  },
});
