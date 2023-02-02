import React from 'react';
import { useAudio } from '../AudioContext';
import { toOneDecimal } from '../../../services/toOneDecimal';

const DetectBpmButton = ({ loadBpms }: { loadBpms: () => void }) => (
  <button className="BandcampTempoAdjust__button" onClick={loadBpms}>
    Detect BPM
  </button>
);

export default function CurrentTrackBpm() {
  const { trackInfoState, playbackRate, loadBpms } = useAudio();

  const { currTrackUrl, trackInfoStore } = trackInfoState;

  if (!currTrackUrl) {
    return null;
  }

  const trackInfo = trackInfoStore[currTrackUrl];

  if (!trackInfo) {
    return <DetectBpmButton loadBpms={loadBpms} />;
  }

  if (trackInfo.bpm) {
    return <div>{toOneDecimal(trackInfo.bpm * playbackRate)} BPM</div>;
  }

  if (trackInfo.loading) {
    return <>(loading BPM...)</>;
  }

  if (trackInfo.error) {
    return <div style={{ color: '#ff0f0f' }}>(Error loading BPM)</div>;
  }

  return <DetectBpmButton loadBpms={loadBpms} />;
}
