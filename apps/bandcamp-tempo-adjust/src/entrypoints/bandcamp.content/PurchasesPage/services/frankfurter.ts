/**
 * Transport for the frankfurter.dev API — shared by the exchange-rate
 * time-series (`exchangeRates.ts`) and the currency list
 * (`fetchCurrencies.ts`).
 */

const FRANKFURTER_BASE_URL = 'https://api.frankfurter.dev/v1';

export class FrankfurterHttpError extends Error {
  constructor(public readonly status: number) {
    super(`frankfurter.dev responded with HTTP ${status}`);
  }
}

/** Fetch a frankfurter.dev endpoint, rejecting on a non-OK response. */
export async function fetchFrankfurter<T>(path: string): Promise<T> {
  const resp = await fetch(`${FRANKFURTER_BASE_URL}${path}`);
  if (!resp.ok) {
    throw new FrankfurterHttpError(resp.status);
  }
  return (await resp.json()) as T;
}
