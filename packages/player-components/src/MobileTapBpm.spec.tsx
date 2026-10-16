import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import MobileTapBpm from './MobileTapBpm';
import { ThemeProvider } from '@tempo-adjust/theme-provider';

describe('MobileTapBpm', () => {
  const onSave = vi.fn();
  const onCancel = vi.fn();
  const onChange = vi.fn();

  // Tap averaging reads Date.now, so only the clock is faked: real
  // timers keep user-event and Testing Library's async wrapper working.
  beforeEach(() => {
    vi.useFakeTimers({ toFake: ['Date'] });
  });

  afterEach(() => {
    vi.useRealTimers();
    vi.resetAllMocks();
  });

  const setup = () => {
    render(
      <ThemeProvider theme="light" buttonStyle="rounded" isMobile>
        <MobileTapBpm onSave={onSave} onCancel={onCancel} onChange={onChange} />
      </ThemeProvider>
    );
    return userEvent.setup();
  };

  const tapButton = () => screen.getByRole('button', { name: /^TAP/ });

  // Taps at a steady interval, which averages to the given bpm.
  const tapAt = async (
    user: ReturnType<typeof userEvent.setup>,
    bpm: number,
    taps: number
  ) => {
    const gap = 60000 / bpm;
    for (let i = 0; i < taps; i++) {
      if (i > 0) {
        vi.advanceTimersByTime(gap);
      }
      await user.click(tapButton());
    }
  };

  it('renders no text input', () => {
    setup();

    expect(screen.queryByRole('textbox')).not.toBeInTheDocument();
  });

  it('starts empty with the steppers and save disabled', () => {
    setup();

    expect(tapButton()).toHaveTextContent('tap along with the beat');
    expect(screen.getByRole('button', { name: 'Halve BPM' })).toBeDisabled();
    expect(
      screen.getByRole('button', { name: 'Decrease BPM by 0.1' })
    ).toBeDisabled();
    expect(
      screen.getByRole('button', { name: 'Increase BPM by 0.1' })
    ).toBeDisabled();
    expect(screen.getByRole('button', { name: 'Double BPM' })).toBeDisabled();
    expect(screen.getByRole('button', { name: 'Save' })).toBeDisabled();
    expect(onChange).toHaveBeenLastCalledWith(undefined);
  });

  it('asks for more after a single tap', async () => {
    const user = setup();

    await user.click(tapButton());

    expect(tapButton()).toHaveTextContent('keep tapping…');
    expect(screen.getByRole('button', { name: 'Save' })).toBeDisabled();
  });

  it('reports the tap count once a bpm exists', async () => {
    const user = setup();

    await tapAt(user, 120, 3);

    expect(tapButton()).toHaveTextContent('from 3 taps');
    expect(onChange).toHaveBeenLastCalledWith(120);
    expect(screen.getByRole('button', { name: 'Save' })).toBeEnabled();
    expect(screen.getByRole('button', { name: 'Halve BPM' })).toBeEnabled();
  });

  it('starts a new run after a 2 second pause', async () => {
    const user = setup();

    await tapAt(user, 120, 2);
    vi.advanceTimersByTime(2500);
    await user.click(tapButton());

    expect(tapButton()).toHaveTextContent('keep tapping…');
    expect(onChange).toHaveBeenLastCalledWith(undefined);
  });

  describe('steppers', () => {
    it('halves and doubles', async () => {
      const user = setup();
      await tapAt(user, 120, 2);

      await user.click(screen.getByRole('button', { name: 'Halve BPM' }));
      expect(onChange).toHaveBeenLastCalledWith(60);

      await user.click(screen.getByRole('button', { name: 'Double BPM' }));
      await user.click(screen.getByRole('button', { name: 'Double BPM' }));
      expect(onChange).toHaveBeenLastCalledWith(240);
    });

    it('nudges by a tenth, rounded to one decimal', async () => {
      const user = setup();
      await tapAt(user, 120, 2);

      await user.click(
        screen.getByRole('button', { name: 'Decrease BPM by 0.1' })
      );
      expect(onChange).toHaveBeenLastCalledWith(119.9);

      await user.click(
        screen.getByRole('button', { name: 'Increase BPM by 0.1' })
      );
      await user.click(
        screen.getByRole('button', { name: 'Increase BPM by 0.1' })
      );
      await user.click(
        screen.getByRole('button', { name: 'Increase BPM by 0.1' })
      );
      // 119.9 + 0.1 + 0.1 + 0.1 would drift in floating point
      expect(onChange).toHaveBeenLastCalledWith(120.2);
    });

    it('marks the source as adjusted', async () => {
      const user = setup();
      await tapAt(user, 120, 4);

      await user.click(screen.getByRole('button', { name: 'Halve BPM' }));

      expect(tapButton()).toHaveTextContent('from 4 taps, adjusted');
    });

    it('tapping after an adjustment starts a new run', async () => {
      const user = setup();
      await tapAt(user, 120, 2);
      await user.click(screen.getByRole('button', { name: 'Double BPM' }));

      vi.advanceTimersByTime(500);
      await user.click(tapButton());

      expect(tapButton()).toHaveTextContent('keep tapping…');
      expect(onChange).toHaveBeenLastCalledWith(undefined);
      expect(screen.getByRole('button', { name: 'Save' })).toBeDisabled();
    });
  });

  it('saves the candidate as text', async () => {
    const user = setup();
    await tapAt(user, 120, 2);
    await user.click(screen.getByRole('button', { name: 'Halve BPM' }));

    await user.click(screen.getByRole('button', { name: 'Save' }));

    expect(onSave).toHaveBeenCalledWith('60');
  });

  it('cancels', async () => {
    const user = setup();

    await user.click(screen.getByRole('button', { name: 'Cancel' }));

    expect(onCancel).toHaveBeenCalled();
    expect(onSave).not.toHaveBeenCalled();
  });
});
