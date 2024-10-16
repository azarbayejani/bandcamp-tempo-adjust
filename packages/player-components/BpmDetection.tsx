import React, { useState } from 'react';

import { toOneDecimal } from '@tempo-adjust/to-one-decimal';

import * as css from './BpmDetection.module.scss';

import CurrentTrackTapBpm from './CurrentTrackTapBpm';
import Button from './Button';

const Container = ({ children }: { children: React.ReactNode }) => (
  <div className={css.container}>{children}</div>
);

const DetectBpmButton = ({ onClick }: { onClick: () => void }) => (
  <Button onClick={onClick}>Detect BPM</Button>
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

  const handleSaveBpm = (bpm?: number) => {
    setEditing(false);
    if (bpm) {
      onClickSaveBpm(bpm);
    }
  };

  const handleCancelEditing = () => {
    setEditing(false);
  };

  if (loading) {
    return (
      <Container>
        <div className={css.loading}>loading...</div>
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <div className={css.error}>
          <span>Error loading BPM. Please try reloading the page.</span>
        </div>
      </Container>
    );
  }

  if (bpm) {
    if (editing) {
      return (
        <CurrentTrackTapBpm
          onSave={handleSaveBpm}
          onCancel={handleCancelEditing}
        />
      );
    } else {
      return (
        <Container>
          <div className={css.bpmDisplayContainer}>
            <div className={css.bpmDisplay}>
              {loading ? (
                'loading...'
              ) : (
                <>
                  <div>{toOneDecimal(bpm * playbackRate)}</div>
                  <div className={css.bpmLabel}>
                    <div>BPM</div>
                  </div>
                </>
              )}
            </div>
          </div>
          <div className={css.otherControlsRow}>
            <Button onClick={onClickReloadBpm}>Re-analyze</Button>
            <Button onClick={() => setEditing(true)}>Edit</Button>
          </div>
        </Container>
      );
    }
  }

  return (
    <div
      style={{
        width: 110,
        display: 'flex',
        placeContent: 'center',
        marginTop: 31,
      }}
    >
      <div>
        <DetectBpmButton onClick={onClickLoadBpms} />
      </div>
    </div>
  );
};

export default BpmDetection;
