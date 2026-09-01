import { MobileTempoPanel } from '@tempo-adjust/player-components';
import { useShallow } from 'zustand/shallow';

import { useBpm } from '../BpmContext';
import useAudio, { type AudioState } from '../AudioStore';

const selector = ({
  togglePreservesPitch,
  setPlaybackRate,
  playbackRate,
  preservesPitch,
  currTrackUrl,
}: AudioState) => ({
  togglePreservesPitch,
  setPlaybackRate,
  playbackRate,
  preservesPitch,
  currTrackUrl,
});

export default function TralbumPageMobileTempoPanel() {
  const { trackInfoState, loadBpms, reloadCurrentBpm, setTrackBpm } = useBpm();
  const {
    togglePreservesPitch,
    setPlaybackRate,
    playbackRate,
    preservesPitch,
    currTrackUrl,
  } = useAudio(useShallow(selector));

  if (!currTrackUrl) {
    return null;
  }

  const trackInfo = trackInfoState.trackInfoStore[currTrackUrl];

  if (!trackInfo) {
    return null;
  }

  return (
    <MobileTempoPanel
      bpm={trackInfo.bpm}
      loading={trackInfo.loading}
      error={trackInfo.error}
      playbackRate={playbackRate}
      preservesPitch={preservesPitch}
      onClickLoadBpms={loadBpms}
      onClickReloadBpm={reloadCurrentBpm}
      onClickSaveBpm={(bpm) => setTrackBpm({ url: currTrackUrl, bpm })}
      onChangePlaybackRate={({ playbackRate }) => setPlaybackRate(playbackRate)}
      onChangePreservesPitch={togglePreservesPitch}
    />
  );
}
