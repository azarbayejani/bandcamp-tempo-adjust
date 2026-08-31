import { fetchFrankfurter } from './exchangeRates';

export async function fetchCurrencies(): Promise<{ [key: string]: string }> {
  return fetchFrankfurter<{ [key: string]: string }>('/currencies');
}
