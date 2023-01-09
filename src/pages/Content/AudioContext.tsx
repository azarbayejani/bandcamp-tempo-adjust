import produce from 'immer';
import React, {
  createContext,
  useEffect,
  useReducer,
  useRef,
  useState,
} from 'react';
import { analyzeAudio } from '../../services/analyzeAudio';
import browser from 'webextension-polyfill';
import { TrackInfoByUrl as TrackInfoStore } from '../../types';

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
  trackInfoState: PageState;
};

type AudioProviderProps = {
  children: React.ReactNode;
  selector: string;
  initialTrackInfoStore: TrackInfoStore;
};

const AudioContext = createContext<AudioStateContext | undefined>(undefined);

const useAudioRef = (selector: string) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = document.querySelector(selector);
  }, [selector]);

  return audioRef;
};

interface BpmLoadStartAction {
  type: 'BPM_LOAD_START';
  url: string;
}

interface BpmLoadSuccessAction {
  type: 'BPM_LOAD_SUCCESS';
  url: string;
  bpm: number;
}

interface ChangeTrackAction {
  type: 'CHANGE_TRACK';
  url?: string;
}

type TrackReducerAction =
  | BpmLoadSuccessAction
  | ChangeTrackAction
  | BpmLoadStartAction;

interface PageState {
  currTrackUrl?: string;
  trackInfoStore: TrackInfoStore;
}

const trackStateReducer = produce(
  (state: PageState, action: TrackReducerAction) => {
    const type = action.type;
    switch (type) {
      case 'BPM_LOAD_START': {
        const { url } = action;
        if (!state.trackInfoStore) {
          throw new Error(
            'Tried to load a bpm before initializing trackInfoByUrl state'
          );
        }

        state.trackInfoStore[url].loading = true;
        break;
      }
      case 'BPM_LOAD_SUCCESS': {
        const { url, bpm } = action;
        if (!state.trackInfoStore) {
          throw new Error(
            'Tried to load a bpm before initializing trackInfoByUrl state'
          );
        }

        state.trackInfoStore[url].bpm = bpm;
        state.trackInfoStore[url].loading = false;
        browser.storage.local.set({ [url]: { bpm } });
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
  document.querySelector('.title_link')?.getAttribute('href')?.trim();

function AudioProvider({
  children,
  selector,
  initialTrackInfoStore,
}: AudioProviderProps) {
  const audioRef = useAudioRef(selector);

  const [playbackRate, setPlaybackRate] = useState(1);
  const [preservesPitch, setPreservesPitch] = useState(false);
  const [volume, setVolume] = useState(1);

  const [trackInfoState, dispatch] = useReducer(trackStateReducer, {
    currTrackUrl: getCurrTrackUrl(),
    trackInfoStore: initialTrackInfoStore,
  });

  const loadBpms = React.useCallback(() => {
    Object.values(trackInfoState.trackInfoStore).forEach((track) =>
      dispatch({ type: 'BPM_LOAD_START', url: track.url })
    );

    Object.values(trackInfoState.trackInfoStore).forEach((track) => {
      if (!track.bpm) {
        analyzeAudio(track.audioPath).then((resolvedBpm) => {
          dispatch({
            type: 'BPM_LOAD_SUCCESS',
            url: track.url,
            bpm: resolvedBpm,
          });
        });
      }
    });
  }, [trackInfoState.trackInfoStore]);

  useEffect(() => {
    const setFields = () => {
      if (audioRef.current) {
        audioRef.current.preservesPitch = preservesPitch;
        audioRef.current.playbackRate = playbackRate;
        audioRef.current.volume = volume;
      }
    };

    const loadBpm = async () => {
      if (trackInfoState.trackInfoStore) {
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
    trackInfoState.trackInfoStore,
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
