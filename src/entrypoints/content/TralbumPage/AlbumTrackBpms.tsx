import React from 'react';
import { createPortal } from 'react-dom';

import { toOneDecimal } from '@tempo-adjust/to-one-decimal';

import { useAudio } from '../AudioContext';
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

  return <>({toOneDecimal(bpm)} BPM)</>;
}

export default function AlbumTrackBpms() {
  const { trackInfoState } = useAudio();

  return (
    <>
      {Object.entries(trackInfoState.trackInfoStore).map(([_, trackInfo]) => (
        <AlbumTrackBpmPortal {...trackInfo} key={trackInfo.trackNumber} />
      ))}
    </>
  );
}
