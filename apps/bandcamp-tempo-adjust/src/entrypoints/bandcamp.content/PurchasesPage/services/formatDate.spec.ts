import { describe, expect, it } from 'vitest';
import { formatDate } from './formatDate';

describe('formatDate', () => {
  it('formats a Date in local time with zero padding', () => {
    expect(formatDate(new Date(2024, 2, 5, 23, 59))).toBe('2024-03-05');
  });

  it('accepts anything Date.parse does', () => {
    // No timezone in the string, so it parses as local time and formatting
    // is stable regardless of the machine's timezone.
    expect(formatDate('Mar 5 2024')).toBe('2024-03-05');
  });
});
