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
    const timeNodes = document.querySelectorAll('.title-col .title .time');
    timeNodes.forEach((node, i) => {
      const portal = document.createElement('span');
      portal.id = `BandcampPitchAdjust_bpm_${i + 1}`;
      const existingPortal = document.getElementById(portal.id);
      if (!existingPortal) {
        node.after(portal);
      } else {
        existingPortal.innerHTML = '';
      }
    });
    ReactDOM.render(<TralbumPage />, document.querySelector('#pitchSliderApp'));
  }
};

const renderCollectionPage = () => {
  console.log('hello');
  const volumeControl = document.querySelector('.vol');
  if (volumeControl) {
    if (!document.getElementById(appDiv.id)) {
      volumeControl.prepend(appDiv);
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
