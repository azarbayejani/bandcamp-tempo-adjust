import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { createRoot } from 'react-dom/client';

import { ThemeProvider } from '@tempo-adjust/theme-provider';

import CollectionPage from './CollectionPage';
import PurchasesPage from './PurchasesPage';
import ProvidedTralbumPage from './TralbumPage';

import './content.styles.scss';
import { type BandcampTralbum } from '@/utils/fetchBandcampTrackInfoStore';

const appDiv = document.createElement('div');
appDiv.id = 'pitchSliderApp';

const root = createRoot(appDiv);

const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false } },
});

const renderTralbumPage = () => {
  const body = document.querySelector('body');
  const player = document.querySelector('.inline_player');

  if (player && body) {
    appDiv.style.display = 'block';
    appDiv.style.marginTop = '8px';
    appDiv.style.clear = 'both';
    appDiv.style.width = '100%';

    const existingApp = document.getElementById(appDiv.id);
    if (existingApp && existingApp !== appDiv) {
      existingApp.remove();
    }
    player.append(appDiv);

    // BUG: this assumes that all of these are playable tracks!
    const trackNodes = document.querySelectorAll('.title-col .title');
    trackNodes.forEach((trackNode, i) => {
      const timeNode = trackNode.querySelector('.time');
      if (timeNode) {
        const portal = document.createElement('span');
        portal.id = `BandcampPitchAdjust_bpm_${i + 1}`;
        const existingPortal = document.getElementById(portal.id);
        if (!existingPortal) {
          timeNode.after(portal);
        } else {
          existingPortal.innerHTML = '';
        }
      }
    });
    root.render(
      <ThemeProvider
        theme={body.classList.contains('invertIconography') ? 'dark' : 'light'}
      >
        <ProvidedTralbumPage
          getCurrTrackUrl={() =>
            document.querySelector('.title_link')?.getAttribute('href')?.trim()
          }
        />
      </ThemeProvider>
    );
  }
};

const renderMobileTralbumPage = () => {
  const body = document.querySelector('body');
  const player = document.querySelector('#player');
  if (player && body) {
    appDiv.style.gridColumn = '1 / -1';
    if (document.getElementById(appDiv.id)) {
      document.getElementById(appDiv.id)?.replaceWith(appDiv);
    } else {
      player.append(appDiv);
    }

    document.querySelectorAll('#tracklist li.track').forEach((trackNode) => {
      const trackNumber = trackNode.getAttribute('data-num');
      const duration = trackNode.querySelector('time.duration');
      if (!trackNumber || !duration) {
        return;
      }
      const portal = document.createElement('span');
      portal.id = `BandcampPitchAdjust_bpm_${trackNumber}`;
      portal.className = 'BandcampTempoAdjust__mobileTrackBpm';
      const existingPortal = document.getElementById(portal.id);
      if (!existingPortal) {
        duration.after(portal);
      } else {
        existingPortal.innerHTML = '';
      }
    });

    root.render(
      <ThemeProvider
        theme={body.classList.contains('invertIconography') ? 'dark' : 'light'}
        buttonStyle="rounded"
        isMobile
      >
        <ProvidedTralbumPage
          getCurrTrackUrl={() => {
            const tralbumNode =
              document.querySelector<HTMLElement>('[data-tralbum]');
            const tralbum: BandcampTralbum = JSON.parse(
              tralbumNode?.dataset.tralbum || '{}'
            );
            const tracks = tralbum.trackinfo ?? [];

            const src = document.querySelector('audio')?.getAttribute('src');
            if (src) {
              const playing = tracks.find(
                (track) =>
                  track.file &&
                  Object.values(track.file).includes(src) &&
                  track.title_link
              );
              if (playing) {
                return playing.title_link;
              }
            }

            // Before playback starts the audio elements have no src; the
            // player is primed with the featured track (or the first one).
            const featured = tracks.find(
              (track) =>
                track.id === tralbum.featured_track_id &&
                track.title_link &&
                track.file
            );
            return (
              featured ?? tracks.find((track) => track.title_link && track.file)
            )?.title_link;
          }}
        />
      </ThemeProvider>
    );
  }
};

const renderCollectionPage = () => {
  const controlsExtra = document.querySelector<HTMLElement>('.controls-extra');
  const volumeControl = document.querySelector<HTMLElement>('.vol');

  if (volumeControl && controlsExtra) {
    const newVolumeContainer = document.createElement('div');

    newVolumeContainer.style.display = 'flex';
    newVolumeContainer.style.flexDirection = 'column';
    newVolumeContainer.style.overflow = 'hidden';

    controlsExtra.style.marginTop = '12px';

    newVolumeContainer.appendChild(volumeControl);
    newVolumeContainer.appendChild(appDiv);
    if (document.getElementById(appDiv.id)) {
      document
        .getElementById(appDiv.id)
        ?.parentElement?.replaceWith(newVolumeContainer);
    } else {
      controlsExtra.appendChild(newVolumeContainer);
    }
    root.render(<CollectionPage />);
  }
};

const renderPurchasesPage = () => {
  const purchasesDiv = document.querySelector<HTMLElement>('.purchases');
  const pageDataDiv = document.getElementById('pagedata');

  if (!pageDataDiv || !pageDataDiv.dataset.blob) {
    console.error('No page data!');
    return;
  }

  let pageData;
  try {
    pageData = JSON.parse(pageDataDiv.dataset.blob);
  } catch {
    console.error('Could not get page data!');
    return;
  }
  const username = pageData?.identities?.fan?.username;

  if (!username) {
    console.error('Could not get user identity!');
    return;
  }

  const rawCrumbs = document.getElementById('js-crumbs-data')?.dataset?.crumbs;
  let crumbsData: { [key: string]: string } = {};
  if (rawCrumbs) {
    try {
      crumbsData = JSON.parse(rawCrumbs);
    } catch {
      console.error('Could not get crumbs data!');
      return;
    }
  }

  if (purchasesDiv) {
    if (document.getElementById(appDiv.id)) {
      document.getElementById(appDiv.id)?.replaceWith(appDiv);
    } else {
      purchasesDiv.before(appDiv);
    }
    root.render(
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <PurchasesPage
          username={username}
          totalItems={pageData?.orderhistory?.total_items || 0}
          crumb={crumbsData['api/orderhistory/1/get_items']}
        />
      </QueryClientProvider>
    );
  }
};

const getPage = () => {
  if (document.querySelector('.inline_player')) {
    return 'tralbum';
  }
  if (document.querySelector('#p-tralbum-page')) {
    return 'mobile-tralbum';
  }
  if (document.querySelector('#collection-player')) {
    return 'fan-collection';
  }
  if (document.querySelector('.purchases')) {
    return 'purchases';
  }
};

switch (getPage()) {
  case 'tralbum':
    renderTralbumPage();
    break;
  case 'mobile-tralbum':
    renderMobileTralbumPage();
    break;
  case 'fan-collection':
    renderCollectionPage();
    break;
  case 'purchases':
    renderPurchasesPage();
    break;
}
