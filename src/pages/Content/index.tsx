import React from 'react';
import ReactDOM from 'react-dom';
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

const getPage = () => {
  if (document.querySelector('.inline_player')) {
    return 'tralbum';
  }
  if (document.querySelector('.collection-player')) {
    return 'fan-collection';
  }
};

switch (getPage()) {
  case 'tralbum':
    renderTralbumPage();
    break;
  case 'fan-collection':
    break;
}
