import { type Reducer, useReducer } from 'react';

// Where the current bpm came from, so the mobile tap screen can report
// it: 'taps' is a running average, 'adjusted' means a stepper changed it.
export type TapperSource = 'none' | 'taps' | 'adjusted';

interface TapperState {
  tapCount: number;
  sum: number;
  bpm?: number;
  text: string;
  lastTap?: number;
  source: TapperSource;
}

export type TapperAdjustment = { multiply?: number; add?: number };

const defaultTapperState: TapperState = {
  tapCount: 0,
  sum: 0,
  text: '',
  source: 'none',
};

const roundToTenth = (n: number) => Math.round(n * 10) / 10;

const tapperReducer: Reducer<
  TapperState,
  | { type: 'TAP' }
  | { type: 'RESET' }
  | { type: 'CHANGE'; newText: string }
  | ({ type: 'ADJUST' } & TapperAdjustment)
> = (prev, action) => {
  switch (action.type) {
    case 'TAP': {
      const now = Date.now();
      const distance =
        prev.lastTap === undefined ? undefined : now - prev.lastTap;

      // The first tap of a run, or a pause long enough to count as a new
      // one: start over and wait for the next tap before showing a bpm.
      if (distance === undefined || distance > 2000) {
        return {
          ...defaultTapperState,
          tapCount: 1,
          lastTap: now,
        };
      }

      // Two events in the same millisecond can't be two beats; treat the
      // second as a duplicate rather than dividing by zero.
      if (distance === 0) {
        return prev;
      }

      const sum = prev.sum + 60000 / distance;
      const bpm = roundToTenth(sum / prev.tapCount);

      return {
        tapCount: prev.tapCount + 1,
        sum,
        bpm,
        text: bpm.toString(),
        lastTap: now,
        source: 'taps',
      };
    }
    case 'RESET':
      return defaultTapperState;
    case 'CHANGE': {
      const newTextAsNumber = +action.newText;

      if (isNaN(newTextAsNumber)) {
        console.log(
          'Bandcamp Tempo Adjust: Received invalid BPM text input. Ignoring.'
        );
        return prev;
      }

      return {
        ...defaultTapperState,
        bpm: newTextAsNumber,
        text: action.newText,
      };
    }
    case 'ADJUST': {
      if (!prev.bpm) {
        return prev;
      }

      const bpm = roundToTenth(
        prev.bpm * (action.multiply ?? 1) + (action.add ?? 0)
      );

      // Clearing lastTap means the next tap starts a fresh run instead of
      // averaging a new gap into a value the user has since changed.
      return {
        ...prev,
        bpm,
        text: bpm.toString(),
        lastTap: undefined,
        source: 'adjusted',
      };
    }
  }
};

const useTapper = () => {
  const [{ text, bpm, tapCount, source }, dispatch] = useReducer(
    tapperReducer,
    defaultTapperState
  );

  const tap = () => dispatch({ type: 'TAP' });
  const reset = () => dispatch({ type: 'RESET' });
  const setBpm = (newText: string) =>
    dispatch({ type: 'CHANGE', newText: newText });
  const adjust = (adjustment: TapperAdjustment) =>
    dispatch({ type: 'ADJUST', ...adjustment });

  return { tap, reset, setBpm, adjust, text, bpm, tapCount, source };
};

export default useTapper;
