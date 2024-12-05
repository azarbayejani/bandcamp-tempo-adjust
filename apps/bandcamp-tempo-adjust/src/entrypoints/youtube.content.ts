import { defineContentScript } from 'wxt/sandbox';

import { renderYoutubeIframe } from '@tempo-adjust/youtube';

// weird hack:
// Each content script needs to have *some* permissions, but on Chrome/Firefox,
// these scripts start with no permissions by default because of Discogs Tempo
// Adjust, so just use bandcamp.com since that's always allowed
const fakePermissions = ['https://www.bandcamp.com/*'];

export default defineContentScript({
  // Extensions are only combined on Safari for now
  include: ['safari'],
  matches: {
    chrome: fakePermissions,
    firefox: fakePermissions,
    // Safari should always have access to Youtube
    safari: ['https://*.youtube.com/*', 'https://*.youtube-nocookie.com/*'],
  },
  allFrames: true,
  main() {
    console.log('Youtube content script loaded');
    renderYoutubeIframe({ allowedOrigins: ['https://www.discogs.com'] });
  },
});
