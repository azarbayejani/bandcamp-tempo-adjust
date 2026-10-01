// String.fromCharCode takes its input as arguments, so feed it in pieces
// small enough to stay under the engine's argument limit.
const CHAR_CODE_BATCH = 0x8000;

export function bytesToBase64(bytes: Uint8Array) {
  let binary = '';
  for (let i = 0; i < bytes.length; i += CHAR_CODE_BATCH) {
    binary += String.fromCharCode(...bytes.subarray(i, i + CHAR_CODE_BATCH));
  }
  return btoa(binary);
}

export function base64ToBytes(base64: string) {
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i += 1) {
    bytes[i] = binary.charCodeAt(i);
  }
  return bytes;
}
