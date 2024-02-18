import { Reducer, useReducer } from 'react';

interface TapperState {
  tapCount: number;
  sum: number;
  bpm?: number;
  lastTap?: number;
}

const tapperReducer: Reducer<TapperState, 'TAP' | 'RESET'> = (prev, action) => {
  switch (action) {
    case 'TAP':
      const now = Date.now();
      const distance = prev.lastTap && now - prev.lastTap;

      if (distance && distance > 2000) {
        return {
          tapCount: 1,
          sum: 0,
          lastTap: now,
        };
      }

      const newBpmDatapoint = distance && 60000 / distance;
      const newTotalSum = newBpmDatapoint && prev.sum + newBpmDatapoint;
      const tapCount = prev.tapCount + 1;

      return {
        tapCount: tapCount,
        sum: newTotalSum ?? 0,
        bpm: newTotalSum
          ? Math.round((newTotalSum / prev.tapCount) * 10) / 10
          : undefined,
        lastTap: now,
      };
    case 'RESET':
      return {
        tapCount: 0,
        sum: 0,
      };
  }
};

const useTapper = () => {
  const [{ bpm }, dispatch] = useReducer(tapperReducer, {
    tapCount: 0,
    sum: 0,
  } as TapperState);

  const tap = () => dispatch('TAP');
  const reset = () => dispatch('RESET');

  return { bpm, tap, reset };
};

export default useTapper;
