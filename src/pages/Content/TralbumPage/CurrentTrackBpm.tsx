import React, { useState } from 'react';
import { useAudio } from '../AudioContext';
import { toOneDecimal } from '../../../services/toOneDecimal';
import CurrentTrackTapBpm from './CurrentTrackTapBpm';
import browser from 'webextension-polyfill';
import { hasAllPermissions } from '../../../services/hasAllPermissions';

const DetectBpmButton = ({ onClick }: { onClick: () => void }) => (
  <button className="BandcampTempoAdjust__button" onClick={onClick}>
    Detect BPM
  </button>
);

const openOptions = () => {
  browser.runtime.sendMessage({ action: 'openOptions' });
};

export default function CurrentTrackBpm() {
  const {
    trackInfoState,
    playbackRate,
    loadBpms,
    reloadCurrentBpm,
    setTrackBpm,
  } = useAudio();

  const [editing, setEditing] = useState(false);

  const { currTrackUrl, trackInfoStore } = trackInfoState;

  if (!currTrackUrl) {
    return null;
  }

  const trackInfo = trackInfoStore[currTrackUrl];

  const handleLoadBpms = async () => {
    console.log('hasAllPermissions', await hasAllPermissions());
    const needsPermissions = !(await hasAllPermissions());

    if (needsPermissions) {
      openOptions();
    } else {
      loadBpms();
    }
  };

  if (!trackInfo) {
    return <DetectBpmButton onClick={handleLoadBpms} />;
  }

  const handleSaveBpm = (bpm?: number) => {
    setEditing(false);
    if (bpm) {
      setTrackBpm({ bpm, url: currTrackUrl });
    }
  };

  const handleCancelEditing = () => {
    setEditing(false);
  };

  if (trackInfo.bpm) {
    return (
      <div>
        <div>
          {editing ? (
            <CurrentTrackTapBpm
              onSave={handleSaveBpm}
              onCancel={handleCancelEditing}
            />
          ) : (
            <>
              {trackInfo.loading
                ? 'loading BPM... '
                : `${toOneDecimal(trackInfo.bpm * playbackRate)} BPM `}
              <button
                className="BandcampTempoAdjust__button"
                onClick={reloadCurrentBpm}
                title="Re-analyze"
              >
                (↻)
              </button>{' '}
              <button
                className="BandcampTempoAdjust__button"
                onClick={() => {
                  setEditing(true);
                }}
              >
                (edit)
              </button>
            </>
          )}
        </div>
      </div>
    );
  }

  if (trackInfo.loading) {
    return <>(loading BPM...)</>;
  }

  if (trackInfo.error) {
    return <div style={{ color: '#ff0f0f' }}>(Error loading BPM)</div>;
  }

  return <DetectBpmButton onClick={handleLoadBpms} />;
}
