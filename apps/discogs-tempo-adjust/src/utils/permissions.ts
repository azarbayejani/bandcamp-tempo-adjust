import browser from "webextension-polyfill";

export const getRequiredPermissions: () => string[] = () => {
  return (
    browser.runtime
      .getManifest()
      .content_scripts?.reduce(
        (acc, { matches }) => [...acc, ...matches],
        [] as string[]
      ) || []
  );
};

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
