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
      <div
        style={{
          display: 'flex',
          justifyContent: 'end',
          alignItems: 'end',
          gap: 5,
        }}
      >
        <input
          type="text"
          value={text || ''}
          style={{ maxWidth: 50, height: 8 }}
          onKeyDown={(e) => {
            if (e.key.match(/[\d.]/)) {
              return;
            } else if (e.key === ' ' || e.code === 'Space') {
              tap();
            } else if (e.key === 'Enter') {
              onSave(text);
            } else if (e.key === 'Escape') {
              onCancel();
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
