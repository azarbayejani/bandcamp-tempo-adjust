import { useEffect, useRef } from 'react';

const useAudioElement = (selector, { volume = 1, playbackRate = 1, preservesPitch = false }) => {
  const audioRef = useRef();

  useEffect(() => {
    audioRef.current = document.querySelector(selector);
  }, [selector]);

  useEffect(() => {
    const setFields = () => {
      audioRef.current.preservesPitch = preservesPitch;
      audioRef.current.playbackRate = playbackRate;
      audioRef.current.volume = volume;
    }

    if (audioRef.current) {
      setFields();
    }

    if (audioRef.current) {
      audioRef.current.addEventListener('play', setFields);
      return () => {
        audioRef.current.removeEventListener('play', setFields);
      }
    }
  }, [preservesPitch, playbackRate, volume])

  return audioRef;
}

export default useAudioElement;