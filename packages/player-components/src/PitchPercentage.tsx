import classnames from 'classnames';

import { formatPitchPercentage } from './tempo';

import * as css from './PitchPercentage.module.scss';

// The percentage readout beside the fader. `inline` is the mobile fader
// row, where it sits on the same 40px line as the BPM lockup.
const PitchPercentage = ({
  playbackRate,
  pending = false,
  variant = 'display',
}: {
  playbackRate: number;
  pending?: boolean;
  variant?: 'display' | 'inline';
}) => {
  const text = `${formatPitchPercentage(playbackRate)}%`;
  return (
    <div
      className={classnames(css.percentage, css[variant], {
        [css.pending]: pending,
      })}
    >
      {variant === 'inline' ? text : <strong>{text}</strong>}
    </div>
  );
};

export default PitchPercentage;
