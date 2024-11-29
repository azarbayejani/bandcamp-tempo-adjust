import useAudio from './AudioStore';

class AudioController {
  private audio: HTMLAudioElement;

  constructor(selector: string, getCurrTrackUrl?: () => string | undefined) {
    const audio = document.querySelector(selector) as HTMLAudioElement | null;
    if (!audio || !(audio instanceof HTMLAudioElement)) {
      throw new Error('Audio element not found');
    }

    this.audio = audio;

    // set the initial state
    useAudio.getState().setVolume(this.audio.volume);
    useAudio.getState().setPlaybackRate(this.audio.playbackRate);
    if (getCurrTrackUrl) {
      useAudio.getState().setCurrTrackUrl(getCurrTrackUrl());
    }

    useAudio.subscribe(({ playbackRate, preservesPitch, volume }) => {
      this.audio.playbackRate = playbackRate;
      this.audio.preservesPitch = preservesPitch;
      this.audio.volume = volume;
    });

    this.audio.addEventListener('volumechange', () => {
      useAudio.getState().setVolume(this.audio.volume);
    });

    if (getCurrTrackUrl) {
      this.audio.addEventListener('play', () => {
        useAudio.getState().setCurrTrackUrl(getCurrTrackUrl());
      });
    }
  }
}

export { AudioController };
