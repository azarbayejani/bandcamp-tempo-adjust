import { BpmDetection } from '@tempo-adjust/player-components';

import { useBpm } from '../BpmContext';
import { useAudioControls } from '../useAudioControls';
import { useCurrentTrackInfo } from './useCurrentTrackInfo';

export default function CurrentTrackBpm() {
  const { loadBpms, reloadCurrentBpm, setTrackBpm } = useBpm();
  const { playbackRate, playbackRatePending } = useAudioControls();
  const { currTrackUrl, trackInfo } = useCurrentTrackInfo();

  if (!currTrackUrl || !trackInfo) {
    return null;
  }

  return (
    <BpmDetection
      bpm={trackInfo.bpm}
      loading={trackInfo.loading}
      error={trackInfo.error}
      playbackRate={playbackRate}
      playbackRatePending={playbackRatePending}
      onClickLoadBpms={loadBpms}
      onClickReloadBpm={reloadCurrentBpm}
      onClickSaveBpm={(bpm) => setTrackBpm({ url: currTrackUrl, bpm })}
    />
  );
}
