import { expect, describe, it, vi } from 'vitest';

import { render, screen, waitFor } from '@testing-library/react';

import BpmDetection from './BpmDetection';
import { ThemeProvider } from '@tempo-adjust/theme-provider';
import userEvent from '@testing-library/user-event';

describe('BpmDetection', () => {
  describe('when bpm has not been detected yet', () => {
    const onClickLoadBpms = vi.fn();
    const renderComponent = () => {
      render(
        <ThemeProvider theme="light">
          <BpmDetection
            loading={false}
            error={false}
            playbackRate={1}
            onClickLoadBpms={onClickLoadBpms}
            onClickReloadBpm={vi.fn()}
            onClickSaveBpm={vi.fn()}
          />
        </ThemeProvider>
      );
    };

    it('renders the empty state when bpm has not been detected yet', () => {
      renderComponent();
      expect(
        screen.getByRole('button', { name: 'Detect BPM' })
      ).toBeInTheDocument();
      expect(screen.getByText('--')).toBeInTheDocument();
    });

    it('calls onClickLoadBpms when detect is clicked', async () => {
      renderComponent();

      userEvent.click(screen.getByRole('button', { name: 'Detect BPM' }));

      await waitFor(() => {
        expect(onClickLoadBpms).toHaveBeenCalled();
      });
    });
  });

  it('renders the loading state when bpm is being detected', () => {
    render(
      <ThemeProvider theme="light">
        <BpmDetection
          loading={true}
          error={false}
          playbackRate={1}
          onClickLoadBpms={vi.fn()}
          onClickReloadBpm={vi.fn()}
          onClickSaveBpm={vi.fn()}
        />
      </ThemeProvider>
    );

    expect(screen.getByRole('button', { name: 'Detect BPM' })).toBeDisabled();
    expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });

  it('renders the error state when bpm detection fails', () => {
    render(
      <ThemeProvider theme="light">
        <BpmDetection
          loading={false}
          error={true}
          playbackRate={1}
          onClickLoadBpms={vi.fn()}
          onClickReloadBpm={vi.fn()}
          onClickSaveBpm={vi.fn()}
        />
      </ThemeProvider>
    );

    expect(screen.getByRole('alert')).toHaveTextContent('Error loading BPM');
  });

  describe('when bpm has been detected', () => {
    const onClickReloadBpm = vi.fn();
    const onClickSaveBpm = vi.fn();

    const renderComponent = () => {
      render(
        <ThemeProvider theme="light">
          <BpmDetection
            loading={false}
            error={false}
            playbackRate={1}
            bpm={60}
            onClickLoadBpms={vi.fn()}
            onClickReloadBpm={onClickReloadBpm}
            onClickSaveBpm={onClickSaveBpm}
          />
        </ThemeProvider>
      );
    };

    it('renders the bpm when bpm is provided', () => {
      renderComponent();

      expect(screen.getByTestId('bpm-display')).toHaveTextContent('60.0 BPM');
      expect(
        screen.getByRole('button', { name: 'Re-analyze' })
      ).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Edit' })).toBeInTheDocument();
    });

    it('calls onClickReloadBpm when reload is clicked', async () => {
      renderComponent();

      userEvent.click(screen.getByRole('button', { name: 'Re-analyze' }));

      await waitFor(() => {
        expect(onClickReloadBpm).toHaveBeenCalled();
      });
    });

    // this is just a basic test, more complex tests are in CurrentTrackTapBpm
    it('allows a user to manually input a bpm and save with Enter', async () => {
      renderComponent();

      userEvent.click(screen.getByRole('button', { name: 'Edit' }));

      await waitFor(() => {
        expect(screen.getByRole('textbox')).toHaveFocus();
      });

      await userEvent.keyboard('123{Meta}A');

      await waitFor(() => {
        expect(screen.getByRole('textbox')).toHaveValue('123');
      });

      await userEvent.keyboard('{Enter}');

      await waitFor(() => {
        expect(onClickSaveBpm).toHaveBeenCalledWith(123);
      });
    });

    it('allows user to cancel editing', async () => {
      renderComponent();

      userEvent.click(screen.getByRole('button', { name: 'Edit' }));

      await waitFor(() => {
        expect(screen.getByRole('textbox')).toHaveFocus();
      });

      expect(
        screen.queryByRole('button', { name: 'Edit' })
      ).not.toBeInTheDocument();

      userEvent.click(screen.getByRole('button', { name: 'cancel' }));

      await waitFor(() => {
        expect(screen.getByTestId('bpm-display')).toHaveTextContent('60.0 BPM');
        expect(
          screen.getByRole('button', { name: 'Re-analyze' })
        ).toBeInTheDocument();
        expect(
          screen.getByRole('button', { name: 'Edit' })
        ).toBeInTheDocument();
      });
    });
  });
});
