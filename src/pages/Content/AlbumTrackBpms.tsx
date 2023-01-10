import React from 'react';
import ReactDOM from 'react-dom';
import { useAudio } from './AudioContext';
import { toOneDecimal } from '../../services/toOneDecimal';
import { TrackInfo } from '../../types';

type AlbumTrackBpmProps = TrackInfo;

function AlbumTrackBpm({ trackNumber, bpm, loading }: AlbumTrackBpmProps) {
  const portalTarget = document.querySelector(
    `#BandcampPitchAdjust_bpm_${trackNumber}`
  );
  if (!portalTarget) {
    return null;
  }

  if (loading) {
    return ReactDOM.createPortal(<>(loading...)</>, portalTarget);
  }

  if (!bpm) {
    return null;
  }

  return ReactDOM.createPortal(`(${toOneDecimal(bpm)} BPM)`, portalTarget);
}

export default function AlbumTrackBpms() {
  const { trackInfoState } = useAudio();

  return (
    <>
      {Object.entries(trackInfoState.trackInfoStore).map(([_, trackInfo]) => (
        <AlbumTrackBpm {...trackInfo} key={trackInfo.trackNumber} />
      ))}
    </>
  );
}
