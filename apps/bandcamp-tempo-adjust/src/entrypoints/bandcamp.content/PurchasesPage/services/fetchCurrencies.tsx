import browser from 'webextension-polyfill';

export async function fetchCurrencies(): Promise<{ [key: string]: string }> {
  return browser.runtime.sendMessage({
    action: 'fetchCurrencies',
  });
}
