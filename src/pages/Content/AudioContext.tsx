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
  bpm?: number;
  loadBpms: () => void;
  trackInfoByUrl?: TrackInfoByUrl;
};

type AudioProviderProps = {
  children: React.ReactNode;
  selector: string;
};

export type TrackInfo = {
  bpm: number;
  trackNumber: number;
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

const getPath = (url: string) => new URL(url).pathname;

const useAudioRef = (selector: string) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = document.querySelector(selector);
  }, [selector]);

  return audioRef;
};

function AudioProvider({ children, selector }: AudioProviderProps) {
  const audioRef = useAudioRef(selector);

  const [bpm, setBpm] = useState<number>();
  const [playbackRate, setPlaybackRate] = useState(1);
  const [preservesPitch, setPreservesPitch] = useState(false);
  const [volume, setVolume] = useState(1);

  const [trackInfoByUrl, setTrackInfoByUrl] = useState<TrackInfoByUrl>();

  const loadBpms = React.useCallback(() => {
    if (trackInfoByUrl) {
      return;
    }
    const tralbumJson = (
      document.querySelector('[data-tralbum]') as HTMLElement
    ).dataset.tralbum;
    const tralbum: BandcampTralbum = tralbumJson
      ? JSON.parse(tralbumJson)
      : { trackinfo: [] };

    const bpmPromises: Promise<number>[] = [];

    const tracks: { audioPath: string; trackNumber: number; url: string }[] =
      [];
    tralbum.trackinfo.forEach((track) => {
      const fullUrl = Object.values(track.file).find((possibleUrl) =>
        /https:\/\/\w+.bcbits.com/g.test(possibleUrl)
      );

      if (fullUrl) {
        const audioPath = getPath(fullUrl);
        tracks.push({
          audioPath,
          trackNumber: track.track_num,
          url: track.title_link,
        });
        bpmPromises.push(analyzeAudio(fullUrl));
      }
    });

    const tmpTrackInfoByUrl: TrackInfoByUrl = {};
    Promise.all(bpmPromises).then((bpmResults) => {
      tracks.forEach((track, i) => {
        tmpTrackInfoByUrl[track.url] = {
          bpm: bpmResults[i],
          trackNumber: track.trackNumber,
        };
      });
      setTrackInfoByUrl(tmpTrackInfoByUrl);
      const href = document.querySelector('.title_link')?.getAttribute('href');
      if (href) {
        setBpm(tmpTrackInfoByUrl[href].bpm);
      }
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
        const href = document
          .querySelector('.title_link')
          ?.getAttribute('href');
        if (href) {
          setBpm(trackInfoByUrl[href].bpm);
        }
      }
    };

    setFields();

    audioRef.current && audioRef.current.addEventListener('play', setFields);
    audioRef.current && audioRef.current.addEventListener('play', loadBpm);
    audioRef.current && audioRef.current.addEventListener('play', loadBpms);
    audioRef.current &&
      audioRef.current.addEventListener('play', () =>
        console.log(document.querySelector('.title_link'))
      );
    const audio = audioRef.current;
    return () => {
      audio && audio.removeEventListener('play', setFields);
      audio && audio.removeEventListener('play', loadBpm);
      audio && audio.removeEventListener('play', loadBpms);
    };
  }, [
    preservesPitch,
    playbackRate,
    volume,
    audioRef,
    bpm,
    trackInfoByUrl,
    loadBpms,
  ]);

  const value = {
    audioRef,
    bpm,
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
