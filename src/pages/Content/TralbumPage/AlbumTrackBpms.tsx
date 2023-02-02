import React from 'react';
import ReactDOM from 'react-dom';
import { useAudio } from '../AudioContext';
import { toOneDecimal } from '../../../services/toOneDecimal';
import { TrackInfo } from '../../../types';

type AlbumTrackBpmProps = TrackInfo;

function AlbumTrackBpmPortal(props: AlbumTrackBpmProps) {
  const portalTarget = document.querySelector(
    `#BandcampPitchAdjust_bpm_${props.trackNumber}`
  );
  if (!portalTarget) {
    return null;
  }

  return ReactDOM.createPortal(<AlbumTrackBpm {...props} />, portalTarget);
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
