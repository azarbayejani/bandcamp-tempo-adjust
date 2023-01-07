import React, { createContext, useEffect, useRef, useState } from 'react';
import { analyzeAudio } from '../../services/analyzeAudio';

type AudioRef = React.RefObject<HTMLAudioElement | null>;
type AudioStateContext = {
  audioRef: AudioRef;
  playbackRate: number;
  setPlaybackRate: React.Dispatch<React.SetStateAction<number>>;
  volume: number;
  setVolume: React.Dispatch<React.SetStateAction<number>>;
  preservesPitch: boolean;
  setPreservesPitch: React.Dispatch<React.SetStateAction<boolean>>;
  currTrackUrl?: string;
  loadBpms: () => void;
  trackInfoByUrl?: TrackInfoByUrl;
};

type AudioProviderProps = {
  children: React.ReactNode;
  selector: string;
};

export type TrackInfo = {
  bpm?: number;
  trackNumber: number;
  audioPath: string;
  url: string;
  loading: boolean;
};
type TrackInfoByUrl = {
  [key: string]: TrackInfo;
};

// this is bandcamp's data representation
interface BandcampTralbum {
  trackinfo: {
    file: {
      [key: string]: string;
    };
    track_num: number;
    title_link: string;
  }[];
}

const AudioContext = createContext<AudioStateContext | undefined>(undefined);

const useAudioRef = (selector: string) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = document.querySelector(selector);
  }, [selector]);

  return audioRef;
};

const getCurrTrackUrl = () =>
  document.querySelector('.title_link')?.getAttribute('href') || undefined;

function AudioProvider({ children, selector }: AudioProviderProps) {
  const audioRef = useAudioRef(selector);

  const [currTrackUrl, setCurrTrackUrl] = useState<string>();
  const [playbackRate, setPlaybackRate] = useState(1);
  const [preservesPitch, setPreservesPitch] = useState(false);
  const [volume, setVolume] = useState(1);

  const [trackInfoByUrl, setTrackInfoByUrl] = useState<TrackInfoByUrl>();

  // TODO: this should probably use a reducer!
  const loadBpms = React.useCallback(() => {
    if (trackInfoByUrl) {
      return;
    }
    setCurrTrackUrl(getCurrTrackUrl());
    const tralbumJson = (
      document.querySelector('[data-tralbum]') as HTMLElement
    ).dataset.tralbum;
    const tralbum: BandcampTralbum = tralbumJson
      ? JSON.parse(tralbumJson)
      : { trackinfo: [] };

    const tmpTrackInfoByUrl: TrackInfoByUrl = tralbum.trackinfo.reduce(
      (acc, track) => {
        const fullUrl = Object.values(track.file).find((possibleUrl) =>
          /https:\/\/\w+.bcbits.com/g.test(possibleUrl)
        );
        if (fullUrl) {
          acc[track.title_link] = {
            audioPath: fullUrl,
            trackNumber: track.track_num,
            url: track.title_link,
            loading: true,
          };
        }
        return acc;
      },
      {} as TrackInfoByUrl
    );

    setTrackInfoByUrl(tmpTrackInfoByUrl);
    Object.values(tmpTrackInfoByUrl).forEach((track) => {
      analyzeAudio(track.audioPath).then((resolvedBpm) => {
        tmpTrackInfoByUrl[track.url] = {
          ...track,
          bpm: resolvedBpm,
          loading: false,
        };
        setTrackInfoByUrl({
          ...tmpTrackInfoByUrl,
          [track.url]: {
            ...track,
            bpm: resolvedBpm,
            loading: false,
          },
        });

        const href = document
          .querySelector('.title_link')
          ?.getAttribute('href');
        if (href) {
          setCurrTrackUrl(href);
        }
      });
    });
  }, [trackInfoByUrl]);

  useEffect(() => {
    const setFields = () => {
      if (audioRef.current) {
        audioRef.current.preservesPitch = preservesPitch;
        audioRef.current.playbackRate = playbackRate;
        audioRef.current.volume = volume;
      }
    };

    const loadBpm = async () => {
      if (trackInfoByUrl) {
        const href = getCurrTrackUrl();
        if (href) {
          setCurrTrackUrl(href);
        }
      }
    };

    setFields();

    audioRef.current && audioRef.current.addEventListener('play', setFields);
    audioRef.current && audioRef.current.addEventListener('play', loadBpm);
    audioRef.current &&
      audioRef.current.addEventListener('play', () =>
        setCurrTrackUrl(getCurrTrackUrl())
      );
    const audio = audioRef.current;
    return () => {
      audio && audio.removeEventListener('play', setFields);
      audio && audio.removeEventListener('play', loadBpm);
    };
  }, [
    preservesPitch,
    playbackRate,
    volume,
    audioRef,
    currTrackUrl,
    trackInfoByUrl,
    loadBpms,
  ]);

  const value = {
    audioRef,
    currTrackUrl,
    playbackRate,
    setPlaybackRate,
    preservesPitch,
    setPreservesPitch,
    volume,
    setVolume,
    trackInfoByUrl,
    loadBpms,
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
