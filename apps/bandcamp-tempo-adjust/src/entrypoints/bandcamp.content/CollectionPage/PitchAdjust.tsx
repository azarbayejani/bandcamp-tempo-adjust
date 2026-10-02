import React from 'react';
import classnames from 'classnames';
import {
  formatPitchPercentage,
  useRangeCommit,
  useTempoRange,
} from '@tempo-adjust/player-components';
import { useAudioControls } from '../useAudioControls';

const PitchAdjust = () => {
  const { playbackRate, playbackRatePending, changePlaybackRate } =
    useAudioControls();

  const { tempoRange, tempoRangeIndex, setTempoRangeIndex } = useTempoRange();

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    changePlaybackRate({
      playbackRate: event.target.valueAsNumber,
      committed: false,
    });
  };
  const sliderRef = useRangeCommit((playbackRate) =>
    changePlaybackRate({ playbackRate, committed: true })
  );

  const handleClickTempoRange = () => {
    setTempoRangeIndex(tempoRangeIndex + 1);
  };

  return (
    <div className="BandcampTempoAdjust__slider BandcampTempoAdjust__slider--collection">
      <input
        ref={sliderRef}
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
          className={classnames(
            'BandcampTempoAdjust__button BandcampTempoAdjust__button--collection',
            { 'BandcampTempoAdjust__button--pending': playbackRatePending }
          )}
          onClick={() =>
            changePlaybackRate({ playbackRate: 1, committed: true })
          }
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
