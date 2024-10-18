import { defineContentScript } from 'wxt/sandbox';

export default defineContentScript({
  matches: ['http://*.bandcamp.com/*', 'https://*.bandcamp.com/*'],
  main() {
    return import('./main.tsx');
  },
});
