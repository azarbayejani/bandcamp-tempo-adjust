import { PitchAdjust } from '@tempo-adjust/player-components';

import { useAudioControls } from '../useAudioControls';

const TralbumPagePitchAdjust = () => {
  const {
    togglePreservesPitch,
    changePlaybackRate,
    playbackRate,
    playbackRatePending,
    preservesPitch,
  } = useAudioControls();

  return (
    <PitchAdjust
      playbackRate={playbackRate}
      playbackRatePending={playbackRatePending}
      preservesPitch={preservesPitch}
      onChangePreservesPitch={togglePreservesPitch}
      onChangePlaybackRate={changePlaybackRate}
    />
  );
};

export default TralbumPagePitchAdjust;
