import React from 'react';
import ReactDOM from 'react-dom';
import { TrackInfo, useAudio } from './AudioContext';
import { toOneDecimal } from '../../services/toOneDecimal';

type AlbumTrackBpmProps = TrackInfo;

function AlbumTrackBpm({ trackNumber, bpm }: AlbumTrackBpmProps) {
  const portalTarget = document.querySelector(
    `#BandcampPitchAdjust_bpm_${trackNumber}`
  );
  if (!portalTarget) {
    return null;
  }

  return ReactDOM.createPortal(`(${toOneDecimal(bpm)})`, portalTarget);
}

export default function AlbumTrackBpms() {
  const { trackInfoByUrl } = useAudio();
  if (!trackInfoByUrl) {
    return null;
  }
  return (
    <>
      {Object.entries(trackInfoByUrl).map(([_, trackInfo]) => (
        <AlbumTrackBpm {...trackInfo} key={trackInfo.trackNumber} />
      ))}
    </>
  );
}
