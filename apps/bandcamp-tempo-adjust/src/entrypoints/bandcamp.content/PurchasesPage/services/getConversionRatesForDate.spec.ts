import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import getConversionRatesForDate from './getConversionRatesForDate';

const { mockSendMessage } = vi.hoisted(() => ({
  mockSendMessage: vi.fn(),
}));

vi.mock('webextension-polyfill', () => ({
  default: {
    runtime: {
      sendMessage: mockSendMessage,
    },
  },
}));

describe('getConversionRatesForDate', () => {
  beforeEach(() => {
    mockSendMessage.mockResolvedValue({
      date: '2024-01-15',
      rates: { EUR: 0.92, GBP: 0.79 },
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('sends the correct message with date and currency', async () => {
    await getConversionRatesForDate('2024-01-15', 'USD');
    expect(mockSendMessage).toHaveBeenCalledWith({
      action: 'fetchConversionRatesForDate',
      date: '2024-01-15',
      currency: 'USD',
    });
  });

  it('returns the response from the background', async () => {
    const result = await getConversionRatesForDate('2024-01-15', 'USD');
    expect(result).toEqual({
      date: '2024-01-15',
      rates: { EUR: 0.92, GBP: 0.79 },
    });
  });
});
