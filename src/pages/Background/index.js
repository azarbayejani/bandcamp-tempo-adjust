import browser from 'webextension-polyfill';
import hasAllPermissions from '../../services/hasAllPermissions';

const CHUNK_SIZE = 1024 * 1024 * 16;

const ports = {};

browser.runtime.onInstalled.addListener(async (details) => {
  if (details.reason === 'update' || details.reason === 'install') {
    const needsPermissions = !(await hasAllPermissions());
    if (needsPermissions) {
      browser.tabs.create({
        url: '/options.html',
      });
    }
  }
});

browser.runtime.onMessage.addListener((message) => {
  if (message === 'openOptions') {
    browser.tabs.create({ url: '/options.html' });
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
  } else if (name === 'HasAllPermissions') {
    ports[name].postMessage(await hasAllPermissions());
  }
});
