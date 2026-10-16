import { useEffect, useRef, useState } from 'react';

import classnames from 'classnames';

import { useTheme } from '@tempo-adjust/theme-provider';

import Button from './Button';
import useTapper from './useTapper';

import * as css from './MobileTapBpm.module.scss';

// How long the TAP button stays inverted after a press.
const FLASH_MS = 90;

// The keyboard-free BPM editor for the mobile panel: a big TAP button
// plus halve/nudge/double steppers, in place of the desktop text input
// that would pull the phone keyboard up. The panel keeps the fader row
// above this and shows the candidate in its lockup via `onChange`.
export default function MobileTapBpm({
  onSave,
  onCancel,
  onChange,
}: {
  onSave: (bpm?: string) => void;
  onCancel: () => void;
  onChange: (bpm?: number) => void;
}) {
  const { text, bpm, tapCount, source, tap, adjust } = useTapper();
  const theme = useTheme();
  const [flash, setFlash] = useState(false);
  const flashTimeout = useRef<ReturnType<typeof setTimeout> | undefined>(
    undefined
  );

  useEffect(() => {
    onChange(bpm);
  }, [bpm, onChange]);

  useEffect(() => () => clearTimeout(flashTimeout.current), []);

  const hasBpm = !!bpm;

  const sourceLabel =
    source === 'taps'
      ? `from ${tapCount} taps`
      : source === 'adjusted'
      ? `from ${tapCount} taps, adjusted`
      : tapCount === 1
      ? 'keep tapping…'
      : 'tap along with the beat';

  const handleTap = () => {
    tap();
    setFlash(true);
    clearTimeout(flashTimeout.current);
    flashTimeout.current = setTimeout(() => setFlash(false), FLASH_MS);
  };

  return (
    <div className={css.container}>
      <Button
        className={classnames(css.tap, {
          [css.flash]: flash,
          [css.dark]: theme === 'dark',
        })}
        onClick={handleTap}
      >
        <span className={css.tapLabel}>TAP</span>
        <span className={css.sourceLabel}>{sourceLabel}</span>
      </Button>
      <div className={css.row}>
        <Button
          className={css.step}
          disabled={!hasBpm}
          aria-label="Halve BPM"
          onClick={() => adjust({ multiply: 0.5 })}
        >
          ÷2
        </Button>
        <Button
          className={css.step}
          disabled={!hasBpm}
          aria-label="Decrease BPM by 0.1"
          onClick={() => adjust({ add: -0.1 })}
        >
          −0.1
        </Button>
        <Button
          className={css.step}
          disabled={!hasBpm}
          aria-label="Increase BPM by 0.1"
          onClick={() => adjust({ add: 0.1 })}
        >
          +0.1
        </Button>
        <Button
          className={css.step}
          disabled={!hasBpm}
          aria-label="Double BPM"
          onClick={() => adjust({ multiply: 2 })}
        >
          ×2
        </Button>
      </div>
      <div className={css.row}>
        <Button className={css.action} onClick={onCancel}>
          Cancel
        </Button>
        <Button
          className={classnames(css.action, css.save, {
            [css.dark]: theme === 'dark',
          })}
          disabled={!hasBpm}
          onClick={() => onSave(text)}
        >
          Save
        </Button>
      </div>
    </div>
  );
}
