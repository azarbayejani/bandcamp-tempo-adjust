import browser from 'webextension-polyfill';

// Exports from this file can only be used in the content script
// DO NOT use from the options page, background script, or popup

export async function requestAllPermissions() {
  await browser.runtime.sendMessage({ action: 'requestAllPermissions' });
}

export async function hasAllPermissions() {
  return (await browser.runtime.sendMessage({
    action: 'hasAllPermissions',
  })) as { hasAllPermissions: boolean };
}
