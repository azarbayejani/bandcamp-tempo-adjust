import { describe, expect, it } from 'vitest';

import { createMobileTrackUrlResolver } from './mobileCurrentTrack';
import type { BandcampTralbum } from './fetchBandcampTrackInfoStore';

const stream = (id: number, token = 'a') =>
  `https://t4.bcbits.com/stream/abc123/mp3-128/${id}?p=0&ts=1&t=${token}&token=1_${token}`;

const tralbum: BandcampTralbum = {
  featured_track_id: 2,
  trackinfo: [
    {
      id: 1,
      track_num: 1,
      title_link: '/track/one',
      file: { 'mp3-128': stream(1) },
    },
    {
      id: 2,
      track_num: 2,
      title_link: '/track/two',
      file: { 'mp3-128': stream(2) },
    },
    // Exclusive track: no stream, never playable
    { id: 3, track_num: 3, title_link: '/track/three' },
  ],
};

describe('createMobileTrackUrlResolver', () => {
  const resolve = createMobileTrackUrlResolver(tralbum);

  it('returns the featured track before playback starts', () => {
    expect(resolve(undefined)).toBe('/track/two');
    expect(resolve('')).toBe('/track/two');
  });

  it('falls back to the first playable track without a featured track', () => {
    const withoutFeatured = { ...tralbum, featured_track_id: undefined };
    expect(createMobileTrackUrlResolver(withoutFeatured)(null)).toBe(
      '/track/one'
    );
  });

  it('matches the exact stream URL from the tralbum', () => {
    expect(resolve(stream(1))).toBe('/track/one');
  });

  it('matches a re-signed stream URL by its path', () => {
    expect(resolve(stream(1, 'fresh-token'))).toBe('/track/one');
  });

  it('reports nothing for a stream that matches no track', () => {
    expect(resolve(stream(999))).toBeUndefined();
  });

  it('returns nothing when there are no playable tracks', () => {
    expect(
      createMobileTrackUrlResolver({ trackinfo: [] })(null)
    ).toBeUndefined();
  });
});
