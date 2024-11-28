import React from 'react';

import * as css from './PitchAdjust.module.scss';

import Button from './Button';

export const tempoRanges = [
  {
    label: '±6',
    min: 1 - 0.06,
    max: 1 + 0.06,
  },
  {
    label: '±10',
    min: 1 - 0.1,
    max: 1 + 0.1,
  },
  {
    label: '±16',
    min: 1 - 0.16,
    max: 1 + 0.16,
  },
  {
    label: 'WIDE',
    // TODO: make this based on the browser
    min: 0.1,
    max: 2.0,
  },
];

const useTempoRange = () => {
  const [tempoRangeIndex, setTempoRangeIndex] = React.useState(1);
  return {
    tempoRange: tempoRanges[tempoRangeIndex % tempoRanges.length],
    setTempoRangeIndex,
  };
};

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

  const percentage = String(((playbackRate - 1) * 100).toPrecision(3));
  const percentageAsString =
    playbackRate < 1
      ? String(percentage).slice(0, 4)
      : `+${String(percentage).slice(0, 3)}`;

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChangePlaybackRate({ playbackRate: event.target.valueAsNumber });
  };

  const handlePreservesPitchChange = () => {
    onChangePreservesPitch();
  };

  const handleClickReset = () => {
    onChangePlaybackRate({ playbackRate: 1 });
  };

  return (
    <div className={css.pitchAdjust}>
      <div className={css.sliderContainer}>
        <input
          type="range"
          onChange={handleSliderChange}
          onInput={handleSliderChange}
          min={tempoRange.min}
          max={tempoRange.max}
          step={0.001}
          value={playbackRate}
          className={css.slider}
          aria-valuetext={`${percentageAsString}%`}
        />
        <div>
          <strong>{percentageAsString}%</strong>{' '}
        </div>
      </div>
      <div className={css.tempoRangeRow} role="radiogroup">
        {tempoRanges.map((currTempoRange, index) => (
          <Button
            key={currTempoRange.label}
            onClick={() => {
              setTempoRangeIndex(index);
            }}
            role="radio"
            aria-checked={currTempoRange.label === tempoRange.label}
          >
            {currTempoRange.label}
          </Button>
        ))}
      </div>
      <div className={css.otherControlsRow}>
        <Button
          onClick={handlePreservesPitchChange}
          aria-checked={preservesPitch}
          role="checkbox"
        >
          Master Tempo
        </Button>
        <Button onClick={handleClickReset}>Reset</Button>
      </div>
    </div>
  );
};

export default PitchAdjust;
