import { createRoot } from 'react-dom/client';

import { ThemeProvider } from '@tempo-adjust/theme-provider';

import PitchAdjust from './PitchAdjust';
import useForceUpdate from './store';

// `commitOnRelease` holds the video at its current rate until the pitch
// fader is released, for browsers where changing playbackRate interrupts
// playback (https://bugs.webkit.org/show_bug.cgi?id=163433).
const renderDiscogsPage = ({
  commitOnRelease = false,
}: { commitOnRelease?: boolean } = {}) => {
  const appDiv = document.createElement('div');
  appDiv.id = 'discogs-tempo-adjust';
  const root = createRoot(appDiv);
  const observer = new MutationObserver(() => {
    if (!document.getElementById(appDiv.id)) {
      root.render(
        <ThemeProvider theme="light">
          <PitchAdjust commitOnRelease={commitOnRelease} />
        </ThemeProvider>
      );

      const playerContainer =
        document.querySelector("[class^='player_']")?.parentElement;

      if (playerContainer) {
        playerContainer.appendChild(appDiv);

        const iframe = playerContainer.querySelector('iframe');
        if (iframe) {
          const iframeObserver = new MutationObserver(() => {
            useForceUpdate.getState().forceUpdate();
          });

          iframeObserver.observe(iframe, { attributes: true });
        }
      }
    }
  });

  if (!document.getElementById(appDiv.id)) {
    const placeholder = document.getElementById('placeholder')?.parentElement;
    if (placeholder) {
      observer.observe(placeholder, {
        childList: true,
        subtree: true,
      });
    }
  }
};

const isDiscogsPage = () => window.location.hostname === 'www.discogs.com';

export { renderDiscogsPage, isDiscogsPage };
