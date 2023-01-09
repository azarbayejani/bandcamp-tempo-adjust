import { analyze } from 'web-audio-beat-detector';
import browser from 'webextension-polyfill';

// note that this function must be initiated from a user action!
export async function analyzeAudio(url: string) {
  let audioContext = new AudioContext();
  const response = JSON.parse(await browser.runtime.sendMessage({ url }));
  const buffer = new Uint8Array(response.data).buffer;
  const decodedAudio = await audioContext.decodeAudioData(buffer);

  const bpm = await analyze(decodedAudio);
  return bpm;
}
