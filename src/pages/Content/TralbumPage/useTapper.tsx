import { Reducer, useReducer } from 'react';

interface TapperState {
  tapCount: number;
  sum: number;
  bpm?: number;
  text?: string;
  lastTap?: number;
}

const tapperReducer: Reducer<
  TapperState,
  { type: 'TAP' } | { type: 'RESET' } | { type: 'CHANGE'; newText: string }
> = (prev, action) => {
  switch (action.type) {
    case 'TAP':
      const now = Date.now();
      const distance = prev.lastTap && now - prev.lastTap;

      if (distance && distance > 2000) {
        return {
          tapCount: 1,
          sum: 0,
          text: 0,
          lastTap: now,
        };
      }

      const newBpmDatapoint = distance && 60000 / distance;
      const newTotalSum = newBpmDatapoint && prev.sum + newBpmDatapoint;
      const tapCount = prev.tapCount + 1;
      const bpm = newTotalSum
        ? Math.round((newTotalSum / prev.tapCount) * 10) / 10
        : undefined;

      return {
        tapCount: tapCount,
        sum: newTotalSum ?? 0,
        bpm,
        text: bpm?.toString(),
        lastTap: now,
      };
    case 'RESET':
      return {
        tapCount: 0,
        sum: 0,
        text: 0,
      };
    case 'CHANGE':
      const newTextAsNumber = +action.newText;

      if (isNaN(newTextAsNumber)) {
        console.log(
          'Bandcamp Tempo Adjust: Received invalid BPM text input. Ignoring.'
        );
        return prev;
      }

      return {
        tapCount: 0,
        sum: 0,
        bpm: newTextAsNumber,
        text: action.newText,
      };
  }
};

const useTapper = () => {
  const [{ text }, dispatch] = useReducer(tapperReducer, {
    tapCount: 0,
    sum: 0,
  } as TapperState);

  const tap = () => dispatch({ type: 'TAP' });
  const reset = () => dispatch({ type: 'RESET' });
  const setBpm = (newText: string) =>
    dispatch({ type: 'CHANGE', newText: newText });

  return { tap, reset, setBpm, text };
};

export default useTapper;
