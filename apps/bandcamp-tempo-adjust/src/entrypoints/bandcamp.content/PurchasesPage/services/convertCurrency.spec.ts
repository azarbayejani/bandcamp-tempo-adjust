import { describe, expect, it } from 'vitest';

import {
  convert,
  eurRate,
  nearestPriorRateDay,
  previousDay,
  type RatesTable,
} from './convertCurrency';

// Verbatim rows from `GET https://api.frankfurter.dev/v1/2024-03-14..2024-03-15`
// (EUR base), trimmed to the currencies exercised below. 2024-03-15 is a Friday.
const rates: RatesTable = {
  '2024-03-14': {
    AUD: 1.6529,
    CAD: 1.4725,
    GBP: 0.8542,
    JPY: 161.7,
    USD: 1.0925,
  },
  '2024-03-15': {
    AUD: 1.6579,
    CAD: 1.4731,
    GBP: 0.8541,
    JPY: 162.03,
    USD: 1.0892,
  },
};

describe('previousDay', () => {
  it('steps back one calendar day, across month and year boundaries', () => {
    expect(previousDay('2024-03-15')).toBe('2024-03-14');
    expect(previousDay('2024-03-01')).toBe('2024-02-29');
    expect(previousDay('2024-01-01')).toBe('2023-12-31');
  });
});

describe('nearestPriorRateDay', () => {
  it('returns the date itself when rates exist for it', () => {
    expect(nearestPriorRateDay(rates, '2024-03-15')).toBe('2024-03-15');
  });

  it('walks back over a weekend to the previous business day', () => {
    expect(nearestPriorRateDay(rates, '2024-03-16')).toBe('2024-03-15'); // Sat
    expect(nearestPriorRateDay(rates, '2024-03-17')).toBe('2024-03-15'); // Sun
  });

  it('looks back at most maxLookback days', () => {
    expect(nearestPriorRateDay(rates, '2024-03-25')).toBe('2024-03-15'); // exactly 10 days
    expect(() => nearestPriorRateDay(rates, '2024-03-26')).toThrow(
      /No exchange rates available .* 2024-03-26/
    );
    expect(() => nearestPriorRateDay(rates, '2024-03-13')).toThrow();
  });
});

describe('eurRate', () => {
  it('treats EUR as the base', () => {
    expect(eurRate(rates['2024-03-15'], 'EUR')).toBe(1);
  });

  it('throws for a currency the table does not contain', () => {
    expect(() => eurRate(rates['2024-03-15'], 'XYZ')).toThrow(/XYZ/);
  });
});

describe('convert', () => {
  it('computes exact cross rates through EUR', () => {
    const row = rates['2024-03-15'];
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
    expect(convert(1, 'USD', 'GBP', rates, '2024-03-17')).toBe(friday);
  });

  it('is the identity when from and to match, even for unknown currencies', () => {
    expect(convert(42, 'XYZ', 'XYZ', {}, '2024-03-15')).toBe(42);
  });

  it('throws for a currency not in the table', () => {
    expect(() => convert(1, 'XYZ', 'USD', rates, '2024-03-15')).toThrow(/XYZ/);
  });
});
