import React from 'react';
import { createRoot } from 'react-dom/client';

import { ThemeProvider } from '@tempo-adjust/theme-provider';

import PitchAdjust from './PitchAdjust';
import useForceUpdate from './store';

const renderDiscogsPage = () => {
  const appDiv = document.createElement('div');
  appDiv.id = 'discogs-tempo-adjust';
  const root = createRoot(appDiv);
  const observer = new MutationObserver((records) => {
    if (!document.getElementById(appDiv.id)) {
      root.render(
        <ThemeProvider theme="light">
          <PitchAdjust />
        </ThemeProvider>
      );

      const playerContainer =
        document.querySelector("[class^='player_']")?.parentElement;

      if (playerContainer) {
        playerContainer.appendChild(appDiv);

        const iframe = playerContainer.querySelector('iframe');
        if (iframe) {
          const iframeObserver = new MutationObserver((records) => {
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
