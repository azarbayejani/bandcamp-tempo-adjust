import browser from 'webextension-polyfill';

export async function hasFrankfurterPermission(): Promise<boolean> {
  return browser.runtime.sendMessage({ action: 'hasFrankfurterPermission' });
}
