import { test, expect } from './fixtures';
import { openTralbum } from './pages/tralbum';
import { setupNetwork } from './helpers/setupNetwork';
import { setupAudioMock } from './helpers/setupAudioMock';

interface Track {
  id: number;
  title: string;
  // The tempo of the audio setupAudioMock generates for the track, as the
  // extension displays it.
  bpm: string;
}

interface Tralbum {
  harPath: string;
  url: string;
  defaultTrackIndex: number;
  tracks: Track[];
}

const fixtures: Record<string, Tralbum> = {
  album: {
    harPath: 'e2e/har/album.har',
    url: 'https://illegalafterstracks.bandcamp.com/album/illegal-afters-04',
    defaultTrackIndex: 4,
    tracks: [
      {
        id: 4239584012,
        title: 'Silver Oxide',
        bpm: '100.0',
      },
      {
        id: 2069543010,
        title: 'u can have whatever u want',
        bpm: '125.0',
      },
      {
        id: 2413093513,
        title: 'Titrating',
        bpm: '150.0',
      },
      {
        id: 745771613,
        title: 'Turboprop Patterns',
        bpm: '128.0',
      },
      {
        id: 1112731765,
        title: 'ME',
        bpm: '120.0',
      },
    ],
  },
  albumWithExclusiveTracks: {
    harPath: 'e2e/har/album-with-exclusive-tracks.har',
    url: 'https://boulderhead.bandcamp.com/album/i-need-space-to-dance',
    defaultTrackIndex: 0,
    tracks: [
      {
        id: 3505007755,
        title: 'I Need Space To Dance',
        bpm: '144.0',
      },
      {
        id: 3698878352,
        title: 'Dance and Dance Again',
        bpm: '96.0',
      },
      {
        id: 3522373913,
        title: 'Direct Source',
        bpm: '160.0',
      },
      {
        id: 2678384002,
        title: 'Saucy Hive Mind',
        bpm: '125.0',
      },
      {
        id: 56556822,
        title: 'Sense Hyper',
        bpm: '100.0',
      },
    ],
  },
};

const getDefaultTrackBpm = (fixture: Tralbum) => {
  return fixture.tracks[fixture.defaultTrackIndex].bpm;
};

test('can adjust playback rate', async ({ page, extensionId }) => {
  const fixture = fixtures.album;
  await setupNetwork(page, {
    harPath: fixture.harPath,
  });
  const url = fixture.url;

  const tralbum = await openTralbum(page, extensionId, url);
  await expect(tralbum.getAudioElement()).toBeDefined();

  await tralbum.clickPlayPauseButton();

  await tralbum.setPitchAdjust(1.1);
  await tralbum.waitForPlaybackRate(1.1);

  await tralbum.setPitchAdjust(0.9);
  await tralbum.waitForPlaybackRate(0.9);

  await tralbum.clickTempoRangeButton('±16');
  await tralbum.setPitchAdjust(1.16);
  await tralbum.waitForPlaybackRate(1.16);

  await tralbum.setPitchAdjust(0.84);
  await tralbum.waitForPlaybackRate(0.84);

  await tralbum.clickTempoRangeButton('±6');
  await tralbum.setPitchAdjust(1.06);
  await tralbum.waitForPlaybackRate(1.06);

  await tralbum.setPitchAdjust(0.94);
  await tralbum.waitForPlaybackRate(0.94);

  await tralbum.clickTempoRangeButton('WIDE');
  await tralbum.setPitchAdjust(1.99);
  await tralbum.waitForPlaybackRate(1.99);

  await tralbum.setPitchAdjust(0.1);
  await tralbum.waitForPlaybackRate(0.1);

  await tralbum.resetPitch();
  await tralbum.waitForPlaybackRate(1);
});

test('can toggle master tempo', async ({ page, extensionId }) => {
  const fixture = fixtures.album;
  await setupNetwork(page, {
    harPath: fixture.harPath,
  });
  const url = fixture.url;

  const tralbum = await openTralbum(page, extensionId, url);

  // master tempo is off by default, but not until we click the play button
  await tralbum.clickPlayPauseButton();
  await tralbum.waitForMasterTempo(false);

  await tralbum.toggleMasterTempo();
  await tralbum.waitForMasterTempo(true);

  await tralbum.toggleMasterTempo();
  await tralbum.waitForMasterTempo(false);
});

test('can detect bpm and adjust playback rate', async ({
  page,
  extensionId,
}) => {
  const fixture = fixtures.album;
  await setupNetwork(page, {
    harPath: fixture.harPath,
  });
  await setupAudioMock(page.context(), fixture.tracks);
  const url = fixture.url;

  const tralbum = await openTralbum(page, extensionId, url);

  await tralbum.detectBpm(getDefaultTrackBpm(fixture));

  await tralbum.setPitchAdjust(1.1);
  await tralbum.waitForPlaybackRate(1.1);

  await tralbum.expectBpm('132.0');
});

test('persists BPM across page loads', async ({ page, extensionId }) => {
  const fixture = fixtures.album;
  await setupNetwork(page, {
    harPath: fixture.harPath,
  });
  await setupAudioMock(page.context(), fixture.tracks);
  const url = fixture.url;

  const tralbum = await openTralbum(page, extensionId, url);

  await tralbum.detectBpm(getDefaultTrackBpm(fixture));
  await page.reload();
  await tralbum.expectBpm(getDefaultTrackBpm(fixture));
});

test('detecting BPM on an album detects all tracks, and changes when I play another track', async ({
  page,
  extensionId,
}) => {
  const fixture = fixtures.album;
  await setupNetwork(page, {
    harPath: fixture.harPath,
  });
  await setupAudioMock(page.context(), fixture.tracks);
  const url = fixture.url;

  const tralbum = await openTralbum(page, extensionId, url);

  await tralbum.detectBpm(getDefaultTrackBpm(fixture));
  await tralbum.expectTrackBpms(fixture.tracks.map((t) => t.bpm));

  await tralbum.clickPlayPauseForTrack(fixture.tracks[0].title);
  await tralbum.expectBpm(fixture.tracks[0].bpm);
  await tralbum.expectTrackBpms(fixture.tracks.map((t) => t.bpm));
});

test('detecting BPM on an album with exclusive tracks works', async ({
  page,
  extensionId,
}) => {
  const fixture = fixtures.albumWithExclusiveTracks;
  await setupNetwork(page, {
    harPath: fixture.harPath,
  });
  await setupAudioMock(page.context(), fixture.tracks);

  const url = fixture.url;

  const tralbum = await openTralbum(page, extensionId, url);

  await tralbum.detectBpm(getDefaultTrackBpm(fixture));
  await tralbum.expectTrackBpms(fixture.tracks.map((t) => t.bpm));

  await tralbum.clickPlayPauseForTrack(fixture.tracks[1].title);
  await tralbum.expectBpm(fixture.tracks[1].bpm);
  await tralbum.expectTrackBpms(fixture.tracks.map((t) => t.bpm));
});
