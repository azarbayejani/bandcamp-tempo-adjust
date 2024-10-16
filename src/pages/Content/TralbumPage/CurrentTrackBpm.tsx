import React from 'react';

import { BpmDetection } from '@tempo-adjust/player-components';

import { useAudio } from '../AudioContext';

export default function CurrentTrackBpm() {
  const {
    trackInfoState,
    playbackRate,
    loadBpms,
    reloadCurrentBpm,
    setTrackBpm,
  } = useAudio();

  const { currTrackUrl, trackInfoStore } = trackInfoState;

  if (!currTrackUrl) {
    return null;
  }

  const trackInfo = trackInfoStore[currTrackUrl];

  return (
    <BpmDetection
      bpm={trackInfo.bpm}
      loading={trackInfo.loading}
      error={trackInfo.error}
      playbackRate={playbackRate}
      onClickLoadBpms={loadBpms}
      onClickReloadBpm={reloadCurrentBpm}
      onClickSaveBpm={(bpm) => setTrackBpm({ url: currTrackUrl, bpm })}
    />
  );
}
