import { afterEach, describe, expect, it, vi } from 'vitest';

import {
  fetchAudioForAnalysis,
  MAX_ANALYSIS_BYTES,
} from './fetchAudioForAnalysis';

const file = (byteLength: number) =>
  Uint8Array.from({ length: byteLength }, (_, i) => i % 256);

// Serves `bytes` the way Bandcamp's stream host does, honoring Range.
const serveWithRanges = (bytes: Uint8Array) =>
  vi.fn(async (_url: string, init?: RequestInit) => {
    const range = new Headers(init?.headers).get('Range') ?? '';
    const [, from, to] = /bytes=(\d+)-(\d+)/.exec(range) ?? [];
    const start = Number(from);
    const end = Math.min(Number(to), bytes.length - 1);
    return new Response(bytes.slice(start, end + 1), {
      status: 206,
      headers: { 'Content-Range': `bytes ${start}-${end}/${bytes.length}` },
    });
  });

describe('fetchAudioForAnalysis', () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('fetches a short track whole', async () => {
    const track = file(1000);
    vi.stubGlobal('fetch', serveWithRanges(track));

    const bytes = await fetchAudioForAnalysis('https://t4.bcbits.com/a');

    expect(bytes).toEqual(track);
  });

  it('asks for no more than the analysis limit', async () => {
    const fetchMock = serveWithRanges(file(MAX_ANALYSIS_BYTES + 1000));
    vi.stubGlobal('fetch', fetchMock);

    const bytes = await fetchAudioForAnalysis('https://t4.bcbits.com/a');

    expect(fetchMock).toHaveBeenCalledExactlyOnceWith(
      'https://t4.bcbits.com/a',
      { headers: { Range: `bytes=0-${MAX_ANALYSIS_BYTES - 1}` } }
    );
    expect(bytes.length).toBe(MAX_ANALYSIS_BYTES);
  });

  it('truncates a long track when the server ignores Range', async () => {
    const track = file(MAX_ANALYSIS_BYTES + 1000);
    vi.stubGlobal(
      'fetch',
      vi.fn(async () => new Response(track))
    );

    const bytes = await fetchAudioForAnalysis('https://t4.bcbits.com/a');

    expect(bytes.length).toBe(MAX_ANALYSIS_BYTES);
    expect(bytes.subarray(0, 1000)).toEqual(track.subarray(0, 1000));
  });

  it('rejects when the server answers with an error', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn(async () => new Response('gone', { status: 410 }))
    );

    await expect(
      fetchAudioForAnalysis('https://t4.bcbits.com/a')
    ).rejects.toThrow('HTTP 410');
  });
});
