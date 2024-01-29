import { useState } from 'react';

const useTapper = () => {
  const [bpm, setBpm] = useState(0);
  const cue = useState<number[]>([])[0];

  const tap = () => {
    const now = Date.now();
    cue.push(now);
    cue.length > 1 && setBpm(calculateBpm());
    cue.length > 1 && now - cue[0] > 2000 && reset();
  };

  const reset = () => (cue.length = 0);

  const calculateBpm = () => {
    const duration = cue[cue.length - 1] - cue[0];
    return Math.round(((60000 * (cue.length - 1)) / duration) * 10) / 10;
  };

  return { bpm, tap, reset };
};

export default useTapper;