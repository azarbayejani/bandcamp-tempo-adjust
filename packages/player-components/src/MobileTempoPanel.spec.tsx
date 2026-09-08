import { describe, expect, it, vi } from 'vitest';

import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import MobileTempoPanel from './MobileTempoPanel';
import { ThemeProvider } from '@tempo-adjust/theme-provider';

const renderPanel = (
  props: Partial<React.ComponentProps<typeof MobileTempoPanel>> = {}
) => {
  const onClickReloadBpm = vi.fn();
  render(
    <ThemeProvider theme="light" buttonStyle="rounded" isMobile>
      <MobileTempoPanel
        loading={false}
        error={false}
        playbackRate={1}
        preservesPitch={false}
        onClickLoadBpms={vi.fn()}
        onClickReloadBpm={onClickReloadBpm}
        onClickSaveBpm={vi.fn()}
        onChangePlaybackRate={vi.fn()}
        onChangePreservesPitch={vi.fn()}
        {...props}
      />
    </ThemeProvider>
  );
  return { onClickReloadBpm };
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
});
