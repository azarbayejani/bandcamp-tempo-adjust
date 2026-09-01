import { fetchFrankfurter } from './frankfurter';

export async function fetchCurrencies(): Promise<{ [key: string]: string }> {
  return fetchFrankfurter<{ [key: string]: string }>('/currencies');
}
