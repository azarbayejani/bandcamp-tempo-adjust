import browser from 'webextension-polyfill';

export const REQUIRED_PERMISSIONS = {
  origins: [
    'https://*.bandcamp.com/*',
    'http://*.bandcamp.com/*',
    'https://*.bcbits.com/stream/*',
  ],
};

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
