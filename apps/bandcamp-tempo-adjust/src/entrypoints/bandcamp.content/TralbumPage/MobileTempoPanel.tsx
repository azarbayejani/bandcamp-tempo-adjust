import { MobileTempoPanel } from '@tempo-adjust/player-components';

import { useBpm } from '../BpmContext';
import { useAudioControls } from '../useAudioControls';
import { useCurrentTrackInfo } from './useCurrentTrackInfo';

export default function TralbumPageMobileTempoPanel() {
  const { loadBpms, reloadCurrentBpm, setTrackBpm } = useBpm();
  const {
    togglePreservesPitch,
    setPlaybackRate,
    playbackRate,
    preservesPitch,
  } = useAudioControls();
  const { currTrackUrl, trackInfo } = useCurrentTrackInfo();

  if (!currTrackUrl || !trackInfo) {
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
