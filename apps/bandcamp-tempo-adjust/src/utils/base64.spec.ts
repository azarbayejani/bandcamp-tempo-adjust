import { describe, expect, it } from 'vitest';

import { base64ToBytes, bytesToBase64 } from './base64';

describe('base64', () => {
  it('encodes bytes as base64', () => {
    expect(bytesToBase64(new Uint8Array([0xff, 0xfb, 0x90, 0x44]))).toBe(
      '//uQRA=='
    );
  });

  it('round-trips every byte value across several batches', () => {
    const bytes = Uint8Array.from({ length: 100_000 }, (_, i) => i % 256);

    expect(base64ToBytes(bytesToBase64(bytes))).toEqual(bytes);
  });

  it('round-trips an empty array', () => {
    expect(base64ToBytes(bytesToBase64(new Uint8Array()))).toEqual(
      new Uint8Array()
    );
  });
});
