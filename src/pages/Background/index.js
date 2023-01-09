import browser from 'webextension-polyfill';

browser.runtime.onMessage.addListener((message, _, sendResponse) => {
  const { url } = message;
  return fetch(url)
    .then((r) => r.arrayBuffer())
    .then((buffer) =>
      JSON.stringify({ data: Array.from(new Uint8Array(buffer)) })
    );
});
