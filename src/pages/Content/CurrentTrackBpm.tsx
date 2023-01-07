import React from 'react';
import { useAudio } from './AudioContext';
import { toOneDecimal } from '../../services/toOneDecimal';

const DetectBpmButton = ({ loadBpms }: { loadBpms: () => void }) => (
  <button className="BandcampPitchSlider_button" onClick={loadBpms}>
    Detect BPM
  </button>
);

export default function CurrentTrackBpm() {
  const { currTrackUrl, playbackRate, trackInfoByUrl, loadBpms } = useAudio();

  if (!currTrackUrl) {
    return <DetectBpmButton loadBpms={loadBpms} />;
  }

  const trackInfo = trackInfoByUrl?.[currTrackUrl];

  if (!trackInfo) {
    return <DetectBpmButton loadBpms={loadBpms} />;
  }

  if (trackInfo.loading) {
    return <>(loading...)</>;
  }

  if (!trackInfo.bpm) {
    return <DetectBpmButton loadBpms={loadBpms} />;
  }

  return <div>{toOneDecimal(trackInfo.bpm * playbackRate)} BPM</div>;
}
