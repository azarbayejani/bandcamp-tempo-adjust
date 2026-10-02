import classnames from 'classnames';

import { formatPitchPercentage } from './tempo';

import * as css from './PitchPercentage.module.scss';

const PitchPercentage = ({
  playbackRate,
  pending = false,
}: {
  playbackRate: number;
  pending?: boolean;
}) => (
  <div className={classnames(css.percentage, { [css.pending]: pending })}>
    <strong>{formatPitchPercentage(playbackRate)}%</strong>
  </div>
);

export default PitchPercentage;
