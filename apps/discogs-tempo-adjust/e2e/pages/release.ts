import { Page } from '@playwright/test';
import { expect } from '../fixtures';

export async function openRelease(
  page: Page,
  extensionId: string,
  url: string
) {
  await page.goto(url);

  const release = {
    clickYoutubePlayButton: () => release.getYoutubePlayButton().click(),
    getYoutubeIframe: () => page.frameLocator("iframe[id^='player-']"),
    getVideoElement: () => release.getYoutubeIframe().locator('video'),
    getYoutubePlayButton: () =>
      page.getByRole('button', { name: 'Play' }).first(),

    clickPlayPauseForTrack: async (name: string) => {
      // await page.getByRole('button', { name: `Play ${name}` }).click();
    },

    // pitch adjust
    getPitchAdjust: () => page.getByRole('slider'),
    setPitchAdjust: async (value: number) => {
      await release.getPitchAdjust().fill(value.toString());
    },
    getPlaybackRate: async (value: number) => {
      const audioElement = release.getVideoElement();
      const playbackRate = await audioElement.evaluate(
        (element: HTMLAudioElement) => element.playbackRate
      );

      return playbackRate;
    },
    waitForPlaybackRate: async (value: number) => {
      await expect(release.getVideoElement()).toHaveJSProperty(
        'playbackRate',
        value
      );
    },
    clickTempoRangeButton: async (range: string) => {
      await page.getByRole('radio', { name: range }).click();
    },
    toggleMasterTempo: async () => {
      await page.getByRole('checkbox', { name: 'Master tempo' }).click();
    },
    waitForMasterTempo: async (expectedValue: boolean) => {
      await expect(release.getVideoElement()).toHaveJSProperty(
        'preservesPitch',
        expectedValue
      );
    },
    resetPitch: async () => {
      await page.getByRole('button', { name: 'Reset' }).click();
    },
  };

  return release;
}
