import React, { useEffect, useRef } from 'react';
import useTapper from './useTapper';

export default function CurrentTrackTapBpm({ onSave, onCancel }) {
  const { text, tap, setBpm } = useTapper();

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <>
      <div className="BandcampTempoAdjust__tapBpm_controlRow">
        <input
          type="text"
          value={text || ''}
          className="BandcampTempoAdjust__tapBpm_input"
          onKeyDown={(e) => {
            if (e.key.match(/[\d.]/)) {
              return;
            } else if (e.key === ' ' || e.code === 'Space') {
              tap();
            } else if (e.key === 'Enter') {
              onSave(text);
            } else if (e.key === 'Escape') {
              onCancel();
            } else if (e.key.length !== 1 || e.metaKey) {
              // assume it's a control character or something like Cmd+A
              return;
            }
            e.preventDefault();
          }}
          onChange={(e) => {
            setBpm(e.target.value);
          }}
          ref={inputRef}
          aria-label="BPM"
          aria-describedby="BandcampTempoAdjust_bpm-helper-text"
        />
        <button className="BandcampTempoAdjust__button" onClick={onCancel}>
          (cancel)
        </button>
        <button
          className="BandcampTempoAdjust__button"
          onClick={() => onSave(text)}
        >
          (save)
        </button>
      </div>
      <div id="BandcampTempoAdjust_bpm-helper-text">
        <small>tap spacebar or manually enter bpm</small>
      </div>
    </>
  );
}
