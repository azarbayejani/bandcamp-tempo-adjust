import browser from 'webextension-polyfill';

export default async function getConversionRatesForDate(
  date: string,
  currency: string
) {
  return browser.runtime.sendMessage({
    action: 'fetchConversionRatesForDate',
    date,
    currency,
  });
}
