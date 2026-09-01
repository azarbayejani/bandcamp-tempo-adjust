import React from 'react';

import BpmLoadError from './BpmLoadError';
import BpmValue from './BpmValue';
import Button from './Button';
import CurrentTrackTapBpm from './CurrentTrackTapBpm';
import useBpmEditing from './useBpmEditing';

import * as css from './BpmDetection.module.scss';

// Some alternate ideas for what this could be named:
// BpmDisplay
const BpmDetection: React.FC<{
  bpm?: number;
  loading: boolean;
  error: boolean;
  playbackRate: number;
  onClickLoadBpms: () => void;
  onClickReloadBpm: () => void;
  onClickSaveBpm: (bpm: number) => void;
}> = ({
  bpm,
  loading,
  error,
  playbackRate,
  onClickLoadBpms,
  onClickSaveBpm,
  onClickReloadBpm,
}) => {
  const { editing, startEditing, cancelEditing, saveBpm } = useBpmEditing({
    playbackRate,
    onSaveBpm: onClickSaveBpm,
  });

  if (error) {
    return (
      <div className={css.container}>
        <BpmLoadError />
      </div>
    );
  }

  if (editing) {
    return <CurrentTrackTapBpm onSave={saveBpm} onCancel={cancelEditing} />;
  }

  return (
    <div className={css.container}>
      <div className={css.bpmDisplayContainer}>
        <BpmValue bpm={bpm} loading={loading} playbackRate={playbackRate} />
      </div>
      <div className={css.otherControlsRow}>
        {bpm ? (
          <>
            <Button onClick={onClickReloadBpm} disabled={loading}>
              Re-analyze
            </Button>
            <Button onClick={startEditing}>Edit</Button>
          </>
        ) : (
          <Button onClick={onClickLoadBpms} disabled={loading}>
            Detect BPM
          </Button>
        )}
      </div>
    </div>
  );
};

export default BpmDetection;
