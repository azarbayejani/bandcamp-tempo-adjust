import browser from 'webextension-polyfill';

export async function hasAllPermissions() {
  const hasAllPermissionsResponse = (await browser.runtime.sendMessage({
    action: 'hasAllPermissions',
  })) as { hasAllPermissions: boolean };

  return hasAllPermissionsResponse.hasAllPermissions;
}
