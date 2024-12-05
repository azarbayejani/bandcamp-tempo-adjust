import { defineContentScript } from 'wxt/sandbox';

import { renderDiscogsPage, isDiscogsPage } from '@tempo-adjust/discogs';

// weird hack:
// Each content script needs to have *some* permissions, but on Chrome/Firefox,
// we start with no permissions by default, so use the same permissions as the
// rest of the content scripts
const fakePermissions = ['https://www.bandcamp.com/*'];

export default defineContentScript({
  // Extensions are only combined on Safari for now
  include: ['safari'],
  matches: {
    chrome: fakePermissions,
    firefox: fakePermissions,
    // Safari should always have access to Discogs
    safari: ['https://*.discogs.com/*'],
  },

  main() {
    console.log('before');
    if (!isDiscogsPage()) {
      return;
    }
    console.log('Discogs content script loaded');
    renderDiscogsPage();
  },
});
