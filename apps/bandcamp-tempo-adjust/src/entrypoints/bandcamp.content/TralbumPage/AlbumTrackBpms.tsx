import React from 'react';
import { createPortal } from 'react-dom';

import { toOneDecimal } from '@tempo-adjust/to-one-decimal';

import { useBpm } from '../BpmContext';
import { TrackInfo } from '@/types';

type AlbumTrackBpmProps = TrackInfo;

function AlbumTrackBpmPortal(props: AlbumTrackBpmProps) {
  const portalTarget = document.querySelector(
    `#BandcampPitchAdjust_bpm_${props.trackNumber}`
  );

  if (!portalTarget) {
    return null;
  }

  return createPortal(<AlbumTrackBpm {...props} />, portalTarget);
}

function AlbumTrackBpm({
  trackNumber,
  bpm,
  loading,
  error,
}: AlbumTrackBpmProps) {
  if (loading) {
    return <>(loading BPM...)</>;
  }

  if (error) {
    return <span style={{ color: '#ff0f0f' }}>(Error loading BPM)</span>;
  }

  if (!bpm) {
    return null;
  }

  return (
    <span data-testid={`bpm-${trackNumber}`}>{`(${toOneDecimal(
      bpm
    )} BPM)`}</span>
  );
}

export default function AlbumTrackBpms() {
  const { trackInfoState } = useBpm();

  return (
    <>
      {Object.entries(trackInfoState.trackInfoStore).map(([_, trackInfo]) => (
        <AlbumTrackBpmPortal {...trackInfo} key={trackInfo.trackNumber} />
      ))}
    </>
  );
}
