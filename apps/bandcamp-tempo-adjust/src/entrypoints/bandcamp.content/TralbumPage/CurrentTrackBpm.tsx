import React from 'react';

import { BpmDetection } from '@tempo-adjust/player-components';

import { useBpm } from '../BpmContext';
import useAudio from '../AudioStore';

export default function CurrentTrackBpm() {
  const { trackInfoState, loadBpms, reloadCurrentBpm, setTrackBpm } = useBpm();
  const playbackRate = useAudio(({ playbackRate }) => playbackRate);
  const currTrackUrl = useAudio(({ currTrackUrl }) => currTrackUrl);

  const { trackInfoStore } = trackInfoState;

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
