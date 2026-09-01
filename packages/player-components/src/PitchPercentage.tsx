import React from 'react';

import { formatPitchPercentage } from './tempo';

import * as css from './PitchPercentage.module.scss';

const PitchPercentage = ({ playbackRate }: { playbackRate: number }) => (
  <div className={css.percentage}>
    <strong>{formatPitchPercentage(playbackRate)}%</strong>
  </div>
);

export default PitchPercentage;
