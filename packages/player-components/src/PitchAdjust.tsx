import PitchFader from './PitchFader';
import PitchPercentage from './PitchPercentage';
import TempoControls from './TempoControls';
import TempoRangeSelector from './TempoRangeSelector';
import { useTempoRange, type PlaybackRateChange } from './tempo';

import * as css from './PitchAdjust.module.scss';

// `playbackRatePending` marks a `playbackRate` that is shown but not yet
// applied to the audio, which dims the readout.
const PitchAdjust = ({
  playbackRate,
  playbackRatePending,
  preservesPitch,
  onChangePlaybackRate,
  onChangePreservesPitch,
}: {
  playbackRate: number;
  playbackRatePending?: boolean;
  preservesPitch: boolean;
  onChangePlaybackRate: (change: PlaybackRateChange) => void;
  onChangePreservesPitch: () => void;
}) => {
  const { tempoRange, setTempoRangeIndex } = useTempoRange();

  return (
    <div className={css.pitchAdjust}>
      <div className={css.sliderContainer}>
        <PitchFader
          playbackRate={playbackRate}
          tempoRange={tempoRange}
          onChangePlaybackRate={onChangePlaybackRate}
        />
        <PitchPercentage
          playbackRate={playbackRate}
          pending={playbackRatePending}
        />
      </div>
      <TempoRangeSelector
        tempoRange={tempoRange}
        onSelect={setTempoRangeIndex}
      />
      <div className={css.otherControlsRow}>
        <TempoControls
          preservesPitch={preservesPitch}
          onChangePreservesPitch={onChangePreservesPitch}
          onReset={() =>
            onChangePlaybackRate({ playbackRate: 1, committed: true })
          }
        />
      </div>
    </div>
  );
};

export default PitchAdjust;
