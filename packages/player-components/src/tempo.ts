import React from 'react';

export type TempoRange = {
  label: string;
  min: number;
  max: number;
};

export const tempoRanges: TempoRange[] = [
  {
    label: '±6',
    min: 1 - 0.06,
    max: 1 + 0.06,
  },
  {
    label: '±10',
    min: 1 - 0.1,
    max: 1 + 0.1,
  },
  {
    label: '±16',
    min: 1 - 0.16,
    max: 1 + 0.16,
  },
  {
    label: 'WIDE',
    // TODO: make this based on the browser
    min: 0.1,
    max: 2.0,
  },
];

export const useTempoRange = () => {
  const [tempoRangeIndex, setTempoRangeIndex] = React.useState(1);
  return {
    tempoRange: tempoRanges[tempoRangeIndex % tempoRanges.length]!,
    tempoRangeIndex,
    setTempoRangeIndex,
  };
};

export const formatPitchPercentage = (playbackRate: number) => {
  const percentage = String(((playbackRate - 1) * 100).toPrecision(3));
  return playbackRate < 1
    ? String(percentage).slice(0, 4)
    : `+${String(percentage).slice(0, 3)}`;
};
