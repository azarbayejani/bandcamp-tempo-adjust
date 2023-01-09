import browser from 'webextension-polyfill';

const CHUNK_SIZE = 1024 * 1024 * 16;

const ports = {};

browser.runtime.onConnect.addListener((port) => {
  ports[port.name] = port;
  const url = port.name;
  fetch(url)
    .then((r) => r.arrayBuffer())
    .then((buffer) => {
      console.log(buffer.byteLength);
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
    });
});
