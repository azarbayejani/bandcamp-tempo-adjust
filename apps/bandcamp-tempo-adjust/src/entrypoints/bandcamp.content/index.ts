import { defineContentScript } from '#imports';

export default defineContentScript({
  matches: ['http://*.bandcamp.com/*', 'https://*.bandcamp.com/*'],
  main() {
    return import('./main');
  },
});
