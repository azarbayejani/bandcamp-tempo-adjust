/**
 * Pure currency-conversion helpers over an EUR-based rates table
 * (the shape returned by frankfurter.dev's time-series endpoint).
 *
 * The table only contains ECB business days, so lookups walk back to the
 * nearest prior day with data — the same resolution frankfurter's
 * single-date endpoint performs server-side for weekends and holidays.
 */

/** `{ 'YYYY-MM-DD': { USD: 1.0892, GBP: 0.8541, ... } }`, all relative to 1 EUR. */
export type RatesTable = Record<string, Record<string, number>>;

const DAY_MS = 86_400_000;

/** Previous calendar day of a `YYYY-MM-DD` string, computed in UTC to avoid DST drift. */
function previousDay(isoDate: string): string {
  // Date.parse reads date-only strings as UTC midnight
  return new Date(Date.parse(isoDate) - DAY_MS).toISOString().slice(0, 10);
}

function nearestPriorRateRow(
  rates: RatesTable,
  date: string,
  maxLookback = 10
): Record<string, number> {
  let candidate = date;
  for (let i = 0; i <= maxLookback; i++) {
    const row = rates[candidate];
    if (row) return row;
    candidate = previousDay(candidate);
  }
  throw new Error(
    `No exchange rates available on or within ${maxLookback} days before ${date}`
  );
}

function eurRate(row: Record<string, number>, code: string): number {
  if (code === 'EUR') return 1;
  const rate = row[code];
  if (rate === undefined) {
    throw new Error(`No exchange rate available for currency ${code}`);
  }
  return rate;
}

/**
 * Convert `amount` of `from` into `to` using the rates in effect on `date`.
 * Cross rates go through EUR: X→Y = (EUR→Y) / (EUR→X).
 */
export function convert(
  amount: number,
  from: string,
  to: string,
  rates: RatesTable,
  date: string
): number {
  if (from === to) return amount;
  const row = nearestPriorRateRow(rates, date);
  return (amount * eurRate(row, to)) / eurRate(row, from);
}
