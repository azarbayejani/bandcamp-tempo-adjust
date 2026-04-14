import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import {
  handleFetchCurrencies,
  handleFetchConversionRatesForDate,
} from './frankfurterHandlers';

function mockFetch(json: unknown) {
  return vi.fn().mockResolvedValue({
    json: () => Promise.resolve(json),
  });
}

describe('handleFetchCurrencies', () => {
  beforeEach(() => {
    vi.stubGlobal(
      'fetch',
      mockFetch({ USD: 'US Dollar', EUR: 'Euro', GBP: 'British Pound' })
    );
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('fetches from the correct URL', async () => {
    await handleFetchCurrencies();
    expect(fetch).toHaveBeenCalledWith(
      'https://api.frankfurter.app/currencies'
    );
  });

  it('returns the parsed JSON response', async () => {
    const result = await handleFetchCurrencies();
    expect(result).toEqual({
      USD: 'US Dollar',
      EUR: 'Euro',
      GBP: 'British Pound',
    });
  });
});

describe('handleFetchConversionRatesForDate', () => {
  beforeEach(() => {
    vi.stubGlobal(
      'fetch',
      mockFetch({ rates: { EUR: 0.92, GBP: 0.79 } })
    );
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('fetches from the correct URL with date and currency', async () => {
    await handleFetchConversionRatesForDate('2024-01-15', 'USD');
    expect(fetch).toHaveBeenCalledWith(
      'https://api.frankfurter.app/2024-01-15?from=USD'
    );
  });

  it('returns the date and rates from the response', async () => {
    const result = await handleFetchConversionRatesForDate('2024-01-15', 'USD');
    expect(result).toEqual({
      date: '2024-01-15',
      rates: { EUR: 0.92, GBP: 0.79 },
    });
  });
});
