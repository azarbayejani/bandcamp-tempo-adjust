import useAudio from './AudioStore';

class AudioController {
  private audio: HTMLAudioElement;

  constructor(selector: string) {
    const audio = document.querySelector(selector) as HTMLAudioElement | null;
    if (!audio || !(audio instanceof HTMLAudioElement)) {
      throw new Error('Audio element not found');
    }

    this.audio = audio;

    // set the initial state
    useAudio.setState({ volume: this.audio.volume });

    useAudio.subscribe(({ playbackRate, preservesPitch, volume }) => {
      this.audio.playbackRate = playbackRate;
      console.log('preservesPitch', preservesPitch);
      this.audio.preservesPitch = preservesPitch;
      this.audio.volume = volume;
    });

    this.audio.addEventListener('volumechange', () => {
      useAudio.getState().setVolume(this.audio.volume);
    });
  }
}

export { AudioController };
