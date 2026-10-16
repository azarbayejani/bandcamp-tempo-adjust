import React, { useState } from 'react';

import BpmLoadError from './BpmLoadError';
import BpmValue from './BpmValue';
import Button from './Button';
import Menu from './Menu';
import MobileTapBpm from './MobileTapBpm';
import PitchFader from './PitchFader';
import PitchPercentage from './PitchPercentage';
import TempoControls from './TempoControls';
import TempoRangeSelector from './TempoRangeSelector';
import useBpmEditing from './useBpmEditing';
import { useTempoRange, type PlaybackRateChange } from './tempo';

import * as css from './MobileTempoPanel.module.scss';

// Single-column layout for the mobile tralbum page:
//   <bpm error, if detection failed>
//   <bpm> <fader> <percentage>
//   <detect bpm, until a bpm exists>
//   <tempo range selectors>
//   <master tempo> <reset> <menu: re-analyze / tap bpm, once a bpm exists or failed>
//
// While tapping a BPM, the fader row stays put (its lockup shows the
// candidate) and everything beneath it becomes the tap screen.
const MobileTempoPanel: React.FC<{
  bpm?: number;
  loading: boolean;
  error: boolean;
  playbackRate: number;
  playbackRatePending?: boolean;
  preservesPitch: boolean;
  onClickDetectBpm: () => void;
  onClickReloadBpm: () => void;
  onClickSaveBpm: (bpm: number) => void;
  onChangePlaybackRate: (change: PlaybackRateChange) => void;
  onChangePreservesPitch: () => void;
}> = ({
  bpm,
  loading,
  error,
  playbackRate,
  playbackRatePending,
  preservesPitch,
  onClickDetectBpm,
  onClickReloadBpm,
  onClickSaveBpm,
  onChangePlaybackRate,
  onChangePreservesPitch,
}) => {
  const { tempoRange, setTempoRangeIndex } = useTempoRange();
  const { editing, startEditing, cancelEditing, saveBpm } = useBpmEditing({
    playbackRate,
    onSaveBpm: onClickSaveBpm,
  });
  const [candidateBpm, setCandidateBpm] = useState<number>();

  const startTapping = () => {
    setCandidateBpm(undefined);
    startEditing();
  };

  return (
    <div className={css.panel}>
      {/* A failed detection only affects the BPM readout; the fader must
          stay usable, and the menu below offers a way to retry. */}
      {error && !editing && <BpmLoadError />}
      <div className={css.faderRow}>
        {(!error || editing) &&
          (editing ? (
            // The candidate is the tempo heard at the current rate, so it
            // is shown as-is; saveBpm divides it back to the track's
            // natural BPM.
            <BpmValue
              variant="inline"
              bpm={candidateBpm}
              loading={false}
              playbackRate={1}
            />
          ) : (
            <BpmValue
              variant="inline"
              bpm={bpm}
              loading={loading}
              playbackRate={playbackRate}
              pending={playbackRatePending}
            />
          ))}
        <PitchFader
          playbackRate={playbackRate}
          tempoRange={tempoRange}
          onChangePlaybackRate={onChangePlaybackRate}
        />
        <PitchPercentage
          variant="inline"
          playbackRate={playbackRate}
          pending={playbackRatePending}
        />
      </div>
      {editing ? (
        <MobileTapBpm
          onSave={saveBpm}
          onCancel={cancelEditing}
          onChange={setCandidateBpm}
        />
      ) : (
        <>
          {!error && !bpm && (
            <Button onClick={onClickDetectBpm} disabled={loading}>
              Detect BPM
            </Button>
          )}
          <TempoRangeSelector
            tempoRange={tempoRange}
            onSelect={setTempoRangeIndex}
          />
          <div className={css.buttonRow}>
            <TempoControls
              preservesPitch={preservesPitch}
              onChangePreservesPitch={onChangePreservesPitch}
              onReset={() =>
                onChangePlaybackRate({ playbackRate: 1, committed: true })
              }
            />
            {bpm || error ? (
              <Menu
                label="BPM options"
                items={[
                  {
                    label: 'Re-analyze',
                    onClick: onClickReloadBpm,
                    disabled: loading,
                  },
                  { label: 'Tap BPM', onClick: startTapping },
                ]}
              />
            ) : null}
          </div>
        </>
      )}
    </div>
  );
};

export default MobileTempoPanel;
