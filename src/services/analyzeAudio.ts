import { analyze } from 'web-audio-beat-detector';

// fallback for cross-browser Web Audio API BaseAudioContext
let audioContext = new AudioContext();

// note that this function must be initiated from a user action!
export async function analyzeAudio(url: string) {
  const buffer = await fetch(url).then((r) => r.arrayBuffer());
  const decodedAudio = await audioContext.decodeAudioData(buffer);

  const bpm = await analyze(decodedAudio);
  return bpm;
}
