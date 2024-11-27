import { beforeEach, describe, expect, it, vi } from 'vitest';

import { AudioController } from './AudioController';
import useAudio from './AudioStore';

function render() {
  // add an audio element to the div
  const audio = document.createElement('audio');
  audio.setAttribute('testid', 'audio');
  return audio;
}

describe('AudioController', () => {
  beforeEach(() => {
    const audio = render();
    vi.spyOn(document, 'querySelector').mockReturnValue(audio);
    new AudioController('audio');
  });

  it('should update the volume when the audio element volume changes', async () => {
    new AudioController('audio');

    expect(useAudio.getState().volume).toBe(1);
    document.querySelector('audio')!.volume = 0.75;
    expect(useAudio.getState().volume).toBe(0.75);
  });

  // everything but volume changes don't have 2-way binding

  it('should update the audio element volume when the store volume changes', async () => {
    console.log(document.getElementsByTagName('*'));

    const audio = render();
    new AudioController('audio');

    expect(audio.volume).toBe(1);
    useAudio.getState().setVolume(0.75);
    expect(document.querySelector('audio')!.volume).toBe(0.75);
  });

  it('should update the audio element playbackRate when the store playbackRate changes', async () => {
    const audio = render();
    new AudioController('audio');

    expect(audio.playbackRate).toBe(1);
    useAudio.getState().setPlaybackRate(0.75);
    expect(document.querySelector('audio')!.playbackRate).toBe(0.75);
  });

  it.only('should update the audio element preservesPitch when the store preservesPitch changes', async () => {
    const audio = render();
    new AudioController('audio');

    expect(audio.preservesPitch).toBeFalsy();
    useAudio.getState().togglePreservesPitch();
    expect(document.querySelector('audio')!.preservesPitch).toBe(true);
  });
});
