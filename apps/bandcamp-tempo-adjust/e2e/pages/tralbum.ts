import { Page } from '@playwright/test';
import { expect } from '../fixtures';

export async function openTralbum(
  page: Page,
  extensionId: string,
  url: string
) {
  await page.goto(url);

  await page.getByRole('button', { name: 'Play/pause' });
  await page.getByRole('slider');

  // dismiss cookie banner if it exists
  const dialog = await page.getByRole('dialog');
  if (await dialog.isVisible()) {
    await page.getByRole('button', { name: /Accept all/ }).click();
  }
  await expect(page.getByRole('dialog')).not.toBeVisible();

  const tralbum = {
    clickPlayPauseButton: () => tralbum.getPlayPauseButton().click(),
    getAudioElement: () => page.locator('audio').first(),
    getPlayPauseButton: () => page.getByRole('button', { name: 'Play/pause' }),

    clickPlayPauseForTrack: async (name: string) => {
      await page.getByRole('button', { name: `Play ${name}` }).click();
    },

    // pitch adjust
    getPitchAdjust: () => page.getByRole('slider'),
    setPitchAdjust: async (value: number) => {
      await tralbum.getPitchAdjust().fill(value.toString());
    },
    getPlaybackRate: async (value: number) => {
      const audioElement = tralbum.getAudioElement();
      const playbackRate = await audioElement.evaluate(
        (element: HTMLAudioElement) => element.playbackRate
      );

      return playbackRate;
    },
    waitForPlaybackRate: async (value: number) => {
      await expect(tralbum.getAudioElement()).toHaveJSProperty(
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
      await expect(tralbum.getAudioElement()).toHaveJSProperty(
        'preservesPitch',
        expectedValue
      );
    },
    resetPitch: async () => {
      await page.getByRole('button', { name: 'Reset' }).click();
    },

    // BPM Detection
    detectBpm: async (expectedBpm?: string) => {
      await page.getByRole('button', { name: 'Detect BPM' }).click();
      await expect(
        page.getByRole('progressbar', { name: 'Detecting BPM' })
      ).toBeVisible();

      await expect(page.getByTestId('bpm-display')).toBeVisible();
      await tralbum.expectBpm(expectedBpm);
      await expect(
        page.getByRole('progressbar', { name: 'Detecting BPM' })
      ).not.toBeVisible();
    },
    expectBpm: async (expectedBpm?: string) => {
      await expect(page.getByTestId('bpm-display')).toHaveText(
        expectedBpm ? `${expectedBpm} BPM` : /\d+\.\d BPM/
      );
    },
    expectTrackBpms: async (expectedBpms: (string | undefined)[]) => {
      const bpmPromises = expectedBpms.map((bpm, index) => {
        return expect(page.getByTestId(`bpm-${index + 1}`)).toHaveText(
          `(${bpm} BPM)`
        );
      });

      await Promise.all(bpmPromises);
    },
  };

  return tralbum;
}
