import { describe, expect, it } from 'vitest';

import React from 'react';
import { render, screen } from '@testing-library/react';

import AlbumTrackBpms from './AlbumTrackBpms';
import { BpmProvider } from '../BpmContext';

describe('AlbumTrackBpms', () => {
  describe('when there are tracks', () => {
    it('renders them with the correct state', () => {
      render(
        <>
          <div id="BandcampPitchAdjust_bpm_3" data-testid="bpm-3"></div>
          <div id="BandcampPitchAdjust_bpm_2" data-testid="bpm-2"></div>
          <div id="BandcampPitchAdjust_bpm_1" data-testid="bpm-1"></div>
        </>
      );

      render(
        <BpmProvider
          initialTrackInfoStore={{
            '/some/track': {
              url: '/some/track',
              bpm: 123,
              audioPath: '/some/track',
              trackNumber: 1,
              loading: false,
              error: false,
            },
            '/some/other/track': {
              url: '/some/other/track',
              trackNumber: 2,
              audioPath: '/some/other/track',
              loading: true,
              error: false,
            },
            '/yet/another/track': {
              url: '/yet/another/track',
              trackNumber: 3,
              audioPath: '/yet/another/track',
              loading: false,
              error: true,
            },
            '/some/more/track': {
              url: '/some/more/track',
              trackNumber: 4,
              audioPath: '/some/more/track',
              loading: false,
              error: false,
            },
          }}
        >
          <AlbumTrackBpms />
        </BpmProvider>
      );

      expect(screen.getByTestId('bpm-1')).toHaveTextContent(/123.0 BPM/);
      expect(screen.getByTestId('bpm-2')).toHaveTextContent(/loading BPM.../);
      expect(screen.getByTestId('bpm-3')).toHaveTextContent(
        /Error loading BPM/
      );
      expect(screen.getByTestId('bpm-4')).toBeEmptyDOMElement();
    });
  });

  it('does not render anything when there are no divs for the tracks', () => {
    render(
      <BpmProvider
        initialTrackInfoStore={{
          '/some/track': {
            url: '/some/track',
            bpm: 123,
            audioPath: '/some/track',
            trackNumber: 1,
            loading: false,
            error: false,
          },
        }}
      >
        <AlbumTrackBpms />
      </BpmProvider>
    );
    expect(screen.getByTestId('bpm-1')).toBeEmptyDOMElement();
  });

  it('does not render anything when there are no tracks', () => {
    const { container } = render(
      <BpmProvider initialTrackInfoStore={{}}>
        <AlbumTrackBpms />
      </BpmProvider>
    );
    expect(container).toBeEmptyDOMElement();
  });
});
