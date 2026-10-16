import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import MobileTempoPanel from './MobileTempoPanel';
import { ThemeProvider } from '@tempo-adjust/theme-provider';

const renderPanel = (
  props: Partial<React.ComponentProps<typeof MobileTempoPanel>> = {}
) => {
  const onClickDetectBpm = vi.fn();
  const onClickReloadBpm = vi.fn();
  const onClickSaveBpm = vi.fn();
  render(
    <ThemeProvider theme="light" buttonStyle="rounded" isMobile>
      <MobileTempoPanel
        loading={false}
        error={false}
        playbackRate={1}
        preservesPitch={false}
        onClickDetectBpm={onClickDetectBpm}
        onClickReloadBpm={onClickReloadBpm}
        onClickSaveBpm={onClickSaveBpm}
        onChangePlaybackRate={vi.fn()}
        onChangePreservesPitch={vi.fn()}
        {...props}
      />
    </ThemeProvider>
  );
  return { onClickDetectBpm, onClickReloadBpm, onClickSaveBpm };
};

describe('MobileTempoPanel', () => {
  it('shows the fader and the detect button before a bpm exists', () => {
    renderPanel();

    expect(screen.getByRole('slider')).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'Detect BPM' })
    ).toBeInTheDocument();
    expect(
      screen.queryByRole('button', { name: 'BPM options' })
    ).not.toBeInTheDocument();
  });

  it('calls onClickDetectBpm when detect is clicked', async () => {
    const { onClickDetectBpm } = renderPanel();

    await userEvent.click(screen.getByRole('button', { name: 'Detect BPM' }));

    expect(onClickDetectBpm).toHaveBeenCalled();
  });

  describe('when bpm detection failed', () => {
    it('keeps the fader usable and shows the error', () => {
      renderPanel({ error: true });

      expect(screen.getByRole('alert')).toHaveTextContent(/Error loading BPM/);
      expect(screen.getByRole('slider')).toBeInTheDocument();
      expect(screen.queryByTestId('bpm-display')).not.toBeInTheDocument();
      expect(
        screen.queryByRole('button', { name: 'Detect BPM' })
      ).not.toBeInTheDocument();
    });

    it('offers re-analyze as a way to retry', async () => {
      const { onClickReloadBpm } = renderPanel({ error: true });

      await userEvent.click(
        screen.getByRole('button', { name: 'BPM options' })
      );
      await userEvent.click(
        screen.getByRole('menuitem', { name: 'Re-analyze' })
      );

      await waitFor(() => {
        expect(onClickReloadBpm).toHaveBeenCalled();
      });
    });
  });

  describe('when a bpm exists', () => {
    it('shows the bpm and offers re-analyze and tap bpm', async () => {
      renderPanel({ bpm: 120 });

      expect(screen.getByTestId('bpm-display')).toHaveTextContent('120.0 BPM');
      expect(
        screen.queryByRole('button', { name: 'Detect BPM' })
      ).not.toBeInTheDocument();

      await userEvent.click(
        screen.getByRole('button', { name: 'BPM options' })
      );

      expect(
        screen.getByRole('menuitem', { name: 'Re-analyze' })
      ).toBeInTheDocument();
      expect(
        screen.getByRole('menuitem', { name: 'Tap BPM' })
      ).toBeInTheDocument();
      expect(
        screen.queryByRole('menuitem', { name: 'Edit BPM' })
      ).not.toBeInTheDocument();
    });
  });

  describe('tap bpm screen', () => {
    const openTapScreen = async (
      user: ReturnType<typeof userEvent.setup>,
      props: Partial<React.ComponentProps<typeof MobileTempoPanel>> = {}
    ) => {
      const handlers = renderPanel({ bpm: 120, ...props });
      await user.click(screen.getByRole('button', { name: 'BPM options' }));
      await user.click(screen.getByRole('menuitem', { name: 'Tap BPM' }));
      return handlers;
    };

    it('keeps the fader row and replaces the controls beneath it', async () => {
      const user = userEvent.setup();
      await openTapScreen(user);

      expect(screen.getByRole('slider')).toBeInTheDocument();
      expect(screen.getByText('+0.0%')).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /^TAP/ })).toBeInTheDocument();
      expect(screen.queryByRole('textbox')).not.toBeInTheDocument();
      expect(screen.queryByRole('radiogroup')).not.toBeInTheDocument();
      expect(
        screen.queryByRole('checkbox', { name: 'Master Tempo' })
      ).not.toBeInTheDocument();
      expect(
        screen.queryByRole('button', { name: 'BPM options' })
      ).not.toBeInTheDocument();
    });

    it('shows dashes in the lockup until a bpm is tapped', async () => {
      const user = userEvent.setup();
      await openTapScreen(user);

      expect(screen.getByTestId('bpm-display')).toHaveTextContent('-- BPM');
      expect(screen.getByRole('button', { name: 'Save' })).toBeDisabled();
      expect(screen.getByRole('button', { name: 'Halve BPM' })).toBeDisabled();
    });

    it('replaces the error alert with the candidate lockup while tapping', async () => {
      const user = userEvent.setup();
      await openTapScreen(user, { bpm: undefined, error: true });

      expect(screen.queryByRole('alert')).not.toBeInTheDocument();
      expect(screen.getByTestId('bpm-display')).toHaveTextContent('-- BPM');
      expect(screen.getByRole('slider')).toBeInTheDocument();
    });

    it('returns to the panel with the original bpm on cancel', async () => {
      const user = userEvent.setup();
      const { onClickSaveBpm } = await openTapScreen(user);

      await user.click(screen.getByRole('button', { name: 'Cancel' }));

      expect(screen.getByTestId('bpm-display')).toHaveTextContent('120.0 BPM');
      expect(screen.getByRole('radiogroup')).toBeInTheDocument();
      expect(
        screen.queryByRole('button', { name: /^TAP/ })
      ).not.toBeInTheDocument();
      expect(onClickSaveBpm).not.toHaveBeenCalled();
    });

    describe('with a fake clock', () => {
      // Tap averaging reads Date.now, so only the clock is faked: real
      // timers keep user-event and Testing Library's async wrapper working.
      beforeEach(() => {
        vi.useFakeTimers({ toFake: ['Date'] });
      });

      afterEach(() => {
        vi.useRealTimers();
      });

      const setup = () => userEvent.setup();

      it('shows the live tapped bpm in the lockup', async () => {
        const user = setup();
        await openTapScreen(user);
        const tapButton = screen.getByRole('button', { name: /^TAP/ });

        await user.click(tapButton);
        vi.advanceTimersByTime(500);
        await user.click(tapButton);

        expect(screen.getByTestId('bpm-display')).toHaveTextContent(
          '120.0 BPM'
        );
        expect(screen.getByRole('button', { name: 'Save' })).toBeEnabled();
      });

      it('saves the candidate divided by the playback rate', async () => {
        const user = setup();
        const { onClickSaveBpm } = await openTapScreen(user, {
          playbackRate: 1.25,
        });
        const tapButton = screen.getByRole('button', { name: /^TAP/ });

        await user.click(tapButton);
        vi.advanceTimersByTime(500);
        await user.click(tapButton);
        await user.click(screen.getByRole('button', { name: 'Double BPM' }));

        expect(screen.getByTestId('bpm-display')).toHaveTextContent(
          '240.0 BPM'
        );

        await user.click(screen.getByRole('button', { name: 'Save' }));

        expect(onClickSaveBpm).toHaveBeenCalledWith(240 / 1.25);
        expect(screen.getByRole('radiogroup')).toBeInTheDocument();
      });
    });
  });
});
