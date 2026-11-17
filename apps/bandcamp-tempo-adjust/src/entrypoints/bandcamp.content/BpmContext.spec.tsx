import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { act, renderHook, waitFor } from '@testing-library/react';
import { fakeBrowser } from '@webext-core/fake-browser';

import { BpmProvider, useBpm } from './BpmContext';
import useAudio from './AudioStore';
import { analyzeAudio } from '../../utils/analyzeAudio';
import { hasAllPermissions } from '../../utils/hasAllPermissions';
import type { TrackInfoByUrl } from '~/types';

// The polyfill alias has no default export, so BpmContext's `browser`
// would be undefined without this. The alias resolves fake-browser to
// this same mocked module, so its named export has to be kept too.
vi.mock('webextension-polyfill', async (importOriginal) => {
  const { fakeBrowser } = await importOriginal<
    typeof import('@webext-core/fake-browser')
  >();
  return { fakeBrowser, default: fakeBrowser };
});
vi.mock('../../utils/analyzeAudio', () => ({ analyzeAudio: vi.fn() }));
vi.mock('../../utils/hasAllPermissions', () => ({
  hasAllPermissions: vi.fn(),
}));

const track = (url: string, trackNumber: number) => ({
  url,
  trackNumber,
  audioPath: `${url}.mp3`,
  loading: false,
  error: false,
});

const album = (): TrackInfoByUrl => ({
  '/track/one': track('/track/one', 1),
  '/track/two': track('/track/two', 2),
});

const renderBpm = (initialTrackInfoStore = album()) =>
  renderHook(() => useBpm(), {
    wrapper: ({ children }) => (
      <BpmProvider initialTrackInfoStore={initialTrackInfoStore}>
        {children}
      </BpmProvider>
    ),
  });

describe('BpmContext', () => {
  beforeEach(() => {
    fakeBrowser.reset();
    vi.mocked(analyzeAudio).mockReset().mockResolvedValue(120);
    vi.mocked(hasAllPermissions).mockReset().mockResolvedValue(true);
    act(() => useAudio.getState().setCurrTrackUrl('/track/two'));
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe('detectBpm', () => {
    it('only analyzes the current track in low data mode', async () => {
      await fakeBrowser.storage.local.set({
        settings: { lowDataMode: true },
      });
      const { result } = renderBpm();

      await act(() => result.current.detectBpm());

      expect(analyzeAudio).toHaveBeenCalledTimes(1);
      expect(analyzeAudio).toHaveBeenCalledWith('/track/two.mp3');
      await waitFor(() => {
        expect(
          result.current.trackInfoState.trackInfoStore['/track/two']?.bpm
        ).toBe(120);
      });
      const otherTrack =
        result.current.trackInfoState.trackInfoStore['/track/one'];
      expect(otherTrack?.bpm).toBeUndefined();
      expect(otherTrack?.loading).toBe(false);
    });

    it('analyzes every track without a bpm by default', async () => {
      const { result } = renderBpm({
        ...album(),
        '/track/three': { ...track('/track/three', 3), bpm: 90 },
      });

      await act(() => result.current.detectBpm());

      expect(analyzeAudio).toHaveBeenCalledTimes(2);
      expect(analyzeAudio).toHaveBeenCalledWith('/track/one.mp3');
      expect(analyzeAudio).toHaveBeenCalledWith('/track/two.mp3');
    });

    it('starts with the playing track and paces the rest on phones', async () => {
      vi.spyOn(navigator, 'userAgent', 'get').mockReturnValue(
        'Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X) Mobile/15E148'
      );
      const finish: Array<(bpm: number) => void> = [];
      vi.mocked(analyzeAudio).mockImplementation(
        () => new Promise<number>((resolve) => finish.push(resolve))
      );
      const { result } = renderBpm({
        ...album(),
        '/track/three': track('/track/three', 3),
        '/track/four': track('/track/four', 4),
      });

      await act(() => result.current.detectBpm());

      // Every track shows as loading, but only two are in flight.
      expect(
        Object.values(result.current.trackInfoState.trackInfoStore).every(
          ({ loading }) => loading
        )
      ).toBe(true);
      expect(vi.mocked(analyzeAudio).mock.calls).toEqual([
        ['/track/two.mp3'],
        ['/track/one.mp3'],
      ]);

      await act(async () => finish[0]?.(120));

      expect(analyzeAudio).toHaveBeenCalledTimes(3);

      await act(async () => finish.slice(1).forEach((done) => done(120)));
      await act(async () => finish.slice(3).forEach((done) => done(120)));

      expect(analyzeAudio).toHaveBeenCalledTimes(4);
      expect(
        Object.values(result.current.trackInfoState.trackInfoStore).every(
          ({ bpm }) => bpm === 120
        )
      ).toBe(true);
    });

    it('analyzes every track by default on phones too', async () => {
      vi.spyOn(navigator, 'userAgent', 'get').mockReturnValue(
        'Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X) Mobile/15E148'
      );
      const { result } = renderBpm();

      await act(() => result.current.detectBpm());

      expect(analyzeAudio).toHaveBeenCalledTimes(2);
    });

    it('opens the options page instead when permissions are missing', async () => {
      vi.mocked(hasAllPermissions).mockResolvedValue(false);
      const sendMessage = vi
        .spyOn(fakeBrowser.runtime, 'sendMessage')
        .mockResolvedValue(undefined);
      const { result } = renderBpm();

      await act(() => result.current.detectBpm());

      expect(sendMessage).toHaveBeenCalledWith({ action: 'openOptions' });
      expect(analyzeAudio).not.toHaveBeenCalled();
    });

    it('analyzes nothing in low data mode when no track is playing', async () => {
      await fakeBrowser.storage.local.set({
        settings: { lowDataMode: true },
      });
      act(() => useAudio.getState().setCurrTrackUrl(undefined));
      const { result } = renderBpm();

      await act(() => result.current.detectBpm());

      expect(analyzeAudio).not.toHaveBeenCalled();
    });
  });

  describe('openSettings', () => {
    it('asks the background to open the options page', () => {
      const sendMessage = vi
        .spyOn(fakeBrowser.runtime, 'sendMessage')
        .mockResolvedValue(undefined);
      const { result } = renderBpm();

      result.current.openSettings();

      expect(sendMessage).toHaveBeenCalledWith({
        action: 'openOptions',
        section: 'settings',
      });
    });
  });
});
