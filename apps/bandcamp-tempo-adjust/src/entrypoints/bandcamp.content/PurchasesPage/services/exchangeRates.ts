import browser from 'webextension-polyfill';
import type { RatesTable } from './convertCurrency';
import { formatDate } from './formatDate';

/**
 * Historical exchange rates from frankfurter.dev, fetched as a single
 * EUR-based time series and cached in `browser.storage.local`.
 *
 * Privacy note: the only thing that leaves the browser is a date range
 * (rounded down to a year boundary) — no currency, no purchase dates, no
 * amounts. Cross rates are computed locally; see `convertCurrency.ts`.
 */

export const RATES_STORAGE_KEY = 'tempoAdjust.exchangeRates';
export const FRANKFURTER_BASE_URL = 'https://api.frankfurter.dev/v1';
const CACHE_VERSION = 1;

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

export interface RatesCache {
  version: typeof CACHE_VERSION;
  /** `YYYY-MM-DD` — earliest date requested from frankfurter. */
  startDate: string;
  /** `YYYY-MM-DD` — latest date requested from frankfurter. */
  endDate: string;
  rates: RatesTable;
}

export interface RatesStorage {
  get(): Promise<unknown>;
  set(value: RatesCache): Promise<void>;
}

/**
 * The slice of `browser.storage.local` this module uses. Typed structurally
 * rather than as the polyfill's `Browser` so the real browser and
 * `@webext-core/fake-browser` both fit — they currently resolve different
 * copies of `@types/webextension-polyfill` (0.9.2 vs 0.12.5) whose `Browser`
 * types are incompatible on members we never touch.
 */
interface StorageAreaLike {
  get(key: string): Promise<Record<string, unknown>>;
  set(items: Record<string, unknown>): Promise<void>;
}

/**
 * Storage backed by `browser.storage.local`. Falls back to a no-op store when
 * no browser object is available (under vitest, `webextension-polyfill` is
 * aliased to a module with no default export, so `browser` is undefined).
 */
export function createBrowserRatesStorage(
  browserLike: { storage: { local: StorageAreaLike } } | undefined = browser
): RatesStorage {
  const local = browserLike?.storage.local;
  if (!local) {
    return { get: async () => undefined, set: async () => {} };
  }
  return {
    get: async () => (await local.get(RATES_STORAGE_KEY))[RATES_STORAGE_KEY],
    set: (value) => local.set({ [RATES_STORAGE_KEY]: value }),
  };
}

export function isRatesCache(value: unknown): value is RatesCache {
  if (typeof value !== 'object' || value === null) return false;
  const candidate = value as Partial<RatesCache>;
  return (
    candidate.version === CACHE_VERSION &&
    typeof candidate.startDate === 'string' &&
    typeof candidate.endDate === 'string' &&
    typeof candidate.rates === 'object' &&
    candidate.rates !== null
  );
}

/** Round the requested range start down to January 1st of that year. */
export function rangeStartFor(earliestPurchaseDate: string): string {
  return `${earliestPurchaseDate.slice(0, 4)}-01-01`;
}

export async function fetchRates(
  start: string,
  end: string
): Promise<RatesTable> {
  const body = await fetchFrankfurter<{ rates?: unknown }>(`/${start}..${end}`);
  if (typeof body.rates !== 'object' || body.rates === null) {
    throw new Error('frankfurter.dev response did not include rates');
  }
  return body.rates as RatesTable;
}

/**
 * Return EUR-based rates covering `neededStart..today`, fetching only what
 * the cache is missing.
 *
 * Incremental refreshes re-request from the cached `endDate` *inclusive*:
 * the ECB publishes around 16:00 CET, so a fetch made earlier in the day
 * won't include that day yet. The one-day overlap is harmless (it's a merge)
 * and self-heals on the next load.
 */
export async function loadRates(
  neededStart: string,
  {
    storage = createBrowserRatesStorage(),
    today = formatDate(new Date()),
  }: { storage?: RatesStorage; today?: string } = {}
): Promise<RatesTable> {
  const stored = await storage.get();
  const cache = isRatesCache(stored) ? stored : undefined;

  if (!cache || neededStart < cache.startDate) {
    const rates = await fetchRates(neededStart, today);
    await storage.set({
      version: CACHE_VERSION,
      startDate: neededStart,
      endDate: today,
      rates,
    });
    return rates;
  }

  if (today > cache.endDate) {
    const fresh = await fetchRates(cache.endDate, today);
    const next: RatesCache = {
      ...cache,
      endDate: today,
      rates: { ...cache.rates, ...fresh },
    };
    await storage.set(next);
    return next.rates;
  }

  return cache.rates;
}
