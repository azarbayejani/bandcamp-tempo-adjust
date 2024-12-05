import browser from 'webextension-polyfill';

type PermissionAction =
  | { action: 'hasAllPermissions' }
  | { action: 'requestAllPermissions' };

export function setupListeners() {
  browser.runtime.onMessage.addListener(
    (message: PermissionAction, _sender) => {
      if (message.action === 'hasAllPermissions') {
        return hasAllPermissions();
      }
      if (message.action === 'requestAllPermissions') {
        return requestAllPermissions();
      }
    }
  );
}

export function requestAllPermissions() {
  return browser.permissions.request({
    origins: getRequiredPermissions(),
  });
}

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

// this can only be used in a background script or in the options page
export function hasAllPermissions() {
  return browser.permissions.contains({
    origins: getRequiredPermissions(),
  });
}
