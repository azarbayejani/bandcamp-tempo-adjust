import { analyze } from 'web-audio-beat-detector';
import browser from 'webextension-polyfill';
import type { FetchAudioBufferFromUrlMessage } from '../types';
import { base64ToBytes } from './base64';

// The detector finds the same tempos at this rate as at 44.1 or 48 kHz, and
// the decoded audio takes half the memory. Keep it divisible by 4: the
// detector skips sampleRate / 4 samples per peak and finds no beats at all
// when that isn't a whole number (as with 22050).
const ANALYSIS_SAMPLE_RATE = 24000;

function mergeChunks(chunks: Uint8Array[]) {
  let length = 0;
  chunks.forEach((chunk) => (length += chunk.length));
  const mergedArray = new Uint8Array(length);
  let offset = 0;
  chunks.forEach((chunk) => {
    mergedArray.set(chunk, offset);
    offset += chunk.length;
  });
  return mergedArray;
}

// The stream host sends no CORS headers, so the background fetches the audio
// and passes it over a port.
function fetchAudio(url: string) {
  return new Promise<Uint8Array<ArrayBuffer>>((resolve, reject) => {
    const port = browser.runtime.connect({ name: 'AnalyzeAudio#' + url });
    const chunks: Uint8Array[] = [];
    // Only matters when the background goes away mid-transfer; without it
    // the promise would never settle.
    const onDisconnect = () =>
      reject(new Error('Disconnected while fetching audio'));
    const close = () => {
      port.onMessage.removeListener(onMessage);
      // Safari also fires onDisconnect on the side that calls disconnect(),
      // which would reject a transfer that just finished.
      port.onDisconnect.removeListener(onDisconnect);
      port.disconnect();
    };
    const onMessage = (message: FetchAudioBufferFromUrlMessage) => {
      switch (message.type) {
        case 'START':
          break;
        case 'DATA':
          chunks.push(base64ToBytes(message.data));
          break;
        case 'END':
          close();
          resolve(mergeChunks(chunks));
          break;
        case 'ERROR':
          close();
          reject(new Error(message.reason));
          break;
      }
    };
    port.onMessage.addListener(onMessage);
    port.onDisconnect.addListener(onDisconnect);
  });
}

export async function analyzeAudio(url: string) {
  const audio = await fetchAudio(url);
  // An offline context decodes straight to its own sample rate and, unlike
  // an AudioContext, holds no audio hardware that would need closing.
  const decoder = new OfflineAudioContext(1, 1, ANALYSIS_SAMPLE_RATE);
  const decodedAudio = await decoder.decodeAudioData(audio.buffer);
  return analyze(decodedAudio);
}
