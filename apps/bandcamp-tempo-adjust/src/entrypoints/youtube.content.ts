import { defineContentScript } from '#imports';

import { renderYoutubeIframe } from '@tempo-adjust/youtube';

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
    // Safari should always have access to Youtube
    safari: ['https://*.youtube.com/*', 'https://*.youtube-nocookie.com/*'],
  },
  allFrames: true,
  main() {
    console.log('Youtube content script loaded');
    renderYoutubeIframe({ allowedOrigins: ['https://www.discogs.com'] });
  },
});
