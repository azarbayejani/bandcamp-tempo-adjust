import produce from 'immer';
import React, {
  createContext,
  useEffect,
  useReducer,
  useRef,
  useState,
} from 'react';
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
  loadBpms: () => void;
  trackInfoState: TrackInfoState;
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

interface BpmLoadedAction {
  type: 'BPM_LOADED';
  url: string;
  bpm: number;
}

interface ChangeTrackAction {
  type: 'CHANGE_TRACK';
  url?: string;
}

interface LoadingStartedAction {
  type: 'LOADING_STARTED';
}

type TrackReducerAction =
  | BpmLoadedAction
  | ChangeTrackAction
  | LoadingStartedAction;

interface TrackInfoState {
  currTrackUrl?: string;
  trackInfoByUrl: TrackInfoByUrl;
  loadingStarted: boolean;
}

const trackStateReducer = produce(
  (state: TrackInfoState, action: TrackReducerAction) => {
    const type = action.type;
    switch (type) {
      case 'LOADING_STARTED': {
        state.loadingStarted = true;
        break;
      }
      case 'BPM_LOADED': {
        const { url, bpm } = action;
        if (!state.trackInfoByUrl) {
          throw new Error(
            'Tried to load a bpm before initializing trackInfoByUrl state'
          );
        }
        state.trackInfoByUrl[url].bpm = bpm;
        state.trackInfoByUrl[url].loading = false;
        break;
      }
      case 'CHANGE_TRACK': {
        const { url } = action;
        state.currTrackUrl = url;
        break;
      }
    }
  }
);

const getCurrTrackUrl = () =>
  document.querySelector('.title_link')?.getAttribute('href') || undefined;

const tralbumJson = (document.querySelector('[data-tralbum]') as HTMLElement)
  .dataset.tralbum;

const tralbum: BandcampTralbum = tralbumJson
  ? JSON.parse(tralbumJson)
  : { trackinfo: [] };

const initialTrackInfoByUrl: TrackInfoByUrl = tralbum.trackinfo.reduce(
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

function AudioProvider({ children, selector }: AudioProviderProps) {
  const audioRef = useAudioRef(selector);

  const [playbackRate, setPlaybackRate] = useState(1);
  const [preservesPitch, setPreservesPitch] = useState(false);
  const [volume, setVolume] = useState(1);

  const [trackInfoState, dispatch] = useReducer(trackStateReducer, {
    currTrackUrl: getCurrTrackUrl(),
    trackInfoByUrl: initialTrackInfoByUrl,
    loadingStarted: false,
  });

  const loadBpms = React.useCallback(() => {
    dispatch({ type: 'LOADING_STARTED' });
    Object.values(trackInfoState.trackInfoByUrl).forEach((track) => {
      analyzeAudio(track.audioPath).then((resolvedBpm) => {
        dispatch({ type: 'BPM_LOADED', url: track.url, bpm: resolvedBpm });
      });
    });
  }, [trackInfoState.trackInfoByUrl]);

  useEffect(() => {
    const setFields = () => {
      if (audioRef.current) {
        audioRef.current.preservesPitch = preservesPitch;
        audioRef.current.playbackRate = playbackRate;
        audioRef.current.volume = volume;
      }
    };

    const loadBpm = async () => {
      if (trackInfoState.trackInfoByUrl) {
        dispatch({ type: 'CHANGE_TRACK', url: getCurrTrackUrl() });
      }
    };

    setFields();

    audioRef.current && audioRef.current.addEventListener('play', setFields);
    audioRef.current && audioRef.current.addEventListener('play', loadBpm);
    audioRef.current &&
      audioRef.current.addEventListener('play', () =>
        dispatch({ type: 'CHANGE_TRACK', url: getCurrTrackUrl() })
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
    trackInfoState.trackInfoByUrl,
    loadBpms,
  ]);

  const value = {
    audioRef,
    playbackRate,
    setPlaybackRate,
    preservesPitch,
    setPreservesPitch,
    volume,
    setVolume,
    trackInfoState,
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
