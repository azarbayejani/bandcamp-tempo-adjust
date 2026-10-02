import { useShallow } from 'zustand/shallow';

import type { PlaybackRateChange } from '@tempo-adjust/player-components';

import useAudio, { type AudioState } from './AudioStore';

const selector = ({
  playbackRate,
  audioPlaybackRate,
  preservesPitch,
  currTrackUrl,
  togglePreservesPitch,
}: AudioState) => ({
  playbackRate,
  // The fader has moved but the audio hasn't caught up yet
  playbackRatePending: playbackRate !== audioPlaybackRate,
  preservesPitch,
  currTrackUrl,
  togglePreservesPitch,
});

// WebKit briefly drops the audio out on every playbackRate change
// (https://bugs.webkit.org/show_bug.cgi?id=163433), so Safari holds the
// audio at its current rate until the fader is released.
const changePlaybackRate = ({
  playbackRate,
  committed,
}: PlaybackRateChange) => {
  const { setPlaybackRate, previewPlaybackRate } = useAudio.getState();
  if (committed || !import.meta.env.SAFARI) {
    setPlaybackRate(playbackRate);
  } else {
    previewPlaybackRate(playbackRate);
  }
};

// The audio-store slice shared by every playback-control component.
export const useAudioControls = () => ({
  ...useAudio(useShallow(selector)),
  changePlaybackRate,
});
