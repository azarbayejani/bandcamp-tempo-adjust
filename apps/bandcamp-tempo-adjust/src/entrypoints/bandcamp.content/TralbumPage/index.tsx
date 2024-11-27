import React, { useEffect, useState } from 'react';

import { fetchBandcampTrackInfoStore } from '~/utils/fetchBandcampTrackInfoStore';
import { TrackInfoByUrl } from '~/types';
import AlbumTrackBpms from './AlbumTrackBpms';
import { BpmProvider } from '../BpmContext';
import useAudio, { AudioState } from '../AudioStore';
import CurrentTrackBpm from './CurrentTrackBpm';
import { PitchAdjust } from '@tempo-adjust/player-components';
import { AudioController } from '../AudioController';
import { useShallow } from 'zustand/shallow';

const getCurrTrackUrl = () =>
  document.querySelector('.title_link')?.getAttribute('href')?.trim();

const selector = ({ togglePreservesPitch, setPlaybackRate }: AudioState) => ({
  togglePreservesPitch,
  setPlaybackRate,
});

const TralbumPagePitchAdjust = () => {
  const { togglePreservesPitch, setPlaybackRate } = useAudio(
    useShallow(selector)
  );

  return (
    <PitchAdjust
      onChangePreservesPitch={togglePreservesPitch}
      onChangeTempo={({ playbackRate }) => setPlaybackRate(playbackRate)}
    />
  );
};

const TralbumPage = () => {
  const [trackInfoStore, setTrackInfoStore] = useState<TrackInfoByUrl>();

  useEffect(() => {
    new AudioController('audio');
    fetchBandcampTrackInfoStore().then((store) => setTrackInfoStore(store));
  }, []);

  if (!trackInfoStore) {
    return null;
  }

  return (
    <BpmProvider
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
    </BpmProvider>
  );
};

export default TralbumPage;
