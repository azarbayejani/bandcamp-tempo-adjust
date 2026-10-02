import React from 'react';
import { expect, describe, it, vi } from 'vitest';

import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import PitchAdjust from './PitchAdjust';
import { ThemeProvider } from '@tempo-adjust/theme-provider';

describe('PitchAdjust', () => {
  it('renders correctly for initial state', () => {
    const onChangePreservesPitch = vi.fn();
    const onChangeTempo = vi.fn();

    render(
      <ThemeProvider theme="light">
        <PitchAdjust
          playbackRate={1}
          preservesPitch={false}
          onChangePreservesPitch={onChangePreservesPitch}
          onChangePlaybackRate={onChangeTempo}
        />
      </ThemeProvider>
    );
    expect(screen.getByRole('slider')).toBeInTheDocument();
    expect(screen.getByRole('slider')).toHaveValue('1');
    expect(screen.getByRole('slider')).toHaveAttribute('min', '0.9');
    expect(screen.getByRole('slider')).toHaveAttribute('max', '1.1');

    expect(
      screen.getByRole('checkbox', { name: 'Master Tempo' })
    ).not.toBeChecked();

    expect(screen.getByRole('button', { name: 'Reset' })).toBeInTheDocument();

    expect(screen.getByRole('radio', { name: '±10' })).toBeChecked();

    expect(screen.getByRole('radio', { name: '±6' })).not.toBeChecked();
    expect(screen.getByRole('radio', { name: '±16' })).not.toBeChecked();
    expect(screen.getByRole('radio', { name: 'WIDE' })).not.toBeChecked();

    expect(screen.getByText('+0.0%')).toBeInTheDocument();
  });

  it('renders the pitch as a percentage', async () => {
    const onChangePreservesPitch = vi.fn();
    const onChangeTempo = vi.fn();

    render(
      <ThemeProvider theme="light">
        <PitchAdjust
          playbackRate={1.1}
          preservesPitch={false}
          onChangePreservesPitch={onChangePreservesPitch}
          onChangePlaybackRate={onChangeTempo}
        />
      </ThemeProvider>
    );

    expect(screen.getByRole('slider')).toHaveValue('1.1');
    expect(screen.getByText('+10.%')).toBeInTheDocument();
  });

  it('calls onChangePreservesPitch when preserves pitch is toggled', async () => {
    const onChangePreservesPitch = vi.fn();
    const onChangeTempo = vi.fn();

    render(
      <ThemeProvider theme="light">
        <PitchAdjust
          playbackRate={1}
          preservesPitch={false}
          onChangePreservesPitch={onChangePreservesPitch}
          onChangePlaybackRate={onChangeTempo}
        />
      </ThemeProvider>
    );

    expect(screen.getByRole('slider')).toHaveValue('1');
    userEvent.click(screen.getByRole('checkbox'));

    await waitFor(() => {
      expect(onChangePreservesPitch).toHaveBeenCalled();
    });
  });

  it('calls onChangeTempo with the maximum value when slider is changed outside the range', async () => {
    const onChangePreservesPitch = vi.fn();
    const onChangeTempo = vi.fn();

    render(
      <ThemeProvider theme="light">
        <PitchAdjust
          playbackRate={1}
          preservesPitch={false}
          onChangePreservesPitch={onChangePreservesPitch}
          onChangePlaybackRate={onChangeTempo}
        />
      </ThemeProvider>
    );

    expect(screen.getByRole('slider')).toHaveValue('1');
    fireEvent.change(screen.getByRole('slider'), { target: { value: '1.5' } });

    await waitFor(() => {
      expect(onChangeTempo).toHaveBeenCalledWith({
        playbackRate: 1.1,
        committed: true,
      });
    });
  });

  it.skip('calls onChangeTempo with the minimum value when slider is changed outside the range', async () => {
    const onChangePreservesPitch = vi.fn();
    const onChangeTempo = vi.fn();

    render(
      <ThemeProvider theme="light">
        <PitchAdjust
          playbackRate={1}
          preservesPitch={false}
          onChangePreservesPitch={onChangePreservesPitch}
          onChangePlaybackRate={onChangeTempo}
        />
      </ThemeProvider>
    );

    expect(screen.getByRole('slider')).toHaveValue('1');
    fireEvent.change(screen.getByRole('slider'), { target: { value: '0.5' } });

    await waitFor(() => {
      expect(onChangeTempo).toHaveBeenCalledWith({
        playbackRate: 0.9,
        committed: true,
      });
    });
  });

  it.skip('calls onChangeTempo with the correct value when slider is changed', async () => {
    const onChangePreservesPitch = vi.fn();
    const onChangeTempo = vi.fn();

    render(
      <ThemeProvider theme="light">
        <PitchAdjust
          playbackRate={1}
          preservesPitch={false}
          onChangePreservesPitch={onChangePreservesPitch}
          onChangePlaybackRate={onChangeTempo}
        />
      </ThemeProvider>
    );

    expect(screen.getByRole('slider')).toHaveValue('1');
    fireEvent.change(screen.getByRole('slider'), { target: { value: '0.95' } });

    await waitFor(() => {
      expect(onChangeTempo).toHaveBeenCalledWith({
        playbackRate: 0.95,
        committed: true,
      });
    });
  });

  describe('dragging the fader', () => {
    const renderWithState = () => {
      const onChangeTempo = vi.fn();
      const Harness = () => {
        const [playbackRate, setPlaybackRate] = React.useState(1);
        return (
          <ThemeProvider theme="light">
            <PitchAdjust
              playbackRate={playbackRate}
              preservesPitch={false}
              onChangePreservesPitch={vi.fn()}
              onChangePlaybackRate={(change) => {
                onChangeTempo(change);
                setPlaybackRate(change.playbackRate);
              }}
            />
          </ThemeProvider>
        );
      };
      render(<Harness />);
      return { onChangeTempo };
    };

    it('reports uncommitted changes while the fader is moving', () => {
      const { onChangeTempo } = renderWithState();

      fireEvent.input(screen.getByRole('slider'), {
        target: { value: '1.05' },
      });

      expect(onChangeTempo).toHaveBeenCalledTimes(1);
      expect(onChangeTempo).toHaveBeenCalledWith({
        playbackRate: 1.05,
        committed: false,
      });
      expect(screen.getByText('+5.0%')).toBeInTheDocument();
    });

    it('commits the change when the fader is released', () => {
      const { onChangeTempo } = renderWithState();
      const slider = screen.getByRole('slider');

      fireEvent.input(slider, { target: { value: '1.03' } });
      fireEvent.input(slider, { target: { value: '1.05' } });
      // Browsers fire `change` on release, without a new value
      fireEvent(slider, new Event('change', { bubbles: true }));

      expect(onChangeTempo).toHaveBeenCalledTimes(3);
      expect(onChangeTempo).toHaveBeenLastCalledWith({
        playbackRate: 1.05,
        committed: true,
      });
    });

    it('commits the change when reset is clicked', async () => {
      const { onChangeTempo } = renderWithState();

      await userEvent.click(screen.getByRole('button', { name: 'Reset' }));

      expect(onChangeTempo).toHaveBeenCalledWith({
        playbackRate: 1,
        committed: true,
      });
    });
  });

  it('changes the minimum and maximum values of the slider when the range is changed', async () => {
    const onChangePreservesPitch = vi.fn();
    const onChangeTempo = vi.fn();

    render(
      <ThemeProvider theme="light">
        <PitchAdjust
          playbackRate={1}
          preservesPitch={false}
          onChangePreservesPitch={onChangePreservesPitch}
          onChangePlaybackRate={onChangeTempo}
        />
      </ThemeProvider>
    );

    expect(screen.getByRole('slider')).toHaveValue('1');
    expect(screen.getByRole('slider')).toHaveAttribute('min', '0.9');
    expect(screen.getByRole('slider')).toHaveAttribute('max', '1.1');

    userEvent.click(screen.getByRole('radio', { name: 'WIDE' }));

    await waitFor(() => {
      expect(screen.getByRole('radio', { name: 'WIDE' })).toBeChecked();
      expect(screen.getByRole('slider')).toHaveAttribute('min', '0.1');
      expect(screen.getByRole('slider')).toHaveAttribute('max', '2');
    });

    userEvent.click(screen.getByRole('radio', { name: '±6' }));

    await waitFor(() => {
      expect(screen.getByRole('radio', { name: '±6' })).toBeChecked();
      expect(screen.getByRole('slider')).toHaveAttribute('min', `${1 - 0.06}`);
      expect(screen.getByRole('slider')).toHaveAttribute('max', `${1 + 0.06}`);
    });

    userEvent.click(screen.getByRole('radio', { name: '±16' }));

    await waitFor(() => {
      expect(screen.getByRole('radio', { name: '±16' })).toBeChecked();
      expect(screen.getByRole('slider')).toHaveAttribute('min', `${1 - 0.16}`);
      expect(screen.getByRole('slider')).toHaveAttribute('max', `${1 + 0.16}`);
    });

    userEvent.click(screen.getByRole('radio', { name: '±10' }));

    await waitFor(() => {
      expect(screen.getByRole('radio', { name: '±10' })).toBeChecked();
      expect(screen.getByRole('slider')).toHaveAttribute('min', '0.9');
      expect(screen.getByRole('slider')).toHaveAttribute('max', '1.1');
    });
  });
});
