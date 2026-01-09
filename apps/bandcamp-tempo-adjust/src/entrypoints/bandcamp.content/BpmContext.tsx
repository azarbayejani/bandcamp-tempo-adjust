import produce from 'immer';
import React, { createContext, useReducer } from 'react';
import { analyzeAudio } from '../../utils/analyzeAudio';
import { TrackInfoByUrl as TrackInfoStore } from '~/types';
import { hasAllPermissions } from '../../utils/hasAllPermissions';
import useAudio from './AudioStore';

type AudioStateContext = {
  reloadCurrentBpm: () => void;
  loadBpms: () => void;
  setTrackBpm: (options: { bpm: number; url: string }) => void;
  trackInfoState: PageState;
};

type BpmProviderProps = {
  children: React.ReactNode;
  initialTrackInfoStore: TrackInfoStore;
};

const AudioContext = createContext<AudioStateContext | undefined>(undefined);

interface BpmLoadStartAction {
  type: 'BPM_LOAD_START';
  url: string;
}

interface BpmLoadErrorAction {
  type: 'BPM_LOAD_ERROR';
  url: string;
}

interface BpmLoadSuccessAction {
  type: 'BPM_LOAD_SUCCESS';
  url: string;
  bpm: number;
}

type TrackReducerAction =
  | BpmLoadSuccessAction
  | BpmLoadErrorAction
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
        state.trackInfoStore[url].error = false;
        break;
      }
      case 'BPM_LOAD_SUCCESS': {
        const { url, bpm } = action;
        if (!state.trackInfoStore || !state.trackInfoStore[url]) {
          console.log(
            'Ignoring BPM_LOAD_SUCCESS - Tried to load a bpm before initializing trackInfoByUrl state'
          );
          return;
        }

        state.trackInfoStore[url].bpm = bpm;
        state.trackInfoStore[url].loading = false;
        state.trackInfoStore[url].error = false;

        browser.storage.local.set({ [url]: { bpm } });
        break;
      }
      case 'BPM_LOAD_ERROR': {
        const { url } = action;
        if (!state.trackInfoStore || !state.trackInfoStore[url]) {
          console.log(
            'Ignoring BPM_LOAD_ERROR - Tried to load a bpm before initializing trackInfoByUrl state'
          );
          return;
        }

        state.trackInfoStore[url].error = true;
        state.trackInfoStore[url].loading = false;
        break;
      }
    }
  }
);

function BpmProvider({ children, initialTrackInfoStore }: BpmProviderProps) {
  const [trackInfoState, dispatch] = useReducer(trackStateReducer, {
    trackInfoStore: initialTrackInfoStore,
  });
  const currTrackUrl = useAudio(({ currTrackUrl }) => currTrackUrl);

  const loadBpms = React.useCallback(async () => {
    const hasAllPermissionsResponse = await hasAllPermissions();
    if (!hasAllPermissionsResponse) {
      browser.runtime.sendMessage({ action: 'openOptions' });
      return;
    }

    Object.values(trackInfoState.trackInfoStore).forEach(
      (track) =>
        !track.bpm && dispatch({ type: 'BPM_LOAD_START', url: track.url })
    );

    Object.values(trackInfoState.trackInfoStore).forEach((track) => {
      const onError = () =>
        dispatch({ type: 'BPM_LOAD_ERROR', url: track.url });
      if (!track.bpm) {
        analyzeAudio(track.audioPath)
          .then((resolvedBpm) => {
            dispatch({
              type: 'BPM_LOAD_SUCCESS',
              url: track.url,
              bpm: resolvedBpm,
            });
          })
          .catch(onError);
      }
    });
  }, [trackInfoState.trackInfoStore]);

  const loadBpm = (url: string) => {
    dispatch({ type: 'BPM_LOAD_START', url });
    const onError = () => dispatch({ type: 'BPM_LOAD_ERROR', url: url });
    analyzeAudio(trackInfoState.trackInfoStore[url].audioPath)
      .then((resolvedBpm) => {
        dispatch({
          type: 'BPM_LOAD_SUCCESS',
          url,
          bpm: resolvedBpm,
        });
      })
      .catch(onError);
  };

  const value: AudioStateContext = {
    trackInfoState,
    reloadCurrentBpm: () => {
      const url = currTrackUrl;
      if (url) {
        loadBpm(url);
      }
    },
    loadBpms,
    setTrackBpm: ({ bpm, url }) => {
      if (!bpm || !url) {
        return;
      }
      dispatch({ type: 'BPM_LOAD_SUCCESS', url, bpm });
    },
  };

  return (
    <AudioContext.Provider value={value}>{children}</AudioContext.Provider>
  );
}

function useBpm() {
  const context = React.useContext(AudioContext);
  if (context === undefined) {
    throw new Error('useBpm must be used within a BpmProvider');
  }
  return context;
}

export { BpmProvider, useBpm };
