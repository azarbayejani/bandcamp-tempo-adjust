import browser from 'webextension-polyfill';

export type Settings = {
  // Detect BPM analyzes only the playing track rather than the whole
  // release. Off unless the user turns it on.
  lowDataMode?: boolean;
};

// Track BPMs share this storage area, keyed by track URL, so a plain
// word can't collide with them.
const SETTINGS_KEY = 'settings';

export async function getStoredSettings(): Promise<Settings> {
  if (!browser.storage?.local?.get) {
    return {};
  }
  const stored = (await browser.storage.local.get(SETTINGS_KEY)) as {
    [SETTINGS_KEY]?: Settings;
  };
  return stored[SETTINGS_KEY] ?? {};
}

export async function saveSettings(patch: Partial<Settings>) {
  const settings = { ...(await getStoredSettings()), ...patch };
  await browser.storage.local.set({ [SETTINGS_KEY]: settings });
  return settings;
}
