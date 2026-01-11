import { test, expect } from './fixtures';
import { openTralbum } from './pages/tralbum';

const fixtures = {
  album: {
    url: 'https://illegalafterstracks.bandcamp.com/album/illegal-afters-04',
    defaultTrackIndex: 4,
    tracks: [
      {
        title: 'Silver Oxide',
        bpm: '98.7',
      },
      {
        title: 'u can have whatever u want',
        bpm: '145.0',
      },
      {
        title: 'Titrating',
        bpm: '150.0',
      },
      {
        title: 'Turboprop Patterns',
        bpm: '140.0',
      },
      {
        title: 'ME',
        bpm: '140.0',
      },
    ],
  },
};

const getDefaultTrackBpm = () => {
  return fixtures.album.tracks[fixtures.album.defaultTrackIndex].bpm;
};

test('can adjust playback rate', async ({ page, extensionId }) => {
  const url = fixtures.album.url;

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
  const url = fixtures.album.url;

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
  const url = fixtures.album.url;

  const tralbum = await openTralbum(page, extensionId, url);

  await tralbum.detectBpm(getDefaultTrackBpm());

  await tralbum.setPitchAdjust(1.1);
  await tralbum.waitForPlaybackRate(1.1);

  await tralbum.expectBpm('154.0');
});

test('persists BPM across page loads', async ({ page, extensionId }) => {
  const url = fixtures.album.url;

  const tralbum = await openTralbum(page, extensionId, url);

  await tralbum.detectBpm(getDefaultTrackBpm());
  await page.reload();
  await tralbum.expectBpm(getDefaultTrackBpm());
});

test('detecting BPM on an album detects all tracks, and changes when I play another track', async ({
  page,
  extensionId,
}) => {
  const url = fixtures.album.url;

  const tralbum = await openTralbum(page, extensionId, url);

  await tralbum.detectBpm(getDefaultTrackBpm());
  await tralbum.expectTrackBpms(fixtures.album.tracks.map((t) => t.bpm));

  await tralbum.clickPlayPauseForTrack(fixtures.album.tracks[0].title);
  await tralbum.expectBpm(fixtures.album.tracks[0].bpm);
  await tralbum.expectTrackBpms(fixtures.album.tracks.map((t) => t.bpm));
});
