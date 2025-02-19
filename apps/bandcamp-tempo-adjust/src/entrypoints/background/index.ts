import browser from 'webextension-polyfill';
import {
  hasAllPermissions,
  setupListeners,
} from '@tempo-adjust/permissions/background';
import { bytesToBase64 } from '../../utils/base64';
import { fetchAudioForAnalysis } from '../../utils/fetchAudioForAnalysis';

const optionsPageUrl = '/options.html';
const CHUNK_SIZE = 1024 * 1024;

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


    browser.runtime.onConnect.addListener(async (port) => {
      ports[port.name] = port;
      const name = port.name;

      port.onDisconnect.addListener(() => delete ports[port.name]);

      if (name.startsWith('AnalyzeAudio')) {
        const url = name.split('AnalyzeAudio#')[1];
        if (!url) {
          return;
        }
        fetchAudioForAnalysis(url)
          .then((bytes) => {
            port.postMessage({ type: 'START' });
            for (let i = 0; i < bytes.byteLength; i += CHUNK_SIZE) {
              port.postMessage({
                type: 'DATA',
                startIndex: i,
                data: bytesToBase64(bytes.subarray(i, i + CHUNK_SIZE)),
              });
            }
            port.postMessage({ type: 'END' });
          })
          .catch((reason) => {
            port.postMessage({
              type: 'ERROR',
              reason: reason instanceof Error ? reason.message : String(reason),
            });
          });
      }
    });
  },
});
