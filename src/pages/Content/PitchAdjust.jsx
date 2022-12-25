import React from 'react';
import { useCallback } from 'react';
import { useAudio } from './AudioContext';

const tempoRanges = [
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
  return [
    tempoRanges[tempoRangeIndex % tempoRanges.length],
    useCallback(
      () => setTempoRangeIndex(tempoRangeIndex + 1),
      [tempoRangeIndex]
    ),
  ];
};

const PitchAdjust = () => {
  const { playbackRate, setPlaybackRate } = useAudio();
  const [tempoRange, nextTempoRange] = useTempoRange();

  const percentage = String(((playbackRate - 1) * 100).toPrecision(3));
  const percentageAsString =
    percentage < 0
      ? String(percentage).slice(0, 4)
      : `+${String(percentage).slice(0, 3)}`;

  const handleSliderChange = (event) => {
    setPlaybackRate(event.target.value);
  };

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 2,
        justifyContent: 'flex-end',
      }}
    >
      <input
        className="BandcampPitchSlider_range"
        type="range"
        onChange={handleSliderChange}
        onInput={handleSliderChange}
        min={tempoRange.min}
        max={tempoRange.max}
        step={0.001}
        value={playbackRate}
        style={{ width: 88 }}
      />
      <button
        title="Reset"
        className="BandcampPitchSlider_button"
        onClick={() => setPlaybackRate(1)}
      >
        {percentageAsString}%
      </button>
      <button
        title="Range adjust"
        className="BandcampPitchSlider_button"
        onClick={nextTempoRange}
      >
        ({tempoRange.label})
      </button>
    </div>
  );
};

export default PitchAdjust;
