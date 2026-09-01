import React from 'react';

import Button from './Button';
import { tempoRanges, type TempoRange } from './tempo';

import * as css from './TempoRangeSelector.module.scss';

const TempoRangeSelector = ({
  tempoRange,
  onSelect,
}: {
  tempoRange: TempoRange;
  onSelect: (index: number) => void;
}) => (
  <div className={css.row} role="radiogroup">
    {tempoRanges.map((currTempoRange, index) => (
      <Button
        key={currTempoRange.label}
        onClick={() => onSelect(index)}
        role="radio"
        aria-checked={currTempoRange.label === tempoRange.label}
      >
        {currTempoRange.label}
      </Button>
    ))}
  </div>
);

export default TempoRangeSelector;
