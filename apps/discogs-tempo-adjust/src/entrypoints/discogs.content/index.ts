import { defineContentScript } from '#imports';

import { renderDiscogsPage } from '@tempo-adjust/discogs';

export default defineContentScript({
  matches: ['https://www.discogs.com/*'],
  main() {
    renderDiscogsPage();
  },
});
