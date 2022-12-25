import React, { createContext, useEffect, useRef, useState } from 'react';

type AudioRef = React.RefObject<HTMLAudioElement | null>;
type AudioStateContext = {
  audioRef: AudioRef;
  playbackRate: number;
  setPlaybackRate: React.Dispatch<React.SetStateAction<number>>;
  volume: number;
  setVolume: React.Dispatch<React.SetStateAction<number>>;
  preservesPitch: boolean;
  setPreservesPitch: React.Dispatch<React.SetStateAction<boolean>>;
};

type AudioProviderProps = {
  children: React.ReactNode;
  selector: string;
};

const AudioContext = createContext<AudioStateContext | undefined>(undefined);

const useAudioRef = (selector: string) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = document.querySelector(selector);
  }, [selector]);

  return audioRef;
};

function AudioProvider({ children, selector }: AudioProviderProps) {
  const audioRef = useAudioRef(selector);

  const [playbackRate, setPlaybackRate] = useState(1);
  const [preservesPitch, setPreservesPitch] = useState(false);
  const [volume, setVolume] = useState(1);

  useEffect(() => {
    const setFields = () => {
      // should this be audioRef.current instead?
      if (audioRef.current) {
        audioRef.current.preservesPitch = preservesPitch;
        audioRef.current.playbackRate = playbackRate;
        audioRef.current.volume = volume;
      }
    };

    setFields();

    audioRef.current && audioRef.current.addEventListener('play', setFields);
    const audio = audioRef.current;
    return () => {
      audio && audio.removeEventListener('play', setFields);
    };
  }, [preservesPitch, playbackRate, volume, audioRef]);

  const value = {
    audioRef,
    playbackRate,
    setPlaybackRate,
    preservesPitch,
    setPreservesPitch,
    volume,
    setVolume,
  };

  return (
    <AudioContext.Provider value={value}>{children}</AudioContext.Provider>
  );
}

function useAudio() {
  const context = React.useContext(AudioContext);
  if (context === undefined) {
    throw new Error('useAudio must be used within a AudioProvider');
  }
  return context;
}

export { AudioProvider, useAudio };
