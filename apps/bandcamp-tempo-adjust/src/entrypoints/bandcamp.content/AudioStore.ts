import { create } from 'zustand';

export interface AudioState {
  // The rate the tempo controls show.
  playbackRate: number;
  // The rate the audio elements play at. It trails `playbackRate` while a
  // rate is being previewed.
  audioPlaybackRate: number;
  setPlaybackRate: (playbackRate: number) => void;
  // Moves the controls without touching the audio.
  previewPlaybackRate: (playbackRate: number) => void;
  preservesPitch: boolean;
  togglePreservesPitch: () => void;
  volume: number;
  setVolume: (volume: number) => void;
  currTrackUrl?: string;
  setCurrTrackUrl: (url: string | undefined) => void;
}

const useAudio = create<AudioState>((set) => ({
  currTrackUrl: undefined,
  setCurrTrackUrl: (url: string | undefined) =>
    set((state) => ({ ...state, currTrackUrl: url })),
  playbackRate: 1,
  audioPlaybackRate: 1,
  setPlaybackRate: (playbackRate: number) =>
    set((state) => ({
      ...state,
      playbackRate,
      audioPlaybackRate: playbackRate,
    })),
  previewPlaybackRate: (playbackRate: number) =>
    set((state) => ({ ...state, playbackRate })),
  preservesPitch: false,
  togglePreservesPitch: () =>
    set((state) => ({ ...state, preservesPitch: !state.preservesPitch })),
  volume: 1,
  setVolume: (volume: number) => set((state) => ({ ...state, volume })),
}));

export default useAudio;
