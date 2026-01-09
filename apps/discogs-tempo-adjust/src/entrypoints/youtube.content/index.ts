import { defineContentScript } from '#imports';

import { renderYoutubePage } from './renderer';

export default defineContentScript({
  matches: ['https://*.youtube.com/*', 'https://*.youtube-nocookie.com/*'],
  allFrames: true,
  main() {
    renderYoutubePage();
  },
});
