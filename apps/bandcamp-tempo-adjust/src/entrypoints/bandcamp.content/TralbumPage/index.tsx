import React, { useEffect, useState } from 'react';

import { fetchBandcampTrackInfoStore } from '~/utils/fetchBandcampTrackInfoStore';
import { TrackInfoByUrl } from '~/types';
import AlbumTrackBpms from './AlbumTrackBpms';
import { BpmProvider } from '../BpmContext';
import CurrentTrackBpm from './CurrentTrackBpm';
import { AudioController } from '../AudioController';
import TralbumPagePitchAdjust from './PitchAdjust';

const getCurrTrackUrl = () =>
  document.querySelector('.title_link')?.getAttribute('href')?.trim();

const TralbumPage = () => {
  const [trackInfoStore, setTrackInfoStore] = useState<TrackInfoByUrl>();

  useEffect(() => {
    new AudioController('audio', getCurrTrackUrl);
    fetchBandcampTrackInfoStore().then((store) => setTrackInfoStore(store));
  }, []);

  if (!trackInfoStore) {
    return null;
  }

  return (
    <BpmProvider initialTrackInfoStore={trackInfoStore}>
      <AlbumTrackBpms />
      <div style={{ marginTop: 4, display: 'flex', gap: 12 }}>
        <CurrentTrackBpm />
        <div style={{ borderLeft: '1px solid rgba(0, 0, 0, 0.15)' }}></div>
        <div style={{ flexGrow: 1 }}>
          <TralbumPagePitchAdjust />
        </div>
      </div>
    </BpmProvider>
  );
};

export default TralbumPage;
