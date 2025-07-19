import useAudio from './AudioStore';

// By default this affects ALL audio elements on the page
class AudioController {
  private audioElements: HTMLAudioElement[];

  constructor(selector: string, getCurrTrackUrl?: () => string | undefined) {
    const audioElements = Array.from(
      document.querySelectorAll<HTMLAudioElement>(selector)
    );
    if (
      !audioElements.length ||
      !audioElements.every((a) => a instanceof HTMLAudioElement)
    ) {
      throw new Error('Audio element not found');
    }

    this.audioElements = audioElements;

    // set the initial state
    useAudio.getState().setVolume(this.audioElements[0].volume);
    useAudio.getState().setPlaybackRate(this.audioElements[0].playbackRate);
    if (getCurrTrackUrl) {
      useAudio.getState().setCurrTrackUrl(getCurrTrackUrl());
    }

    useAudio.subscribe(({ playbackRate, preservesPitch, volume }) => {
      this.audioElements.forEach((audio) => {
        audio.playbackRate = playbackRate;
        audio.preservesPitch = preservesPitch;
        audio.volume = volume;
      });
    });

    audioElements.forEach((audio) => {
      audio.addEventListener('volumechange', () => {
        useAudio.getState().setVolume(audio.volume);
      });

      if (getCurrTrackUrl) {
        audio.addEventListener('play', () => {
          useAudio.getState().setCurrTrackUrl(getCurrTrackUrl());
        });
      }
    });
  }
}

export { AudioController };
