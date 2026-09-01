import { PitchAdjust } from '@tempo-adjust/player-components';

import { useAudioControls } from '../useAudioControls';

const TralbumPagePitchAdjust = () => {
  const {
    togglePreservesPitch,
    setPlaybackRate,
    playbackRate,
    preservesPitch,
  } = useAudioControls();

  return (
    <PitchAdjust
      playbackRate={playbackRate}
      preservesPitch={preservesPitch}
      onChangePreservesPitch={togglePreservesPitch}
      onChangePlaybackRate={({ playbackRate }) => setPlaybackRate(playbackRate)}
    />
  );
};

export default TralbumPagePitchAdjust;
