import { defineContentScript } from '#imports';

import { renderDiscogsPage } from './renderer';

export default defineContentScript({
  matches: ['https://www.discogs.com/*'],
  main() {
    renderDiscogsPage();
  },
});
