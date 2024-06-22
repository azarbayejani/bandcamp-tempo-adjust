import browser from 'webextension-polyfill';

export default function hasAllPermissions() {
  return browser.permissions.contains({
    origins: [
      'https://*.bandcamp.com/*',
      'http://*.bandcamp.com/*',
      'https://*.bcbits.com/stream/*',
    ],
  });
}
