import { test, expect } from './fixtures';
import { openRelease } from './pages/release';

const fixtures = {
  release: {
    url: 'https://www.discogs.com/release/15571627-Sketch-Artist-illegal-afters-01',
  },
};

test('can adjust playback rate', async ({ page, extensionId }) => {
  const url = fixtures.release.url;

  const release = await openRelease(page, extensionId, url);

  await release.clickYoutubePlayButton();
  await expect(release.getYoutubePlayButton()).not.toBeVisible();

  await release.setPitchAdjust(1.1);
  await release.waitForPlaybackRate(1.1);
  await release.waitForMasterTempo(false);

  await release.setPitchAdjust(0.9);
  await release.waitForPlaybackRate(0.9);
  await release.waitForMasterTempo(false);

  await release.resetPitch();
  await release.waitForPlaybackRate(1);
  await release.waitForMasterTempo(false);

  await release.clickTempoRangeButton('±16');
  await release.setPitchAdjust(1.16);
  await release.waitForPlaybackRate(1.16);
  await release.waitForMasterTempo(false);

  await release.setPitchAdjust(0.84);
  await release.waitForPlaybackRate(0.84);
  await release.waitForMasterTempo(false);

  await release.clickTempoRangeButton('±6');
  await release.setPitchAdjust(1.06);
  await release.waitForPlaybackRate(1.06);
  await release.waitForMasterTempo(false);

  await release.setPitchAdjust(0.94);
  await release.waitForPlaybackRate(0.94);
  await release.waitForMasterTempo(false);

  await release.clickTempoRangeButton('WIDE');
  await release.setPitchAdjust(1.99);
  await release.waitForPlaybackRate(1.99);
  await release.waitForMasterTempo(false);

  await release.setPitchAdjust(0.1);
  await release.waitForPlaybackRate(0.1);
  await release.waitForMasterTempo(false);
});
