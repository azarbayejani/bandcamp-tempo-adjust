import React, { useState } from 'react';

import { toOneDecimal } from '@tempo-adjust/to-one-decimal';

import * as css from './BpmDetection.module.scss';

import CurrentTrackTapBpm from './CurrentTrackTapBpm';
import Button from './Button';
import Spinner from './spinner';

const Container = ({ children }: { children: React.ReactNode }) => (
  <div className={css.container}>{children}</div>
);

const DetectBpmButton = ({
  onClick,
  disabled,
}: {
  onClick: () => void;
  disabled?: boolean;
}) => (
  <Button onClick={onClick} disabled={disabled}>
    Detect BPM
  </Button>
);

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
  const [editing, setEditing] = useState(false);

  const handleSaveBpm = (bpm?: string) => {
    setEditing(false);
    const bpmNumber = Number(bpm);
    if (bpmNumber && !Number.isNaN(bpmNumber)) {
      onClickSaveBpm(bpmNumber / playbackRate);
    }
  };

  const handleCancelEditing = () => {
    setEditing(false);
  };

  if (error) {
    return (
      <Container>
        <div className={css.error}>
          <span>Error loading BPM. Please try reloading the page.</span>
        </div>
      </Container>
    );
  }

  const bpmOrDefault = loading ? (
    <Spinner />
  ) : (
    (bpm && toOneDecimal(bpm * playbackRate)) || '--'
  );

  if (editing) {
    return (
      <CurrentTrackTapBpm
        onSave={handleSaveBpm}
        onCancel={handleCancelEditing}
      />
    );
  }

  return (
    <Container>
      <div className={css.bpmDisplayContainer}>
        <div className={css.bpmDisplay}>
          <div className={css.bpmDisplayValue}>{bpmOrDefault}</div>
          <div className={css.bpmLabel}>
            <div>BPM</div>
          </div>
        </div>
      </div>
      <div className={css.otherControlsRow}>
        {bpm ? (
          <>
            <Button onClick={onClickReloadBpm} disabled={loading}>
              Re-analyze
            </Button>
            <Button onClick={() => setEditing(true)}>Edit</Button>
          </>
        ) : (
          <>
            <DetectBpmButton onClick={onClickLoadBpms} disabled={loading} />
          </>
        )}
      </div>
    </Container>
  );
};

export default BpmDetection;
