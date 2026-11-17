import { defineContentScript } from '#imports';

import { renderDiscogsPage } from '@tempo-adjust/discogs';
import { isWebKit } from '@tempo-adjust/player-components';

export default defineContentScript({
  matches: ['https://www.discogs.com/*'],
  main() {
    // Orion runs this build on WebKit, where the pitch fader has to hold
    // the rate until release (see `renderDiscogsPage`).
    renderDiscogsPage({ commitOnRelease: isWebKit() });
  },
});
