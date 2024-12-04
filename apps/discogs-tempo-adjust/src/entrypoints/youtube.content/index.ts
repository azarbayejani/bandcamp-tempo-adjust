import { defineContentScript } from 'wxt/sandbox';

import { renderYoutubeIframe } from '@tempo-adjust/youtube';

export default defineContentScript({
  matches: ['https://*.youtube.com/*', 'https://*.youtube-nocookie.com/*'],
  allFrames: true,
  main() {
    renderYoutubeIframe({ allowedOrigins: ['https://www.discogs.com'] });
  },
});
