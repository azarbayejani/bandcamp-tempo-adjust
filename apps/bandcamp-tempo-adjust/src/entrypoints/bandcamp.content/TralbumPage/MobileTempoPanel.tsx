import { MobileTempoPanel } from '@tempo-adjust/player-components';

import { useBpm } from '../BpmContext';
import { useAudioControls } from '../useAudioControls';
import { useCurrentTrackInfo } from './useCurrentTrackInfo';

export default function TralbumPageMobileTempoPanel() {
  const { detectBpm, openSettings, reloadCurrentBpm, setTrackBpm } = useBpm();
  const {
    togglePreservesPitch,
    changePlaybackRate,
    playbackRate,
    playbackRatePending,
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
      playbackRatePending={playbackRatePending}
      preservesPitch={preservesPitch}
      onClickDetectBpm={detectBpm}
      onClickReloadBpm={reloadCurrentBpm}
      onClickSaveBpm={(bpm) => setTrackBpm({ url: currTrackUrl, bpm })}
      onClickSettings={openSettings}
      onChangePlaybackRate={changePlaybackRate}
      onChangePreservesPitch={togglePreservesPitch}
    />
  );
}
