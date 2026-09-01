import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import type { Purchase } from './services/GetItemsAPI';
import PurchasesPage from '.';

const { fetchCurrenciesMock, getAllItemsMock, loadRatesMock } = vi.hoisted(
  () => ({
    fetchCurrenciesMock: vi.fn(),
    getAllItemsMock: vi.fn(),
    loadRatesMock: vi.fn(),
  })
);

vi.mock('./services/fetchCurrencies', () => ({
  fetchCurrencies: fetchCurrenciesMock,
}));
vi.mock('./services/GetItemsAPI', () => ({
  PurchasesAPI: class {
    getAllItems = getAllItemsMock;
  },
}));
vi.mock('./services/exchangeRates', async (importOriginal) => ({
  ...(await importOriginal<typeof import('./services/exchangeRates')>()),
  loadRates: loadRatesMock,
}));

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

// 1 EUR = 2 USD, so the 10 EUR fixture purchase totals $20.00.
const rates = { '2024-03-15': { USD: 2 } };

function renderPage() {
  const client = new QueryClient({
    defaultOptions: { queries: { retry: false } },
  });
  return render(
    <QueryClientProvider client={client}>
      <PurchasesPage username="tester" totalItems={1} />
    </QueryClientProvider>
  );
}

async function loadPurchases() {
  await userEvent.click(
    await screen.findByRole('button', { name: 'Load purchases' })
  );
}

beforeEach(() => {
  vi.resetAllMocks();
  fetchCurrenciesMock.mockResolvedValue({ USD: 'US Dollar', EUR: 'Euro' });
  getAllItemsMock.mockResolvedValue([purchase()]);
  loadRatesMock.mockResolvedValue(rates);
});

describe('PurchasesPage', () => {
  it('loads purchases and shows converted totals', async () => {
    renderPage();
    await loadPurchases();

    expect(await screen.findByText('$20.00')).toBeInTheDocument();
    expect(screen.getByText('1 purchases')).toBeInTheDocument();
    expect(screen.queryByRole('alert')).not.toBeInTheDocument();
  });

  it('falls back to common currencies when the currency list fails', async () => {
    fetchCurrenciesMock.mockRejectedValue(new Error('frankfurter is down'));

    renderPage();

    expect(
      await screen.findByText(/only a few common currencies/)
    ).toBeInTheDocument();
    // The exporter still works: rates can come from cache.
    await loadPurchases();
    expect(await screen.findByText('$20.00')).toBeInTheDocument();
  });

  it('shows an error when loading purchases fails', async () => {
    getAllItemsMock.mockRejectedValue(new Error('bandcamp said no'));

    renderPage();
    await loadPurchases();

    expect(
      await screen.findByText('There was an error loading your purchases.')
    ).toBeInTheDocument();
  });

  it('shows an error when loading exchange rates fails', async () => {
    loadRatesMock.mockRejectedValue(new Error('frankfurter is down'));

    renderPage();
    await loadPurchases();

    expect(
      await screen.findByText('There was an error loading exchange rates.')
    ).toBeInTheDocument();
  });

  it('reports unconvertible purchases and excludes them from the totals', async () => {
    getAllItemsMock.mockResolvedValue([
      purchase({ currency: 'ISK' }),
      purchase(),
    ]);

    renderPage();
    await loadPurchases();

    expect(
      await screen.findByText(/1 of 2 purchases couldn't be converted to USD/)
    ).toBeInTheDocument();
    expect(screen.getByText('$20.00')).toBeInTheDocument();
    expect(screen.getByText('1 purchases')).toBeInTheDocument();
  });
});
