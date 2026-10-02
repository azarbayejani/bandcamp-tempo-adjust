import type { BrowserContext } from '@playwright/test';

type MockTrack = {
  id: number;
  bpm: string;
};

// The rate of Bandcamp's own streams, so the extension has to resample the
// audio to its analysis rate just as it does with a real track.
const SAMPLE_RATE = 44100;
const SECONDS = 30;

// A mono 16-bit WAV with a kick drum on every beat.
function kickTrack(bpm: number) {
  const secondsPerBeat = 60 / bpm;
  const samples = new Int16Array(SAMPLE_RATE * SECONDS);
  for (let i = 0; i < samples.length; i += 1) {
    // Time since the last beat. Beats needn't fall on a whole sample.
    const t = (i / SAMPLE_RATE) % secondsPerBeat;
    samples[i] =
      Math.sin(2 * Math.PI * 60 * t) * Math.exp(-30 * t) * 0.9 * 0x7fff;
  }

  const header = Buffer.alloc(44);
  header.write('RIFF', 0);
  header.writeUInt32LE(36 + samples.byteLength, 4);
  header.write('WAVE', 8);
  header.write('fmt ', 12);
  header.writeUInt32LE(16, 16); // fmt chunk size
  header.writeUInt16LE(1, 20); // PCM
  header.writeUInt16LE(1, 22); // channels
  header.writeUInt32LE(SAMPLE_RATE, 24);
  header.writeUInt32LE(SAMPLE_RATE * 2, 28); // bytes per second
  header.writeUInt16LE(2, 32); // bytes per frame
  header.writeUInt16LE(16, 34); // bits per sample
  header.write('data', 36);
  header.writeUInt32LE(samples.byteLength, 40);
  return Buffer.concat([header, Buffer.from(samples.buffer)]);
}

/**
 * Answers the extension's audio fetches with generated audio at each track's
 * BPM. The stream URLs recorded in the HARs expire a day after recording, so
 * the real audio can't be replayed.
 */
export async function setupAudioMock(
  context: BrowserContext,
  tracks: MockTrack[]
) {
  const bpmById = new Map(tracks.map(({ id, bpm }) => [String(id), bpm]));

  // The background service worker makes these requests, and only
  // context-level routes see service worker traffic; page routes (and so
  // page.routeFromHAR) don't.
  await context.route(/\/stream\/.*\/mp3-128\/\d+/, async (route) => {
    const id = route
      .request()
      .url()
      .match(/\/mp3-128\/(\d+)/)?.[1];
    const bpm = id && bpmById.get(id);
    if (!bpm) {
      await route.fallback();
      return;
    }
    await route.fulfill({
      contentType: 'audio/wav',
      body: kickTrack(Number(bpm)),
    });
  });
}
