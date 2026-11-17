import produce from 'immer';
import React, { createContext, useReducer } from 'react';
import browser from 'webextension-polyfill';
import { analyzeAudio } from '../../utils/analyzeAudio';
import type { TrackInfoByUrl as TrackInfoStore } from '~/types';
import { hasAllPermissions } from '../../utils/hasAllPermissions';
import { isPhone } from '../../utils/isPhone';
import { getStoredSettings } from '../../utils/settings';
import useAudio from './AudioStore';

type AudioStateContext = {
  reloadCurrentBpm: () => void;
  // Detects every track on the release, or just the playing track in
  // low data mode.
  detectBpm: () => Promise<void>;
  openSettings: () => void;
  setTrackBpm: (options: { bpm: number; url: string }) => void;
  trackInfoState: PageState;
};

type BpmProviderProps = {
  children: React.ReactNode;
  initialTrackInfoStore: TrackInfoStore;
};

const PHONE_CONCURRENCY = 2;

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
        if (!state.trackInfoStore || !state.trackInfoStore[url]) {
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

  const loadAllBpms = () => {
    const tracksWithoutBpm = Object.values(
      trackInfoState.trackInfoStore
    ).filter((track) => !track.bpm);
    tracksWithoutBpm.forEach((track) =>
      dispatch({ type: 'BPM_LOAD_START', url: track.url })
    );

    // The playing track goes first, since it is the one on screen.
    const queue = [...tracksWithoutBpm].sort(
      (a, b) => Number(b.url === currTrackUrl) - Number(a.url === currTrackUrl)
    );
    const analyzeNext = async (): Promise<void> => {
      const track = queue.shift();
      if (!track) {
        return;
      }
      try {
        const resolvedBpm = await analyzeAudio(track.audioPath);
        dispatch({
          type: 'BPM_LOAD_SUCCESS',
          url: track.url,
          bpm: resolvedBpm,
        });
      } catch (reason) {
        dispatch({ type: 'BPM_LOAD_ERROR', url: track.url });
        console.error('Error loading bpm', track.url, reason);
      }
      return analyzeNext();
    };
    // Fetching and decoding a whole album at once can stall the page or
    // get the tab killed on a phone, so phones work through it two tracks
    // at a time. Desktops start everything together.
    const workers = isPhone() ? PHONE_CONCURRENCY : queue.length;
    for (let i = 0; i < workers; i++) {
      analyzeNext();
    }
  };

  const loadBpm = (url: string) => {
    const track = trackInfoState.trackInfoStore[url];
    if (!track) {
      console.error('Tried to load a bpm for an unknown track', url);
      return;
    }
    dispatch({ type: 'BPM_LOAD_START', url });
    const onError = (reason: string) => {
      dispatch({ type: 'BPM_LOAD_ERROR', url: url });
      console.error('Error loading bpm', url, reason);
    };
    analyzeAudio(track.audioPath)
      .then((resolvedBpm) => {
        dispatch({
          type: 'BPM_LOAD_SUCCESS',
          url,
          bpm: resolvedBpm,
        });
      })
      .catch(onError);
  };

  // The options page opens on its welcome copy; `section` makes it open
  // scrolled to that section instead.
  const openOptions = (section?: 'settings') => {
    browser.runtime.sendMessage({
      action: 'openOptions',
      ...(section && { section }),
    });
  };
  const openSettings = () => openOptions('settings');

  const value: AudioStateContext = {
    trackInfoState,
    reloadCurrentBpm: () => {
      const url = currTrackUrl;
      if (url) {
        loadBpm(url);
      }
    },
    detectBpm: async () => {
      if (!(await hasAllPermissions())) {
        openOptions();
        return;
      }
      // Read at click time so a change made on the options page applies
      // without reloading the Bandcamp tab.
      const { lowDataMode } = await getStoredSettings();
      if (!lowDataMode) {
        loadAllBpms();
      } else if (currTrackUrl) {
        loadBpm(currTrackUrl);
      }
    },
    openSettings,
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
