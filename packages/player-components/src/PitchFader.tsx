import classnames from 'classnames';

import { useIsMobile } from '@tempo-adjust/theme-provider';

import {
  formatPitchPercentage,
  type PlaybackRateChange,
  type TempoRange,
} from './tempo';
import useRangeCommit from './useRangeCommit';

import * as css from './PitchFader.module.scss';

const PitchFader = ({
  playbackRate,
  tempoRange,
  onChangePlaybackRate,
}: {
  playbackRate: number;
  tempoRange: TempoRange;
  onChangePlaybackRate: (change: PlaybackRateChange) => void;
}) => {
  const isMobile = useIsMobile();
  const ref = useRangeCommit((playbackRate) =>
    onChangePlaybackRate({ playbackRate, committed: true })
  );
  return (
    <input
      ref={ref}
      type="range"
      onChange={(event) =>
        onChangePlaybackRate({
          playbackRate: event.target.valueAsNumber,
          committed: false,
        })
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
