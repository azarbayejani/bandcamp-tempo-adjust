import React, { useEffect } from 'react';
import useTapper from './useTapper';
export default function CurrentTrackTapBpm() {
  const { bpm, tap, reset } = useTapper();

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'b' || event.key === 'B') {
        tap();
      } else if (event.key === 'r' || event.key === 'R') {
        reset();
      }
    };

    window.addEventListener('keypress', handleKeyPress);
    return () => {
      window.removeEventListener('keypress', handleKeyPress);
    };
  }, [tap, reset]);

  return (
    <div>
      <button
        className="BandcampTempoAdjust__button"
        onClick={tap}
        onContextMenu={(e) => {
          e.preventDefault();
          reset();
        }}
      >
        {bpm ? `${bpm} BPM` : 'tap'}
      </button>
    </div>
  );
}
