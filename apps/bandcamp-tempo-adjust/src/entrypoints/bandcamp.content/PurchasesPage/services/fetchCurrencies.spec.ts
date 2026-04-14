import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { fetchCurrencies } from './fetchCurrencies';

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

describe('fetchCurrencies', () => {
  beforeEach(() => {
    mockSendMessage.mockResolvedValue({ USD: 'US Dollar', EUR: 'Euro' });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('sends the fetchCurrencies action to the background', async () => {
    await fetchCurrencies();
    expect(mockSendMessage).toHaveBeenCalledWith({ action: 'fetchCurrencies' });
  });

  it('returns the currency map from the response', async () => {
    const result = await fetchCurrencies();
    expect(result).toEqual({ USD: 'US Dollar', EUR: 'Euro' });
  });
});
