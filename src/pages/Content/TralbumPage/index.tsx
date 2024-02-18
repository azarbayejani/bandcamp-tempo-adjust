import React, { useEffect, useState } from 'react';

import { fetchBandcampTrackInfoStore } from '../../../services/fetchBandcampTrackInfoStore';
import { TrackInfoByUrl } from '../../../types';
import AlbumTrackBpms from './AlbumTrackBpms';
import { AudioProvider } from '../AudioContext';
import CurrentTrackBpm from './CurrentTrackBpm';
import PitchAdjust from '../PitchAdjust';

const getCurrTrackUrl = () =>
  document.querySelector('.title_link')?.getAttribute('href')?.trim();

const TralbumPage = () => {
  const [trackInfoStore, setTrackInfoStore] = useState<TrackInfoByUrl>();

  useEffect(() => {
    fetchBandcampTrackInfoStore().then((store) => setTrackInfoStore(store));
  }, []);

  if (!trackInfoStore) {
    return null;
  }

  return (
    <AudioProvider
      selector="audio"
      initialTrackInfoStore={trackInfoStore}
      getCurrTrackUrl={getCurrTrackUrl}
    >
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

export default TralbumPage;
