import useAudio from './AudioStore';
import { useEffect } from 'react';

export type UseAudioControllerProps = {
  selector: string;
  getCurrTrackUrl?: () => string | undefined;
};

// By default this affects ALL audio elements on the page
const useAudioController = ({
  selector,
  getCurrTrackUrl,
}: UseAudioControllerProps) => {
  useEffect(() => {
    const audioElements = Array.from(
      document.querySelectorAll<HTMLAudioElement>(selector)
    );

    const firstAudioElement = audioElements[0];
    if (
      !firstAudioElement ||
      !audioElements.every((a) => a instanceof HTMLAudioElement)
    ) {
      throw new Error('Audio element not found');
    }

    // set the initial state
    useAudio.getState().setVolume(firstAudioElement.volume);
    useAudio.getState().setPlaybackRate(firstAudioElement.playbackRate);
    if (getCurrTrackUrl) {
      useAudio.getState().setCurrTrackUrl(getCurrTrackUrl());
    }

    const audioStoreUnsubscribe = useAudio.subscribe(
      ({ playbackRate, preservesPitch, volume }) => {
        audioElements.forEach((audio) => {
          audio.playbackRate = playbackRate;
          audio.preservesPitch = preservesPitch;
          audio.volume = volume;
        });
      }
    );

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

    const audioUpdater: MutationCallback = (mutationList) => {
      for (const mutation of mutationList) {
        if (mutation.type === 'attributes') {
          if (mutation.target instanceof HTMLAudioElement) {
            const castedElement = mutation.target as HTMLAudioElement;
            castedElement.playbackRate = useAudio.getState().playbackRate;
          }
        }
      }
    };
    const mutationObserver = new MutationObserver(audioUpdater);

    for (const audioElement of audioElements) {
      mutationObserver.observe(audioElement, { attributes: true });
    }

    return () => {
      mutationObserver.disconnect();
      audioStoreUnsubscribe();
    };
  }, [getCurrTrackUrl, selector]);
};

export { useAudioController };
