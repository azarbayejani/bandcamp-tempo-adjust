import { beforeEach, describe, expect, it, vi } from 'vitest';

import { AudioController } from './AudioController';
import useAudio from './AudioStore';

function render() {
  // add an audio element to the div
  const audio = document.createElement('audio');
  audio.setAttribute('testid', 'audio');
  return audio;
}

function createFakeNodeList<T extends Node>(nodes: T[]): NodeListOf<T> {
  const base: any = {
    length: nodes.length,
    item(index: number): T | null {
      return nodes[index] ?? null;
    },
    [Symbol.iterator](): IterableIterator<T> {
      return nodes[Symbol.iterator]();
    },
    ...Object.fromEntries(nodes.map((node, i) => [i, node])),
  };

  base.forEach = function (
    callback: (value: T, index: number, list: NodeListOf<T>) => void,
    thisArg?: any
  ): void {
    nodes.forEach((node, index) => callback.call(thisArg, node, index, base));
  };

  return base as NodeListOf<T>;
}

describe('AudioController', () => {
  beforeEach(() => {
    const audio = render();
    vi.spyOn(document, 'querySelectorAll').mockReturnValue(
      createFakeNodeList([audio])
    );
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

  it('should update the audio element preservesPitch when the store preservesPitch changes', async () => {
    const audio = render();
    new AudioController('audio');

    expect(audio.preservesPitch).toBeFalsy();
    useAudio.getState().togglePreservesPitch();
    expect(document.querySelector('audio')!.preservesPitch).toBe(true);
  });

  it('should change all audio elements on the page', async () => {
    const audio1 = render();
    const audio2 = render();

    const fakeNodeList = createFakeNodeList([audio1, audio2]);

    vi.spyOn(document, 'querySelectorAll').mockReturnValue(fakeNodeList);

    new AudioController('audio');

    expect(audio1.volume).toBe(1);
    expect(audio2.volume).toBe(1);
    useAudio.getState().setVolume(0.75);
    expect(audio1.volume).toBe(0.75);
    expect(audio2.volume).toBe(0.75);
  });
});
