import React, { useEffect, useRef, useState } from 'react';
import { useAudio } from '../AudioContext';
import { toOneDecimal } from '../../../services/toOneDecimal';
import useTapper from './useTapper';
import CurrentTrackTapBpm from './CurrentTrackTapBpm';

const DetectBpmButton = ({ loadBpms }: { loadBpms: () => void }) => (
  <button className="BandcampTempoAdjust__button" onClick={loadBpms}>
    Detect BPM
  </button>
);

export default function CurrentTrackBpm() {
  const { trackInfoState, playbackRate, loadBpms, setTrackBpm } = useAudio();

  const [editing, setEditing] = useState(false);

  const { currTrackUrl, trackInfoStore } = trackInfoState;

  if (!currTrackUrl) {
    return null;
  }

  const trackInfo = trackInfoStore[currTrackUrl];

  if (!trackInfo) {
    return <DetectBpmButton loadBpms={loadBpms} />;
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
              {toOneDecimal(trackInfo.bpm * playbackRate)} BPM{' '}
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

  return <DetectBpmButton loadBpms={loadBpms} />;
}
