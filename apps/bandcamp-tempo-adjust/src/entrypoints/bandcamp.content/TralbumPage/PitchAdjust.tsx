import { PitchAdjust } from '@tempo-adjust/player-components';
import { useShallow } from 'zustand/shallow';
import useAudio, { AudioState } from '../AudioStore';

const selector = ({
  togglePreservesPitch,
  setPlaybackRate,
  playbackRate,
  preservesPitch,
}: AudioState) => ({
  togglePreservesPitch,
  setPlaybackRate,
  playbackRate,
  preservesPitch,
});

const TralbumPagePitchAdjust = () => {
  const {
    togglePreservesPitch,
    setPlaybackRate,
    playbackRate,
    preservesPitch,
  } = useAudio(useShallow(selector));

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
