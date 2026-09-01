import { fakeBrowser } from '@webext-core/fake-browser';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import {
  createBrowserRatesStorage,
  fetchRates,
  loadRates,
  rangeStartFor,
  RATES_STORAGE_KEY,
  type RatesCache,
  type RatesStorage,
} from './exchangeRates';

const TODAY = '2024-03-20';

// Deliberately duplicated from the implementation: the spec pins the actual
// URLs requested from the network, not whatever constant the module holds.
const BASE_URL = 'https://api.frankfurter.dev/v1';

function memoryStorage(initial?: unknown): RatesStorage & { value: unknown } {
  const store = { value: initial } as RatesStorage & { value: unknown };
  store.get = async () => store.value;
  store.set = async (v) => {
    store.value = v;
  };
  return store;
}

function jsonResponse(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), { status });
}

const fetchMock = vi.fn<typeof fetch>();

beforeEach(() => {
  fetchMock.mockReset();
  vi.stubGlobal('fetch', fetchMock);
});

afterEach(() => {
  vi.unstubAllGlobals();
});

function requestedUrls() {
  return fetchMock.mock.calls.map(([input]) => String(input));
}

describe('rangeStartFor', () => {
  it('rounds down to January 1st of the purchase year', () => {
    expect(rangeStartFor('2019-06-02')).toBe('2019-01-01');
  });
});

describe('fetchRates', () => {
  it('requests the EUR-based time series with no base currency', async () => {
    fetchMock.mockResolvedValueOnce(
      jsonResponse({ rates: { '2024-03-15': { USD: 1.0892 } } })
    );
    await expect(fetchRates('2024-01-01', TODAY)).resolves.toEqual({
      '2024-03-15': { USD: 1.0892 },
    });
    expect(requestedUrls()).toEqual([`${BASE_URL}/2024-01-01..${TODAY}`]);
  });

  it('rejects on a non-OK response', async () => {
    fetchMock.mockResolvedValueOnce(jsonResponse({ message: 'nope' }, 500));
    await expect(fetchRates('2024-01-01', TODAY)).rejects.toThrow(/HTTP 500/);
  });

  it('rejects when the body has no rates', async () => {
    fetchMock.mockResolvedValueOnce(jsonResponse({ amount: 1 }));
    await expect(fetchRates('2024-01-01', TODAY)).rejects.toThrow(
      /did not include rates/
    );
  });
});

