import { expect, describe, it, vi } from 'vitest';

import { fireEvent, render, screen, waitFor } from '@testing-library/react';

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
});
