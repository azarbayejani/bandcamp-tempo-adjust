import { expect, describe, it, vi, afterEach } from 'vitest';
import { render, screen, waitFor, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import React from 'react';

import CurrentTrackTapBpm from './CurrentTrackTapBpm';

describe('CurrentTrackTapBpm', () => {
  const onSave = vi.fn();
  const onCancel = vi.fn();

  afterEach(() => {
    cleanup();
    vi.resetAllMocks();
  });

  it('allows you to manually input a bpm and save with Enter', async () => {
    render(<CurrentTrackTapBpm onSave={onSave} onCancel={onCancel} />);

    await waitFor(() => {
      expect(screen.getByRole('textbox')).toHaveFocus();
    });

    await userEvent.keyboard('123{Meta}A');

    await waitFor(() => {
      expect(screen.getByRole('textbox')).toHaveValue('123');
    });

    await userEvent.keyboard('{Enter}');

    await waitFor(() => {
      expect(onSave).toHaveBeenCalledWith('123');
    });
  });

  it('allows you to manually input a bpm and save with Enter', async () => {
    render(<CurrentTrackTapBpm onSave={onSave} onCancel={onCancel} />);

    await waitFor(() => {
      expect(screen.getByRole('textbox')).toHaveFocus();
    });

    await userEvent.keyboard('123{Meta}A');

    await waitFor(() => {
      expect(screen.getByRole('textbox')).toHaveValue('123');
    });

    await userEvent.click(screen.getByText(/save/));

    await waitFor(() => {
      expect(onSave).toHaveBeenCalledWith('123');
    });
  });

  it('allows you to tap the bpm and save with Enter', async () => {
    vi.useFakeTimers();
    const user = userEvent.setup({
      advanceTimers: vi.advanceTimersByTime,
    });

    render(<CurrentTrackTapBpm onSave={onSave} onCancel={onCancel} />);

    await waitFor(() => {
      expect(screen.getByRole('textbox')).toHaveFocus();
    });

    await user.keyboard(' ');

    vi.advanceTimersByTime(1000);

    await user.keyboard(' ');

    await waitFor(() => {
      expect(screen.getByRole('textbox')).toHaveValue('60');
    });

    vi.advanceTimersByTime(500);
    await user.keyboard(' ');

    // check to see if it uses a running average
    await waitFor(() => {
      expect(screen.getByRole('textbox')).toHaveValue('90');
    });

    await user.keyboard('{Enter}');

    await waitFor(() => {
      expect(onSave).toHaveBeenCalledWith('90');
    });

    vi.useRealTimers();
  });

  it('allows you to tap the bpm and save with Enter', async () => {
    vi.useFakeTimers();
    const user = userEvent.setup({
      advanceTimers: vi.advanceTimersByTime,
    });

    render(<CurrentTrackTapBpm onSave={onSave} onCancel={onCancel} />);

    await waitFor(() => {
      expect(screen.getByRole('textbox')).toHaveFocus();
    });

    await user.keyboard(' ');

    vi.advanceTimersByTime(1000);

    await user.keyboard(' ');

    await waitFor(() => {
      expect(screen.getByRole('textbox')).toHaveValue('60');
    });

    vi.advanceTimersByTime(500);
    await user.keyboard(' ');

    // check to see if it uses a running average
    await waitFor(() => {
      expect(screen.getByRole('textbox')).toHaveValue('90');
    });

    await user.click(screen.getByRole('button', { name: /save/ }));

    await waitFor(() => {
      expect(onSave).toHaveBeenCalledWith('90');
    });

    vi.useRealTimers();
  });

  it('calls onCancel when escape is entered', async () => {
    render(<CurrentTrackTapBpm onSave={onSave} onCancel={onCancel} />);

    await waitFor(() => {
      expect(screen.getByRole('textbox')).toHaveFocus();
    });

    userEvent.keyboard('{Escape}');

    await waitFor(() => {
      expect(onCancel).toHaveBeenCalledWith();
    });
  });

  it('calls onCancel when cancel is clicked', async () => {
    render(<CurrentTrackTapBpm onSave={onSave} onCancel={onCancel} />);

    await waitFor(() => {
      expect(screen.getByRole('textbox')).toHaveFocus();
    });

    await userEvent.click(screen.getByRole('button', { name: /cancel/ }));

    await waitFor(() => {
      expect(onCancel).toHaveBeenCalled();
    });
  });
});
