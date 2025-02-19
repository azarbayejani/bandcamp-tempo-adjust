import browser from 'webextension-polyfill';

// Exports from this file can only be used in the background script or options page

type PermissionAction =
  | { action: 'hasAllPermissions' }
  | { action: 'requestAllPermissions' };

export function setupListeners() {
  browser.runtime.onMessage.addListener(
    async (message: PermissionAction, _sender) => {
      // You can't return true from listener or else firefox will expect 'sendResponse' to be called
      // https://github.com/mozilla/webextension-polyfill/issues/16#issuecomment-371355255
      if (message.action === 'hasAllPermissions') {
        return { hasAllPermissions: await hasAllPermissions() };
      }
      if (message.action === 'requestAllPermissions') {
        return { requestAllPermissions: await requestAllPermissions() };
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
