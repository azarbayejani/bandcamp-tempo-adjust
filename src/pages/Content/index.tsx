import React from 'react';
import ReactDOM from 'react-dom';
import CollectionPage from './CollectionPage';
import TralbumPage from './TralbumPage';

const appDiv = document.createElement('div');
appDiv.id = 'pitchSliderApp';

const renderTralbumPage = () => {
  const player = document.querySelector('.inline_player');
  if (player) {
    if (!document.getElementById(appDiv.id)) {
      player.append(appDiv);
    }

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
    ReactDOM.render(<TralbumPage />, document.querySelector('#pitchSliderApp'));
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
    controlsExtra.appendChild(newVolumeContainer);
    if (!document.getElementById(appDiv.id)) {
      newVolumeContainer.appendChild(appDiv);
    }
    ReactDOM.render(<CollectionPage />, appDiv);
  }
};

const getPage = () => {
  if (document.querySelector('.inline_player')) {
    return 'tralbum';
  }
  if (document.querySelector('#collection-player')) {
    return 'fan-collection';
  }
};

switch (getPage()) {
  case 'tralbum':
    renderTralbumPage();
    break;
  case 'fan-collection':
    renderCollectionPage();
    break;
}
