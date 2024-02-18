import React, { useEffect, useRef, useState } from 'react';
import { useAudio } from '../AudioContext';
import { toOneDecimal } from '../../../services/toOneDecimal';
import useTapper from './useTapper';

const DetectBpmButton = ({ loadBpms }: { loadBpms: () => void }) => (
  <button className="BandcampTempoAdjust__button" onClick={loadBpms}>
    Detect BPM
  </button>
);

export default function CurrentTrackBpm() {
  const { trackInfoState, playbackRate, loadBpms, setTrackBpm } = useAudio();
  const { bpm, tap } = useTapper();
  const inputRef = useRef<HTMLInputElement>(null);

  const [editing, setEditing] = useState(false);

  const { currTrackUrl, trackInfoStore } = trackInfoState;

  useEffect(() => {
    if (editing) {
      inputRef.current?.focus();
    }
  }, [inputRef, editing]);

  if (!currTrackUrl) {
    return null;
  }

  const trackInfo = trackInfoStore[currTrackUrl];

  if (!trackInfo) {
    return <DetectBpmButton loadBpms={loadBpms} />;
  }

  if (trackInfo.bpm) {
    return (
      <div>
        <div>
          {editing ? (
            <>
              <input
                type="text"
                value={bpm || 'TAP'}
                style={{ maxWidth: 50, marginRight: 5, height: 8 }}
                onChange={(e) => {
                  e.preventDefault();
                  tap();
                }}
                ref={inputRef}
              />
              <button
                className="BandcampTempoAdjust__button"
                onClick={() => {
                  setEditing(false);
                  if (bpm) {
                    setTrackBpm({ bpm, url: currTrackUrl });
                  }
                }}
              >
                (SAVE)
              </button>
            </>
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
