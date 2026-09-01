import React from 'react';

import Button from './Button';

// The Master Tempo toggle and Reset button, shared by the desktop and
// mobile layouts. Rendered as a fragment so each layout supplies its
// own row container.
const TempoControls = ({
  preservesPitch,
  onChangePreservesPitch,
  onReset,
}: {
  preservesPitch: boolean;
  onChangePreservesPitch: () => void;
  onReset: () => void;
}) => (
  <>
    <Button
      onClick={onChangePreservesPitch}
      aria-checked={preservesPitch}
      role="checkbox"
    >
      Master Tempo
    </Button>
    <Button onClick={onReset}>Reset</Button>
  </>
);

export default TempoControls;
