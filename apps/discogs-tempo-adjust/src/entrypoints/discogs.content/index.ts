import { defineContentScript } from 'wxt/sandbox';

import { renderDiscogsPage } from './renderer';

export default defineContentScript({
  matches: ['https://www.discogs.com/*'],
  main() {
    renderDiscogsPage();
  },
});
