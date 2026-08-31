import { describe, expect, it } from 'vitest';
import type { Purchase } from './services/GetItemsAPI';
import { convertPurchases, earliestPaymentDate } from './usePurchases';

function purchase(overrides: Partial<Purchase> = {}): Purchase {
  return {
    paymentDate: '2024-03-15',
    currency: 'EUR',
    unitPrice: 10,
    quantity: 1,
    shipping: 0,
    totalPrice: 10,
    tax: 0,
    ...overrides,
  };
}

describe('earliestPaymentDate', () => {
  it('returns the earliest payment date', () => {
    expect(
      earliestPaymentDate([
        purchase({ paymentDate: '2022-06-01' }),
        purchase({ paymentDate: '2019-02-03' }),
        purchase({ paymentDate: '2024-01-01' }),
      ])
    ).toBe('2019-02-03');
  });

  it('returns undefined for an empty list, which disables the rates query', () => {
    expect(earliestPaymentDate([])).toBeUndefined();
  });
});

describe('convertPurchases', () => {
  const rates = { '2024-03-15': { USD: 2 } };

  it('converts each purchase into the display currency', () => {
    const result = convertPurchases([purchase()], rates, 'USD');
    expect(result.failures).toEqual([]);
    expect(result.purchases).toHaveLength(1);
    expect(result.purchases[0]).toMatchObject({
      totalPriceInLocalCurrency: 20,
      localCurrency: 'USD',
    });
  });

  it('converts an empty list with an empty rates table', () => {
    expect(convertPurchases([], {}, 'USD')).toEqual({
      purchases: [],
      failures: [],
    });
  });

  it('collects per-purchase failures instead of discarding the rest', () => {
    const unconvertible = purchase({ currency: 'ISK' });
    const result = convertPurchases([unconvertible, purchase()], rates, 'USD');
    expect(result.purchases).toHaveLength(1);
    expect(result.failures).toHaveLength(1);
    expect(result.failures[0].purchase).toBe(unconvertible);
    expect(result.failures[0].error.message).toMatch(/ISK/);
  });
});
