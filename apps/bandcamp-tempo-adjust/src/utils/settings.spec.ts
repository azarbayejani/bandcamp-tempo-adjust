import { beforeEach, describe, expect, it, vi } from 'vitest';

import { fakeBrowser } from '@webext-core/fake-browser';

import { getStoredSettings, saveSettings } from './settings';

// The polyfill alias has no default export, so the module's `browser`
// would be undefined without this. The alias resolves fake-browser to
// this same mocked module, so its named export has to be kept too.
vi.mock('webextension-polyfill', async (importOriginal) => {
  const { fakeBrowser } = await importOriginal<
    typeof import('@webext-core/fake-browser')
  >();
  return { fakeBrowser, default: fakeBrowser };
});

describe('settings', () => {
  beforeEach(() => {
    fakeBrowser.reset();
  });

  it('has no stored settings until something is saved', async () => {
    expect(await getStoredSettings()).toEqual({});
  });

  it('reads back what was saved', async () => {
    await saveSettings({ lowDataMode: true });

    expect(await getStoredSettings()).toEqual({ lowDataMode: true });
  });

  it('keeps other stored settings when saving one', async () => {
    await fakeBrowser.storage.local.set({ settings: { other: 'kept' } });

    await saveSettings({ lowDataMode: true });

    expect(await getStoredSettings()).toEqual({
      other: 'kept',
      lowDataMode: true,
    });
  });
});
