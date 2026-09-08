import type { TrackInfoByUrl } from '../types';
import browser from 'webextension-polyfill';

// this is bandcamp's data representation
export interface BandcampTralbum {
  trackinfo: TrackInfo[];
  featured_track_id?: number;
}

type TrackInfo = PlayableTrackInfo | MaybePlayableTrackInfo;

export interface PlayableTrackInfo {
  id: number;
  file: {
    [key: string]: string;
  };
  track_num: number;
  title_link: string;
}

export interface MaybePlayableTrackInfo {
  id: number;
  file?: {
    [key: string]: string;
  };
  track_num: number;
  title_link?: string;
}

// A track we can both identify (title_link) and analyze (a bcbits
// stream URL). This is the single definition of "playable" shared by
// the track info store and the mobile current-track lookup, so a track
// one of them knows about is always known to the other.
export interface PlayableTrack extends PlayableTrackInfo {
  audioPath: string;
}

const STREAM_HOST = /^https:\/\/\w+\.bcbits\.com\//;

export function readBandcampTralbum(): BandcampTralbum {
  const tralbumJson =
    document.querySelector<HTMLElement>('[data-tralbum]')?.dataset.tralbum;
  return tralbumJson ? JSON.parse(tralbumJson) : { trackinfo: [] };
}

export function getPlayableTracks(tralbum: BandcampTralbum): PlayableTrack[] {
  return tralbum.trackinfo.flatMap((track) => {
    if (!track.title_link || !track.file) {
      return [];
    }
    const audioPath = Object.values(track.file).find((possibleUrl) =>
      STREAM_HOST.test(possibleUrl)
    );
    return audioPath
      ? [
          {
            ...track,
            title_link: track.title_link,
            file: track.file,
            audioPath,
          },
        ]
      : [];
  });
}

export async function fetchBandcampTrackInfoStore() {
  const playableTracks = getPlayableTracks(readBandcampTralbum());

  const getFromStorage = browser.storage?.local?.get
    ? (keys: string[]) => browser.storage.local.get(keys)
    : () => Promise.resolve({} as Record<string, { bpm?: number }>);

  const storageGet = (await getFromStorage(
    playableTracks.map(({ title_link }) => title_link)
  )) as Record<string, { bpm?: number }>;
  return playableTracks.reduce((acc, track) => {
    acc[track.title_link] = {
      audioPath: track.audioPath,
      trackNumber: track.track_num,
      url: track.title_link,
      loading: false,
      error: false,
      bpm: storageGet[track.title_link]?.bpm,
    };
    return acc;
  }, {} as TrackInfoByUrl);
}
