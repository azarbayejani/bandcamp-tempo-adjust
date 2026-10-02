import React from 'react';

// React's onChange fires on every `input` event, so it can't tell a drag
// in progress from a release. The native `change` event only fires once
// the user commits a value: on letting go of the thumb, or per keyboard
// step. Attach the returned ref to an <input type="range">.
const useRangeCommit = (onCommit: (value: number) => void) => {
  const ref = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    const input = ref.current;
    if (!input) return;

    const handleChange = () => onCommit(input.valueAsNumber);
    input.addEventListener('change', handleChange);
    return () => input.removeEventListener('change', handleChange);
  }, [onCommit]);

  return ref;
};

export default useRangeCommit;
