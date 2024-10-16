import React, { useEffect, useRef } from 'react';

import useTapper from './useTapper';
import Button from './Button';

import * as css from './CurrentTrackTapBpm.module.scss';

export default function CurrentTrackTapBpm({ onSave, onCancel }) {
  const { text, tap, setBpm } = useTapper();

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className={css.container}>
      <div className={css.tapBpmContainer}>
        <div className={css.tapBpmRow}>
          <input
            type="text"
            value={text || ''}
            className={css.input}
            id="bpmInput"
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
          />
          <label htmlFor="bpm-input">BPM</label>
        </div>
        <div className={css.helperText}>
          <small>start tapping any key or type BPM in</small>
        </div>
      </div>
      <div className={css.otherControlsRow}>
        <Button onClick={onCancel}>cancel</Button>
        <Button onClick={() => onSave(text)}>save</Button>
      </div>
    </div>
  );
}
