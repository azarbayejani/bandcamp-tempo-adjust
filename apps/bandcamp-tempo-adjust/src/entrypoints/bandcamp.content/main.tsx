import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { createRoot } from 'react-dom/client';

import { ThemeProvider } from '@tempo-adjust/theme-provider';

import CollectionPage from './CollectionPage';
import PurchasesPage from './PurchasesPage';
import ProvidedTralbumPage from './TralbumPage';
import { bpmPortalId } from './TralbumPage/AlbumTrackBpms';

import './content.styles.scss';
import { readBandcampTralbum } from '@/utils/fetchBandcampTrackInfoStore';
import { createMobileTrackUrlResolver } from '@/utils/mobileCurrentTrack';

const appDiv = document.createElement('div');
appDiv.id = 'pitchSliderApp';

const root = createRoot(appDiv);

const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false } },
});

// Insert (or reset) the element a track's BPM renders into, right after
// the track's duration in Bandcamp's tracklist.
const ensureBpmPortal = (
  anchor: Element,
  trackNumber: number,
  className?: string
) => {
  const id = bpmPortalId(trackNumber);
  const existingPortal = document.getElementById(id);
  if (existingPortal) {
    existingPortal.innerHTML = '';
    return;
  }
  const portal = document.createElement('span');
  portal.id = id;
  if (className) {
    portal.className = className;
  }
  anchor.after(portal);
};

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
        ensureBpmPortal(timeNode, i + 1);
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

    const tralbum = readBandcampTralbum();
    const resolveTrackUrl = createMobileTrackUrlResolver(tralbum);

    // Bandcamp renders each mobile tracklist row as li#track_<id>, so
    // the portal can be keyed by the same track_num the store uses
    // instead of trusting the row's own numbering to match.
    for (const track of tralbum.trackinfo) {
      const duration = document.querySelector(
        `#tracklist #track_${track.id} time.duration`
      );
      if (duration) {
        ensureBpmPortal(
          duration,
          track.track_num,
          'BandcampTempoAdjust__mobileTrackBpm'
        );
      }
    }

    root.render(
      <ThemeProvider
        // The mobile layout marks dark custom designs on its page
        // container, not with body.invertIconography like desktop.
        theme={
          document.querySelector('#p-tralbum-page')?.classList.contains('dark')
            ? 'dark'
            : 'light'
        }
        buttonStyle="rounded"
        isMobile
      >
        <ProvidedTralbumPage
          getCurrTrackUrl={() =>
            resolveTrackUrl(
              document.querySelector('audio')?.getAttribute('src')
            )
          }
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