describe('loadRates', () => {
  const day15 = { '2024-03-15': { USD: 1.0892 } };
  const day19 = { '2024-03-19': { USD: 1.0871 } };

  it('fetches the full range and writes the cache when nothing is stored', async () => {
    const storage = memoryStorage();
    fetchMock.mockResolvedValueOnce(jsonResponse({ rates: day15 }));

    await expect(
      loadRates('2019-01-01', { storage, today: TODAY })
    ).resolves.toEqual(day15);

    expect(requestedUrls()).toEqual([`${BASE_URL}/2019-01-01..${TODAY}`]);
    expect(storage.value).toEqual({
      version: 1,
      startDate: '2019-01-01',
      // The frontier is the last day frankfurter actually returned, so a
      // not-yet-published business day is re-requested on the next load.
      endDate: '2024-03-15',
      rates: day15,
    });
  });

  it('fetches only the tail (from endDate inclusive) and merges it', async () => {
    const storage = memoryStorage({
      version: 1,
      startDate: '2019-01-01',
      endDate: '2024-03-19',
      rates: day15,
    });
    fetchMock.mockResolvedValueOnce(jsonResponse({ rates: day19 }));

    await expect(
      loadRates('2019-01-01', { storage, today: TODAY })
    ).resolves.toEqual({
      ...day15,
      ...day19,
    });

    expect(requestedUrls()).toEqual([`${BASE_URL}/2024-03-19..${TODAY}`]);
    expect(storage.value).toMatchObject({
      endDate: '2024-03-19',
      rates: { ...day15, ...day19 },
    });
  });

  it('makes no request when the cache already covers the range', async () => {
    const storage = memoryStorage({
      version: 1,
      startDate: '2019-01-01',
      endDate: TODAY,
      rates: day15,
    });

    await expect(
      loadRates('2020-01-01', { storage, today: TODAY })
    ).resolves.toEqual(day15);
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it('refetches everything when an earlier start is needed', async () => {
    const storage = memoryStorage({
      version: 1,
      startDate: '2022-01-01',
      endDate: TODAY,
      rates: day15,
    });
    fetchMock.mockResolvedValueOnce(jsonResponse({ rates: day19 }));

    await expect(
      loadRates('2019-01-01', { storage, today: TODAY })
    ).resolves.toEqual(day19);
    expect(requestedUrls()).toEqual([`${BASE_URL}/2019-01-01..${TODAY}`]);
    expect(storage.value).toMatchObject({
      startDate: '2019-01-01',
      endDate: '2024-03-19',
    });
  });

  const validCache: RatesCache = {
    version: 1,
    startDate: '2019-01-01',
    endDate: TODAY,
    rates: { '2024-03-15': { USD: 1.0892 } },
  };

  it.each([
    ['a different version', { ...validCache, version: 0 }],
    ['a missing rates table', { ...validCache, rates: undefined }],
    ['a non-object value', 'nope'],
  ])('treats a cache with %s as empty', async (_desc, stored) => {
    const storage = memoryStorage(stored);
    fetchMock.mockResolvedValueOnce(jsonResponse({ rates: day19 }));

    await expect(
      loadRates('2019-01-01', { storage, today: TODAY })
    ).resolves.toEqual(day19);
    expect(requestedUrls()).toEqual([`${BASE_URL}/2019-01-01..${TODAY}`]);
    expect(storage.value).toMatchObject({ version: 1 });
  });

  it('leaves the cache untouched when the fetch fails', async () => {
    const storage = memoryStorage();
    fetchMock.mockResolvedValueOnce(jsonResponse({}, 503));

    await expect(
      loadRates('2019-01-01', { storage, today: TODAY })
    ).rejects.toThrow(/HTTP 503/);
    expect(storage.value).toBeUndefined();
  });

  it('returns the cached rates when the refresh 404s (clock ahead of the server)', async () => {
    const cached: RatesCache = {
      version: 1,
      startDate: '2019-01-01',
      endDate: '2024-03-19',
      rates: day19,
    };
    const storage = memoryStorage(cached);
    fetchMock.mockResolvedValueOnce(
      jsonResponse({ message: 'not found' }, 404)
    );

    await expect(
      loadRates('2019-01-01', { storage, today: '2024-03-22' })
    ).resolves.toEqual(day19);
    expect(storage.value).toEqual(cached);
  });

  it('still rejects when the initial full fetch 404s', async () => {
    const storage = memoryStorage();
    fetchMock.mockResolvedValueOnce(
      jsonResponse({ message: 'not found' }, 404)
    );

    await expect(
      loadRates('2019-01-01', { storage, today: TODAY })
    ).rejects.toThrow(/HTTP 404/);
  });

  it('fetches fresh rates when reading the cache fails', async () => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});
    const storage = memoryStorage();
    storage.get = async () => {
      throw new Error('Extension context invalidated.');
    };
    fetchMock.mockResolvedValueOnce(jsonResponse({ rates: day15 }));

    await expect(
      loadRates('2019-01-01', { storage, today: TODAY })
    ).resolves.toEqual(day15);
    expect(warn).toHaveBeenCalledOnce();
    warn.mockRestore();
  });

  it('returns fetched rates even when writing the cache fails', async () => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});
    const storage = memoryStorage();
    storage.set = async () => {
      throw new Error('QUOTA_BYTES quota exceeded');
    };
    fetchMock.mockResolvedValueOnce(jsonResponse({ rates: day15 }));

    await expect(
      loadRates('2019-01-01', { storage, today: TODAY })
    ).resolves.toEqual(day15);
    expect(warn).toHaveBeenCalledOnce();
    warn.mockRestore();
  });
});

describe('createBrowserRatesStorage', () => {
  beforeEach(() => fakeBrowser.reset());

  it('round-trips through browser.storage.local under the namespaced key', async () => {
    const storage = createBrowserRatesStorage(fakeBrowser);
    const cache: RatesCache = {
      version: 1,
      startDate: '2019-01-01',
      endDate: TODAY,
      rates: {},
    };

    await expect(storage.get()).resolves.toBeUndefined();
    await storage.set(cache);
    await expect(storage.get()).resolves.toEqual(cache);
    await expect(
      fakeBrowser.storage.local.get(RATES_STORAGE_KEY)
    ).resolves.toEqual({
      [RATES_STORAGE_KEY]: cache,
    });
  });

  it('degrades to a no-op store when the storage API is unavailable', async () => {
    const storage = createBrowserRatesStorage(undefined);
    await expect(storage.get()).resolves.toBeUndefined();
    await expect(
      storage.set({
        version: 1,
        startDate: '2019-01-01',
        endDate: TODAY,
        rates: {},
      })
    ).resolves.toBeUndefined();
    await expect(storage.get()).resolves.toBeUndefined();
  });
});
