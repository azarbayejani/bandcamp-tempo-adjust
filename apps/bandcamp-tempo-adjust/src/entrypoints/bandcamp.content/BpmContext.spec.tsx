import { beforeEach, describe, expect, it, vi } from 'vitest';

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

  describe('loadCurrentBpm', () => {
    it('only analyzes the current track', async () => {
      const { result } = renderBpm();

      await act(() => result.current.loadCurrentBpm());

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

    it('opens the options page instead when permissions are missing', async () => {
      vi.mocked(hasAllPermissions).mockResolvedValue(false);
      const sendMessage = vi
        .spyOn(fakeBrowser.runtime, 'sendMessage')
        .mockResolvedValue(undefined);
      const { result } = renderBpm();

      await act(() => result.current.loadCurrentBpm());

      expect(sendMessage).toHaveBeenCalledWith({ action: 'openOptions' });
      expect(analyzeAudio).not.toHaveBeenCalled();
    });

    it('does nothing when no track is playing', async () => {
      act(() => useAudio.getState().setCurrTrackUrl(undefined));
      const { result } = renderBpm();

      await act(() => result.current.loadCurrentBpm());

      expect(hasAllPermissions).not.toHaveBeenCalled();
      expect(analyzeAudio).not.toHaveBeenCalled();
    });
  });

  describe('loadBpms', () => {
    it('analyzes every track without a bpm', async () => {
      const { result } = renderBpm({
        ...album(),
        '/track/three': { ...track('/track/three', 3), bpm: 90 },
      });

      await act(() => result.current.loadBpms());

      expect(analyzeAudio).toHaveBeenCalledTimes(2);
      expect(analyzeAudio).toHaveBeenCalledWith('/track/one.mp3');
      expect(analyzeAudio).toHaveBeenCalledWith('/track/two.mp3');
    });
  });
});
