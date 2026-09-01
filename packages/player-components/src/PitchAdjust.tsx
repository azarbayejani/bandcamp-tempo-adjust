import React from 'react';

import PitchFader from './PitchFader';
import PitchPercentage from './PitchPercentage';
import TempoControls from './TempoControls';
import TempoRangeSelector from './TempoRangeSelector';
import { useTempoRange } from './tempo';

import * as css from './PitchAdjust.module.scss';

const PitchAdjust = ({
  playbackRate,
  preservesPitch,
  onChangePlaybackRate,
  onChangePreservesPitch,
}: {
  playbackRate: number;
  preservesPitch: boolean;
  onChangePlaybackRate: ({ playbackRate }: { playbackRate: number }) => void;
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
        <PitchPercentage playbackRate={playbackRate} />
      </div>
      <TempoRangeSelector
        tempoRange={tempoRange}
        onSelect={setTempoRangeIndex}
      />
      <div className={css.otherControlsRow}>
        <TempoControls
          preservesPitch={preservesPitch}
          onChangePreservesPitch={onChangePreservesPitch}
          onReset={() => onChangePlaybackRate({ playbackRate: 1 })}
        />
      </div>
    </div>
  );
};

export default PitchAdjust;
