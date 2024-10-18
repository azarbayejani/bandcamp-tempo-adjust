import React, { useEffect, useState } from 'react';

import { fetchBandcampTrackInfoStore } from '~/utils/fetchBandcampTrackInfoStore';
import { TrackInfoByUrl } from '~/types';
import AlbumTrackBpms from './AlbumTrackBpms';
import { AudioProvider, useAudio } from '../AudioContext';
import CurrentTrackBpm from './CurrentTrackBpm';
import { PitchAdjust } from '@tempo-adjust/player-components';

const getCurrTrackUrl = () =>
  document.querySelector('.title_link')?.getAttribute('href')?.trim();

const TralbumPagePitchAdjust = () => {
  const { setPlaybackRate, setPreservesPitch } = useAudio();

  return (
    <PitchAdjust
      onChangePreservesPitch={() => {
        setPreservesPitch((preservesPitch) => !preservesPitch);
      }}
      onChangeTempo={({ playbackRate }) => setPlaybackRate(playbackRate)}
    />
  );
};

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
      <div style={{ marginTop: 4, display: 'flex', gap: 12 }}>
        <CurrentTrackBpm />
        <div style={{ borderLeft: '1px solid rgba(0, 0, 0, 0.15)' }}></div>
        <div style={{ flexGrow: 1 }}>
          <TralbumPagePitchAdjust />
        </div>
      </div>
    </AudioProvider>
  );
};

export default TralbumPage;
