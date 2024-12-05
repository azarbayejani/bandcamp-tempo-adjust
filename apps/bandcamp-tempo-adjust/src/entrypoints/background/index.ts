import browser from 'webextension-polyfill';
import {
  hasAllPermissions,
  setupListeners,
} from '@tempo-adjust/permissions/background';

const optionsPageUrl = '/options.html';
const CHUNK_SIZE = 1024 * 1024 * 16;

export default defineBackground({
  persistent: false,
  type: 'module',

  main() {
    setupListeners();

    const ports: Record<string, browser.Runtime.Port> = {};

    browser.action.onClicked.addListener(() => {
      browser.tabs.create({ url: optionsPageUrl.toString() });
    });

    browser.runtime.onInstalled.addListener(async (details) => {
      if (details.reason === 'update' || details.reason === 'install') {
        const needsPermissions = !(await hasAllPermissions());
        if (needsPermissions) {
          browser.tabs.create({
            url: optionsPageUrl.toString(),
          });
        }
      }
    });

    interface OpenOptionsMessage {
      action: 'openOptions';
    }
    browser.runtime.onMessage.addListener(
      (message: OpenOptionsMessage, _sender) => {
        if (message.action === 'openOptions') {
          browser.tabs.create({ url: optionsPageUrl.toString() });
        }
      }
    );

    // You can't return true from listener or else firefox will expect 'sendResponse' to be called
    // https://github.com/mozilla/webextension-polyfill/issues/16#issuecomment-371355255
    browser.runtime.onMessage.addListener(async (message, _sender) => {
      if (message.action === 'hasAllPermissions') {
        return { hasAllPermissions: await hasAllPermissions() };
      }
    });

    browser.runtime.onConnect.addListener(async (port) => {
      ports[port.name] = port;
      const name = port.name;

      if (name.startsWith('AnalyzeAudio')) {
        const url = name.split('AnalyzeAudio#')[1];
        fetch(url)
          .then((r) => r.arrayBuffer())
          .then((buffer) => {
            ports[port.name].postMessage({ type: 'START' });
            for (let i = 0; i < buffer.byteLength; i += CHUNK_SIZE) {
              const chunk = buffer.slice(i, i + CHUNK_SIZE);
              ports[port.name].postMessage({
                type: 'DATA',
                startIndex: i,
                data: Array.from(new Uint8Array(chunk)),
              });
            }
            ports[port.name].postMessage({ type: 'END' });
          })
          .catch((reason) => {
            ports[port.name].postMessage({ type: 'ERROR', reason });
          });
      }
    });
  },
});
