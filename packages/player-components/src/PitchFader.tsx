import React from 'react';

import classnames from 'classnames';

import { useIsMobile } from '@tempo-adjust/theme-provider';

import { formatPitchPercentage, type TempoRange } from './tempo';

import * as css from './PitchFader.module.scss';

const PitchFader = ({
  playbackRate,
  tempoRange,
  onChangePlaybackRate,
}: {
  playbackRate: number;
  tempoRange: TempoRange;
  onChangePlaybackRate: ({ playbackRate }: { playbackRate: number }) => void;
}) => {
  const isMobile = useIsMobile();
  return (
    <input
      type="range"
      onChange={(event) =>
        onChangePlaybackRate({ playbackRate: event.target.valueAsNumber })
      }
      min={tempoRange.min}
      max={tempoRange.max}
      step={0.001}
      value={playbackRate}
      className={classnames(css.slider, { [css.sliderTouch]: isMobile })}
      aria-label="Pitch adjust"
      aria-valuetext={`${formatPitchPercentage(playbackRate)}%`}
    />
  );
};

export default PitchFader;
