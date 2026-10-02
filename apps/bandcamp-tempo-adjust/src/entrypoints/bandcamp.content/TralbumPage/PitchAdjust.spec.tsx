import { afterEach, beforeEach, expect, describe, it, vi } from 'vitest';

import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import PitchAdjust from './PitchAdjust';
import { ThemeProvider } from '@tempo-adjust/theme-provider';
import useAudio from '../AudioStore';

describe('PitchAdjust', () => {
  it('initially renders at 0% and with ±10%', () => {
    render(
      <ThemeProvider theme="light">
        <PitchAdjust />
      </ThemeProvider>
    );

    expect(screen.getByRole('slider')).toHaveValue('1');
    expect(screen.getByText('+0.0%')).toBeInTheDocument();
    expect(screen.getByRole('radio', { name: '±10' })).toBeInTheDocument();
    expect(screen.getByRole('radio', { name: '±6' })).toBeInTheDocument();
    expect(screen.getByRole('radio', { name: '±16' })).toBeInTheDocument();
    expect(screen.getByRole('radio', { name: 'WIDE' })).toBeInTheDocument();

    expect(screen.getByRole('button', { name: 'Reset' })).toBeInTheDocument();
    expect(
      screen.getByRole('checkbox', { name: 'Master Tempo' })
    ).not.toBeChecked();
  });

  it('updates the store when the slider is changed', async () => {
    render(
      <ThemeProvider theme="light">
        <PitchAdjust />
      </ThemeProvider>
    );

    fireEvent.change(screen.getByRole('slider'), { target: { value: '0.95' } });

    await waitFor(() => {
      expect(screen.getByRole('slider')).toHaveValue('0.95');
    });

    expect(screen.getByText('-5.0%')).toBeInTheDocument();

    expect(useAudio.getState().playbackRate).toBe(0.95);
  });

  it('applies the playback rate while the slider is moving', () => {
    render(
      <ThemeProvider theme="light">
        <PitchAdjust />
      </ThemeProvider>
    );

    fireEvent.input(screen.getByRole('slider'), { target: { value: '1.05' } });

    expect(useAudio.getState().audioPlaybackRate).toBe(1.05);
    expect(screen.getByText('+5.0%').parentElement).not.toHaveClass(/pending/);
  });

  describe('on Safari', () => {
    beforeEach(() => {
      vi.stubEnv('SAFARI', 'true');
      useAudio.getState().setPlaybackRate(1);
    });

    afterEach(() => {
      vi.unstubAllEnvs();
    });

    it('holds the audio playback rate until the slider is released', () => {
      render(
        <ThemeProvider theme="light">
          <PitchAdjust />
        </ThemeProvider>
      );
      const slider = screen.getByRole('slider');

      fireEvent.input(slider, { target: { value: '1.05' } });

      expect(slider).toHaveValue('1.05');
      expect(screen.getByText('+5.0%')).toBeInTheDocument();
      expect(useAudio.getState().playbackRate).toBe(1.05);
      expect(useAudio.getState().audioPlaybackRate).toBe(1);

      fireEvent(slider, new Event('change', { bubbles: true }));

      expect(useAudio.getState().playbackRate).toBe(1.05);
      expect(useAudio.getState().audioPlaybackRate).toBe(1.05);
    });

    it('dims the percentage until the slider is released', () => {
      render(
        <ThemeProvider theme="light">
          <PitchAdjust />
        </ThemeProvider>
      );
      const slider = screen.getByRole('slider');
      const percentage = () => screen.getByText('+5.0%').parentElement;

      fireEvent.input(slider, { target: { value: '1.05' } });
      expect(percentage()).toHaveClass(/pending/);

      fireEvent(slider, new Event('change', { bubbles: true }));
      expect(percentage()).not.toHaveClass(/pending/);
    });

    it('applies a reset immediately', async () => {
      render(
        <ThemeProvider theme="light">
          <PitchAdjust />
        </ThemeProvider>
      );
      fireEvent.input(screen.getByRole('slider'), {
        target: { value: '1.05' },
      });

      await userEvent.click(screen.getByRole('button', { name: 'Reset' }));

      expect(useAudio.getState().playbackRate).toBe(1);
      expect(useAudio.getState().audioPlaybackRate).toBe(1);
    });
  });
});
