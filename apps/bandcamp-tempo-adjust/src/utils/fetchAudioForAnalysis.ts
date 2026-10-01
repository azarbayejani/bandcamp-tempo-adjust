// Bandcamp streams are 128 kbps MP3s, so file size tracks duration.
const BYTES_PER_SECOND = 128_000 / 8;

// Only the first ten minutes of a track are analyzed: decoding a whole
// 20-minute track runs an iPhone's page out of memory and crashes it.
export const MAX_ANALYSIS_BYTES = 10 * 60 * BYTES_PER_SECOND;

/**
 * Fetches the audio to run beat detection on: the whole track, or its first
 * MAX_ANALYSIS_BYTES if it is longer than that.
 */
export async function fetchAudioForAnalysis(url: string) {
  const response = await fetch(url, {
    headers: { Range: `bytes=0-${MAX_ANALYSIS_BYTES - 1}` },
  });
  if (!response.ok) {
    throw new Error(`Fetching audio failed with HTTP ${response.status}`);
  }
  // A server that ignores Range answers 200 with the whole file.
  const bytes = new Uint8Array(await response.arrayBuffer());
  return bytes.subarray(0, MAX_ANALYSIS_BYTES);
}
