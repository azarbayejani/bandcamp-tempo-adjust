import React from 'react';

import BpmLoadError from './BpmLoadError';
import BpmValue from './BpmValue';
import Button from './Button';
import CurrentTrackTapBpm from './CurrentTrackTapBpm';
import Menu from './Menu';
import PitchFader from './PitchFader';
import PitchPercentage from './PitchPercentage';
import TempoControls from './TempoControls';
import TempoRangeSelector from './TempoRangeSelector';
import useBpmEditing from './useBpmEditing';
import { useTempoRange } from './tempo';

import * as css from './MobileTempoPanel.module.scss';

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
  const { editing, startEditing, cancelEditing, saveBpm } = useBpmEditing({
    playbackRate,
    onSaveBpm: onClickSaveBpm,
  });

  if (editing) {
    return <CurrentTrackTapBpm onSave={saveBpm} onCancel={cancelEditing} />;
  }

  return (
    <div className={css.panel}>
      {error ? (
        <BpmLoadError />
      ) : (
        <div className={css.faderRow}>
          <BpmValue
            variant="inline"
            bpm={bpm}
            loading={loading}
            playbackRate={playbackRate}
          />
          <PitchFader
            playbackRate={playbackRate}
            tempoRange={tempoRange}
            onChangePlaybackRate={onChangePlaybackRate}
          />
          <PitchPercentage playbackRate={playbackRate} />
        </div>
      )}
      {!error && !bpm && (
        <Button onClick={onClickLoadBpms} disabled={loading}>
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
          onReset={() => onChangePlaybackRate({ playbackRate: 1 })}
        />
        {bpm && !error ? (
          <Menu
            label="BPM options"
            items={[
              {
                label: 'Re-analyze',
                onClick: onClickReloadBpm,
                disabled: loading,
              },
              { label: 'Edit BPM', onClick: startEditing },
            ]}
          />
        ) : null}
      </div>
    </div>
  );
};

export default MobileTempoPanel;
