import React from 'react';
import { useCallback } from 'react';
import useAudioElement from './useAudioElement';

const tempoRanges = [
  {
    label: '±6',
    min: 940,
    max: 1060,
  },
  {
    label: '±10',
    min: 900,
    max: 1100,
  },
  {
    label: '±16',
    min: 840,
    max: 1160,
  },
  {
    label: 'WIDE',
    min: 100,
    max: 2000,
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
  const [sliderValue, setSliderValue] = React.useState(1000);
  useAudioElement('audio', { playbackRate: 1 + (sliderValue - 1000) / 1000 });
  const [tempoRange, nextTempoRange] = useTempoRange();

  const percentage = (((sliderValue - 1000) / 1000) * 100).toPrecision(3);

  const handleSliderChange = (event) => {
    const value = event.target.value;
    setSliderValue(value);
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
        value={sliderValue}
        style={{ width: 88 }}
      />
      <button
        title="Reset"
        className="BandcampPitchSlider_button"
        onClick={() => setSliderValue(1000)}
      >
        {percentage >= 0 ? '+' : ''}
        {percentage}%
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
