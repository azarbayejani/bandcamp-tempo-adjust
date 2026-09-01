import React, { useState } from 'react';

import { toOneDecimal } from '@tempo-adjust/to-one-decimal';

import classnames from 'classnames';

import Button from './Button';
import CurrentTrackTapBpm from './CurrentTrackTapBpm';
import Menu from './Menu';
import Spinner from './spinner';
import {
  formatPitchPercentage,
  tempoRanges,
  useTempoRange,
} from './PitchAdjust';

import * as css from './MobileTempoPanel.module.scss';
import * as pitchCss from './PitchAdjust.module.scss';

// Single-column layout for the mobile tralbum page:
//   <bpm> <fader> <percentage>
//   <detect bpm, until a bpm exists>
//   <tempo range selectors>
//   <master tempo> <reset> <menu: re-analyze / edit>
const MobileTempoPanel: React.FC<{
  bpm?: number;
  loading: boolean;
  error: boolean;
  playbackRate: number;
  preservesPitch: boolean;
  onClickLoadBpms: () => void;
  onClickReloadBpm: () => void;
  onClickSaveBpm: (bpm: number) => void;
  onChangePlaybackRate: ({ playbackRate }: { playbackRate: number }) => void;
  onChangePreservesPitch: () => void;
}> = ({
  bpm,
  loading,
  error,
  playbackRate,
  preservesPitch,
  onClickLoadBpms,
  onClickReloadBpm,
  onClickSaveBpm,
  onChangePlaybackRate,
  onChangePreservesPitch,
}) => {
  const { tempoRange, setTempoRangeIndex } = useTempoRange();
  const [editing, setEditing] = useState(false);

  const percentageAsString = formatPitchPercentage(playbackRate);

  const handleSaveBpm = (bpmText?: string) => {
    setEditing(false);
    const bpmNumber = Number(bpmText);
    if (bpmNumber && !Number.isNaN(bpmNumber)) {
      onClickSaveBpm(bpmNumber / playbackRate);
    }
  };

  if (editing) {
    return (
      <CurrentTrackTapBpm
        onSave={handleSaveBpm}
        onCancel={() => setEditing(false)}
      />
    );
  }

  const bpmOrDefault = loading ? (
    <Spinner width={16} height={16} aria-label="Detecting BPM" />
  ) : (
    (bpm && toOneDecimal(bpm * playbackRate)) || '--'
  );

  return (
    <div className={css.panel}>
      {error ? (
        <div className={css.error} role="alert">
          <span>Error loading BPM. Please try reloading the page.</span>
        </div>
      ) : (
        <div className={css.faderRow}>
          <div className={css.bpmLockup} data-testid="bpm-display">
            <span className={css.bpmValue}>{bpmOrDefault}</span>
            <span className={css.bpmLabel}>BPM</span>
          </div>
          <input
            type="range"
            onChange={(event) =>
              onChangePlaybackRate({ playbackRate: event.target.valueAsNumber })
            }
            min={tempoRange.min}
            max={tempoRange.max}
            step={0.001}
            value={playbackRate}
            className={classnames(pitchCss.slider, pitchCss.sliderTouch)}
            aria-label="Pitch adjust"
            aria-valuetext={`${percentageAsString}%`}
          />
          <div className={pitchCss.percentage}>
            <strong>{percentageAsString}%</strong>
          </div>
        </div>
      )}
      {!error && !bpm && (
        <Button onClick={onClickLoadBpms} disabled={loading}>
          Detect BPM
        </Button>
      )}
      <div className={css.rangeRow} role="radiogroup">
        {tempoRanges.map((currTempoRange, index) => (
          <Button
            key={currTempoRange.label}
            onClick={() => setTempoRangeIndex(index)}
            role="radio"
            aria-checked={currTempoRange.label === tempoRange.label}
          >
            {currTempoRange.label}
          </Button>
        ))}
      </div>
      <div className={css.buttonRow}>
        <Button
          onClick={onChangePreservesPitch}
          aria-checked={preservesPitch}
          role="checkbox"
        >
          Master Tempo
        </Button>
        <Button onClick={() => onChangePlaybackRate({ playbackRate: 1 })}>
          Reset
        </Button>
        {bpm && !error ? (
          <Menu
            label="BPM options"
            items={[
              {
                label: 'Re-analyze',
                onClick: onClickReloadBpm,
                disabled: loading,
              },
              { label: 'Edit BPM', onClick: () => setEditing(true) },
            ]}
          />
        ) : null}
      </div>
    </div>
  );
};

export default MobileTempoPanel;
