import {
  getPlayableTracks,
  type BandcampTralbum,
} from './fetchBandcampTrackInfoStore';

// Bandcamp signs its stream URLs with a time-limited query string
// (?p=0&ts=…&t=…&token=…). The player can load a freshly signed URL
// for the same track, so only the origin and path identify a stream.
export const streamKey = (url: string) => {
  try {
    const { origin, pathname } = new URL(url, document.baseURI);
    return origin + pathname;
  } catch {
    return url;
  }
};

// Builds a lookup from the audio element's src to the track's title_link
// for the mobile tralbum page, which has no per-track link in its player.
// The tralbum blob is static, so it is parsed once here rather than on
// every play event.
export function createMobileTrackUrlResolver(tralbum: BandcampTralbum) {
  const playableTracks = getPlayableTracks(tralbum);

  const urlByStream = new Map<string, string>();
  for (const track of playableTracks) {
    for (const src of Object.values(track.file)) {
      urlByStream.set(streamKey(src), track.title_link);
    }
  }

  // Before playback starts the audio elements have no src; the player
  // is primed with the featured track (or the first playable one).
  const primedTrack =
    playableTracks.find((track) => track.id === tralbum.featured_track_id) ??
    playableTracks[0];

  return (src: string | null | undefined): string | undefined => {
    if (!src) {
      return primedTrack?.title_link;
    }
    // A src we can't match is an unknown track, not the primed one:
    // reporting the wrong track would show and save BPMs under its URL.
    return urlByStream.get(streamKey(src));
  };
}
