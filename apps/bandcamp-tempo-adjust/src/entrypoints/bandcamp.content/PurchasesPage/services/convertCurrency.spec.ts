import { describe, expect, it } from 'vitest';

import { convert, type RatesTable } from './convertCurrency';

// Verbatim rows from `GET https://api.frankfurter.dev/v1/2024-03-14..2024-03-15`
// (EUR base), trimmed to the currencies exercised below. 2024-03-15 is a Friday.
const march15 = {
  AUD: 1.6579,
  CAD: 1.4731,
  GBP: 0.8541,
  JPY: 162.03,
  USD: 1.0892,
};

const rates: RatesTable = {
  '2024-03-14': {
    AUD: 1.6529,
    CAD: 1.4725,
    GBP: 0.8542,
    JPY: 161.7,
    USD: 1.0925,
  },
  '2024-03-15': march15,
};

describe('convert', () => {
  it('computes exact cross rates through EUR', () => {
    const row = march15;
    expect(convert(1, 'USD', 'GBP', rates, '2024-03-15')).toBeCloseTo(
      row.GBP / row.USD,
      10
    );
    expect(convert(1, 'CAD', 'AUD', rates, '2024-03-15')).toBeCloseTo(
      row.AUD / row.CAD,
      10
    );
    expect(convert(1, 'GBP', 'EUR', rates, '2024-03-15')).toBeCloseTo(
      1 / row.GBP,
      10
    );
    expect(convert(1, 'EUR', 'CAD', rates, '2024-03-15')).toBe(row.CAD);
    expect(convert(250, 'USD', 'JPY', rates, '2024-03-15')).toBeCloseTo(
      (250 * row.JPY) / row.USD,
      10
    );
  });

  // Values published by frankfurter.dev for `/v1/2024-03-15?from=A&to=B`,
  // which it rounds to 5 significant figures.
  it.each([
    ['USD', 'GBP', 0.78415, 4],
    ['USD', 'JPY', 148.76, 2],
    ['GBP', 'EUR', 1.1708, 4],
    ['JPY', 'USD', 0.00672, 5],
    ['EUR', 'CAD', 1.4731, 10],
    ['CAD', 'AUD', 1.1254, 3],
  ])('agrees with frankfurter for %s→%s', (from, to, published, digits) => {
    expect(convert(1, from, to, rates, '2024-03-15')).toBeCloseTo(
      published,
      digits
    );
  });

  it('uses the previous business day for weekend dates', () => {
    const friday = convert(1, 'USD', 'GBP', rates, '2024-03-15');
    expect(convert(1, 'USD', 'GBP', rates, '2024-03-16')).toBe(friday); // Sat
    expect(convert(1, 'USD', 'GBP', rates, '2024-03-17')).toBe(friday); // Sun
  });

  it('walks back across month and year boundaries', () => {
    const sparse: RatesTable = {
      '2023-12-29': { USD: 1.1039 },
      '2024-02-29': { USD: 1.0817 },
    };
    expect(convert(1, 'EUR', 'USD', sparse, '2024-01-02')).toBe(1.1039);
    expect(convert(1, 'EUR', 'USD', sparse, '2024-03-01')).toBe(1.0817);
  });

  it('looks back at most 10 days', () => {
    const friday = convert(1, 'USD', 'GBP', rates, '2024-03-15');
    expect(convert(1, 'USD', 'GBP', rates, '2024-03-25')).toBe(friday);
    expect(() => convert(1, 'USD', 'GBP', rates, '2024-03-26')).toThrow(
      /No exchange rates available .* 2024-03-26/
    );
  });

  it('throws when the table has no data on or before the date', () => {
    expect(() => convert(1, 'USD', 'GBP', rates, '2024-03-13')).toThrow(
      /No exchange rates available/
    );
  });

  it('is the identity when from and to match, even for unknown currencies', () => {
    expect(convert(42, 'XYZ', 'XYZ', {}, '2024-03-15')).toBe(42);
  });

  it('throws for a currency not in the table', () => {
    expect(() => convert(1, 'XYZ', 'USD', rates, '2024-03-15')).toThrow(/XYZ/);
    expect(() => convert(1, 'USD', 'XYZ', rates, '2024-03-15')).toThrow(/XYZ/);
  });
});
