import browser from 'webextension-polyfill';
import { hasAllPermissions } from '@tempo-adjust/permissions/background';

const optionsUrl = '/options.html';

export default defineBackground({
  persistent: false,
  type: 'module',
  main() {
    browser.action.onClicked.addListener(() => {
      browser.tabs.create({ url: optionsUrl });
    });

    browser.runtime.onInstalled.addListener(async (details) => {
      if (details.reason === 'update' || details.reason === 'install') {
        const needsPermissions = !(await hasAllPermissions());
        if (needsPermissions) {
          browser.tabs.create({
            url: optionsUrl,
          });
        }
      }
    });
  },
});
