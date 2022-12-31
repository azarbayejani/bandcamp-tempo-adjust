import React from 'react';
import { useAudio } from './AudioContext';
import { toOneDecimal } from '../../services/toOneDecimal';

export default function CurrentTrackBpm() {
  const { bpm, playbackRate, loadBpms } = useAudio();

  if (!bpm) {
    return (
      <button className="BandcampPitchSlider_button" onClick={loadBpms}>
        Detect BPM
      </button>
    );
  }

  return <div>{toOneDecimal(bpm * playbackRate)} BPM</div>;
}
