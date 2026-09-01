import React from 'react';

import classnames from 'classnames';

import { toOneDecimal } from '@tempo-adjust/to-one-decimal';

import Spinner from './spinner';

import * as css from './BpmValue.module.scss';

// The BPM value/unit lockup shared by the desktop display and the
// mobile fader row. Shows the rate-adjusted BPM, a spinner while
// detecting, or -- before detection.
const BpmValue = ({
  bpm,
  loading,
  playbackRate,
  variant = 'display',
}: {
  bpm?: number;
  loading: boolean;
  playbackRate: number;
  variant?: 'display' | 'inline';
}) => {
  const spinnerSize = variant === 'inline' ? 16 : 24;
  const value = loading ? (
    <Spinner
      width={spinnerSize}
      height={spinnerSize}
      aria-label="Detecting BPM"
    />
  ) : (
    (bpm && toOneDecimal(bpm * playbackRate)) || '--'
  );

  return (
    <div
      className={classnames(css.lockup, css[variant])}
      data-testid="bpm-display"
    >
      <span className={css.value}>{value}</span> <span>BPM</span>
    </div>
  );
};

export default BpmValue;
