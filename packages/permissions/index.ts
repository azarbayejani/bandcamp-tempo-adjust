import browser from 'webextension-polyfill';

export const getRequiredPermissions: () => string[] = () => {
  const manifest = browser.runtime.getManifest();
  const contentScriptMatches =
    manifest.content_scripts?.reduce(
      (acc, { matches }) => [...acc, ...matches],
      [] as string[]
    ) || [];
  const hostPermissionOrigins =
    browser.runtime.getManifest().host_permissions || [];

  return [...contentScriptMatches, ...hostPermissionOrigins];
};

const FRANKFURTER_ORIGIN = 'https://api.frankfurter.app/*';

// this can only be used in a background script or in the options page
export function hasAllPermissions() {
  return browser.permissions.contains({
    origins: getRequiredPermissions(),
  });
}

export function requestAllPermissions() {
  return browser.permissions.request({
    origins: getRequiredPermissions(),
  });
}

export function hasFrankfurterPermission() {
  return browser.permissions.contains({ origins: [FRANKFURTER_ORIGIN] });
}

export function requestFrankfurterPermission() {
  return browser.permissions.request({ origins: [FRANKFURTER_ORIGIN] });
}
