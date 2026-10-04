import { defineContentScript } from '#imports';

import { renderDiscogsPage, isDiscogsPage } from '@tempo-adjust/discogs';

// WXT validates every content script before applying `include`, and a
// per-browser `matches` resolves to undefined for browsers without a key,
// which fails the build. An empty list satisfies the check; the entrypoint
// is still skipped on Chrome/Firefox and never reaches their manifests.
const noMatches: string[] = [];

export default defineContentScript({
  // Extensions are only combined on Safari for now
  include: ['safari'],
  matches: {
    chrome: noMatches,
    firefox: noMatches,
    // Safari should always have access to Discogs
    safari: ['https://*.discogs.com/*'],
  },

  main() {
    if (!isDiscogsPage()) {
      return;
    }
    console.log('Discogs content script loaded');
    renderDiscogsPage({ commitOnRelease: import.meta.env.SAFARI });
  },
});
