import { createPortal } from 'react-dom';

import { toOneDecimal } from '@tempo-adjust/to-one-decimal';

import { useBpm } from '../BpmContext';
import type { TrackInfo } from '@/types';

type AlbumTrackBpmProps = TrackInfo;

// The id of the element in Bandcamp's tracklist that a track's BPM
// renders into. The content script inserts these before rendering.
export const bpmPortalId = (trackNumber: number) =>
  `BandcampPitchAdjust_bpm_${trackNumber}`;

function AlbumTrackBpmPortal(props: AlbumTrackBpmProps) {
  const portalTarget = document.getElementById(bpmPortalId(props.trackNumber));

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
