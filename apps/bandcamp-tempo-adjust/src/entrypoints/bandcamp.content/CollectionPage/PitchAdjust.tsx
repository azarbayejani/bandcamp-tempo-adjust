import React from 'react';
import {
  formatPitchPercentage,
  useTempoRange,
} from '@tempo-adjust/player-components';
import useAudio from '../AudioStore';

const PitchAdjust = () => {
  const playbackRate = useAudio(({ playbackRate }) => playbackRate);
  const setPlaybackRate = useAudio(({ setPlaybackRate }) => setPlaybackRate);

  const { tempoRange, tempoRangeIndex, setTempoRangeIndex } = useTempoRange();

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPlaybackRate(event.target.valueAsNumber);
  };

  const handleClickTempoRange = () => {
    setTempoRangeIndex(tempoRangeIndex + 1);
  };

  return (
    <div className="BandcampTempoAdjust__slider BandcampTempoAdjust__slider--collection">
      <input
        className="BandcampTempoAdjust__slider_range BandcampTempoAdjust__slider_range--collection"
        type="range"
        onChange={handleSliderChange}
        min={tempoRange.min}
        max={tempoRange.max}
        step={0.001}
        value={playbackRate}
      />
      <div style={{ display: 'flex' }}>
        <button
          title="Reset"
          className="BandcampTempoAdjust__button BandcampTempoAdjust__button--collection"
          onClick={() => setPlaybackRate(1)}
        >
          {formatPitchPercentage(playbackRate)}%
        </button>
        <button
          title="Range adjust"
          className="BandcampTempoAdjust__button BandcampTempoAdjust_button--collection"
          onClick={handleClickTempoRange}
        >
          ({tempoRange.label})
        </button>
      </div>
    </div>
  );
};

export default PitchAdjust;
