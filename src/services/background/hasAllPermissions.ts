import browser from 'webextension-polyfill';

// this can only be used in a background script or in the options page
export function hasAllPermissions() {
  return browser.permissions.contains({
    origins: [
      'https://*.bandcamp.com/*',
      'http://*.bandcamp.com/*',
      'https://*.bcbits.com/stream/*',
    ],
  });
}
