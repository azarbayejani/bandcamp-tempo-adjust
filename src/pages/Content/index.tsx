import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { AudioProvider } from './AudioContext';
import PitchAdjust from './PitchAdjust';
import CurrentTrackBpm from './CurrentTrackBpm';
import AlbumTrackBpms from './AlbumTrackBpms';
import { fetchBandcampTrackInfoStore } from '../../services/fetchBandcampTrackInfoStore';
import { TrackInfoByUrl } from '../../types';

const appDiv = document.createElement('div');
appDiv.id = 'pitchSliderApp';
const player = document.querySelector('.inline_player');

const App = () => {
  const [trackInfoStore, setTrackInfoStore] = useState<TrackInfoByUrl>();

  useEffect(() => {
    fetchBandcampTrackInfoStore().then((store) => setTrackInfoStore(store));
  }, []);

  if (!trackInfoStore) {
    return null;
  }

  return (
    <AudioProvider selector="audio" initialTrackInfoStore={trackInfoStore}>
      <AlbumTrackBpms />
      <div style={{ marginTop: 4 }}>
        <PitchAdjust />
        <div
          style={{
            marginTop: 5,
            display: 'flex',
            alignItems: 'center',
            gap: 2,
            justifyContent: 'flex-end',
          }}
        >
          <CurrentTrackBpm />
        </div>
      </div>
    </AudioProvider>
  );
};

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
  ReactDOM.render(<App />, document.querySelector('#pitchSliderApp'));
}
