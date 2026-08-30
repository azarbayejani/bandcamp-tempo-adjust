import { describe, expect, it, vi } from 'vitest';

import {
  useAudioController,
  type UseAudioControllerProps,
} from './useAudioController';
import useAudio from './AudioStore';
import { renderHook } from '@testing-library/react';

function render(
  { selector, getCurrTrackUrl }: UseAudioControllerProps = {
    selector: 'audio',
  },
  numberOfElements = 1
) {
  const elements: HTMLElement[] = [];
  for (let i = 0; i < numberOfElements; i++) {
    let audioElement = document.createElement('audio');
    audioElement.classList.add('audio-selector');
    document.body.appendChild(audioElement);
    elements.push(audioElement);
  }

  return {
    ...renderHook(() => useAudioController({ selector, getCurrTrackUrl })),
    cleanup: () => {
      for (const el of elements) {
        document.body.removeChild(el);
      }
    },
  };
}

describe('useAudioController', () => {
  it('should update the volume when the audio element volume changes', async () => {
    const { cleanup } = render();

    expect(useAudio.getState().volume).toBe(1);
    document.querySelector('audio')!.volume = 0.75;
    expect(useAudio.getState().volume).toBe(0.75);

    cleanup();
  });

  // everything but volume changes don't have 2-way binding
  it('should update the audio element volume when the store volume changes', async () => {
    const { cleanup } = render();

    expect(document.querySelector('audio')!.volume).toBe(1);
    useAudio.getState().setVolume(0.75);
    expect(document.querySelector('audio')!.volume).toBe(0.75);

    cleanup();
  });

  it('should update the audio element playbackRate when the store playbackRate changes', async () => {
    const { cleanup } = render();

    const audio = document.querySelector('audio');

    expect(audio!.playbackRate).toBe(1);
    useAudio.getState().setPlaybackRate(0.75);
    expect(document.querySelector('audio')!.playbackRate).toBe(0.75);
    cleanup();
  });

  it('should update the audio element preservesPitch when the store preservesPitch changes', async () => {
    const { cleanup } = render();

    const audio = document.querySelector('audio');

    expect(audio!.preservesPitch).toBeFalsy();
    useAudio.getState().togglePreservesPitch();
    expect(document.querySelector('audio')!.preservesPitch).toBe(true);

    cleanup();
  });

  it('should change all audio elements on the page', async () => {
    const { cleanup } = render({ selector: 'audio' }, 2);

    const audioElements = document.querySelectorAll('audio');
    const [audio1, audio2] = audioElements;

    expect(audio1.volume).toBe(1);
    expect(audio2.volume).toBe(1);
    useAudio.getState().setVolume(0.75);
    expect(audio1.volume).toBe(0.75);
    expect(audio2.volume).toBe(0.75);

    cleanup();
  });

  it('should support fetching audio elements using a different query selector', () => {
    const { cleanup } = render({ selector: '.audio-selector' }, 2);

    const audioElements = document.querySelectorAll('audio');
    const [audio1, audio2] = audioElements;

    expect(audio1.volume).toBe(1);
    expect(audio2.volume).toBe(1);
    useAudio.getState().setVolume(0.75);
    expect(audio1.volume).toBe(0.75);
    expect(audio2.volume).toBe(0.75);

    cleanup();
  });

  it('should set the currTrackUrl based on getCurrTrackUrl', async () => {
    const getCurrTrackUrl = vi.fn().mockReturnValue('my favorite track');
    const { cleanup } = render({
      selector: 'audio',
      getCurrTrackUrl: getCurrTrackUrl,
    });

    expect(getCurrTrackUrl).toHaveBeenCalled();
    expect(useAudio.getState().currTrackUrl).toBe('my favorite track');

    const audioElement = document.querySelector('audio')! as HTMLAudioElement;

    getCurrTrackUrl.mockReturnValue('another track');
    // dispatch fake play event
    audioElement.dispatchEvent(new Event('play'));

    expect(useAudio.getState().currTrackUrl).toBe('another track');

    cleanup();
  });
});
