import { TrackInfoByUrl } from '../types';
import browser from 'webextension-polyfill';

// this is bandcamp's data representation
export interface BandcampTralbum {
  trackinfo: {
    file: {
      [key: string]: string;
    };
    track_num: number;
    title_link: string;
  }[];
}

export async function fetchBandcampTrackInfoStore() {
  const tralbumJson = (document.querySelector('[data-tralbum]') as HTMLElement)
    .dataset.tralbum;

  const tralbum: BandcampTralbum = tralbumJson
    ? JSON.parse(tralbumJson)
    : { trackinfo: [] };

  const titleLinks = tralbum.trackinfo.reduce((acc, track) => {
    if (track.title_link) {
      acc.push(track);
    }
    return acc;
  }, [] as BandcampTralbum['trackinfo'][0][]);
  const getFromStorage =
    browser.storage?.local.get || (() => Promise.resolve({}));

  const storageGet = await getFromStorage(
    titleLinks.map(({ title_link }) => title_link)
  );
  return titleLinks.reduce((acc, track) => {
    const fullUrl = Object.values(track.file).find((possibleUrl) =>
      /https:\/\/\w+.bcbits.com/g.test(possibleUrl)
    );
    if (fullUrl) {
      acc[track.title_link] = {
        audioPath: fullUrl,
        trackNumber: track.track_num,
        url: track.title_link,
        loading: false,
        error: false,
        bpm: storageGet[track.title_link]?.bpm,
      };
    }
    return acc;
  }, {} as TrackInfoByUrl);
}
