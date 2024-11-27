import { create } from 'zustand';

export interface AudioState {
  playbackRate: number;
  setPlaybackRate: (playbackRate: number) => void;
  preservesPitch: boolean;
  togglePreservesPitch: () => void;
  volume: number;
  setVolume: (volume: number) => void;
}

const useAudio = create<AudioState>((set) => ({
  playbackRate: 1,
  setPlaybackRate: (playbackRate: number) =>
    set((state) => ({ ...state, playbackRate })),
  preservesPitch: false,
  togglePreservesPitch: () =>
    set((state) => ({ ...state, preservesPitch: !state.preservesPitch })),
  volume: 1,
  setVolume: (volume: number) => set((state) => ({ ...state, volume })),
}));

export default useAudio;
