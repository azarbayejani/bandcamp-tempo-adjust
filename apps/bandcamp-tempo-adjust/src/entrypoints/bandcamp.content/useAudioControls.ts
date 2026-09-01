import { useShallow } from 'zustand/shallow';

import useAudio, { type AudioState } from './AudioStore';

const selector = ({
  playbackRate,
  preservesPitch,
  currTrackUrl,
  setPlaybackRate,
  togglePreservesPitch,
}: AudioState) => ({
  playbackRate,
  preservesPitch,
  currTrackUrl,
  setPlaybackRate,
  togglePreservesPitch,
});

// The audio-store slice shared by every playback-control component.
export const useAudioControls = () => useAudio(useShallow(selector));
