import { expect, describe, it, vi } from 'vitest';

import { fireEvent, render, screen, waitFor } from '@testing-library/react';

import userEvent from '@testing-library/user-event';

import PitchAdjust from './PitchAdjust';
import useAudio from '../AudioStore';

describe('PitchAdjust', () => {
  it('initially renders at 0% and with ±10%', () => {
    render(<PitchAdjust />);

    expect(screen.getByRole('slider')).toHaveValue('1');
    expect(screen.getByRole('button', { name: '+0.0%' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '(±10)' })).toBeInTheDocument();
  });

  it('updates the store when the slider is changed', async () => {
    render(<PitchAdjust />);

    fireEvent.change(screen.getByRole('slider'), { target: { value: '0.95' } });

    await waitFor(() => {
      expect(screen.getByRole('slider')).toHaveValue('0.95');
    });

    expect(screen.getByRole('button', { name: '-5.0%' })).toBeInTheDocument();

    expect(useAudio.getState().playbackRate).toBe(0.95);
  });

  it('holds the audio playback rate until the slider is released on Safari', () => {
    vi.stubEnv('SAFARI', 'true');
    useAudio.getState().setPlaybackRate(1);
    render(<PitchAdjust />);
    const slider = screen.getByRole('slider');

    fireEvent.input(slider, { target: { value: '1.05' } });

    const percentage = screen.getByRole('button', { name: '+5.0%' });
    expect(percentage).toHaveClass('BandcampTempoAdjust__button--pending');
    expect(useAudio.getState().audioPlaybackRate).toBe(1);

    fireEvent(slider, new Event('change', { bubbles: true }));

    expect(percentage).not.toHaveClass('BandcampTempoAdjust__button--pending');
    expect(useAudio.getState().audioPlaybackRate).toBe(1.05);

    vi.unstubAllEnvs();
  });

  it('advances the tempo ranges when I click on them', async () => {
    render(<PitchAdjust />);

    userEvent.click(screen.getByRole('button', { name: '(±10)' }));

    await waitFor(() => {
      expect(screen.getByRole('button', { name: '(±16)' })).toBeInTheDocument();
    });

    userEvent.click(screen.getByRole('button', { name: '(±16)' }));

    await waitFor(() => {
      expect(
        screen.getByRole('button', { name: '(WIDE)' })
      ).toBeInTheDocument();
    });

    userEvent.click(screen.getByRole('button', { name: '(WIDE)' }));

    await waitFor(() => {
      expect(screen.getByRole('button', { name: '(±6)' })).toBeInTheDocument();
    });
  });
});
