import browser from 'webextension-polyfill';

export async function requestAllPermissions() {
  await browser.runtime.sendMessage({ action: 'requestAllPermissions' });
}

export async function hasAllPermissions() {
  return (await browser.runtime.sendMessage({
    action: 'hasAllPermissions',
  })) as { hasAllPermissions: boolean };
}
