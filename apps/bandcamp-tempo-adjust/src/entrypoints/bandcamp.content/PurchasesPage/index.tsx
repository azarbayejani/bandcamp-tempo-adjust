import { type ReactNode, useMemo, useState } from 'react';

import { useQuery } from '@tanstack/react-query';
import Select from 'react-select';
import { downloadFile } from './downloadFile';
import { fetchCurrencies } from './services/fetchCurrencies';
import { formatDate } from './services/formatDate';
import { useExchangeRates } from './useExchangeRates';
import {
  type ConvertedPurchase,
  convertPurchases,
  earliestPaymentDate,
  usePurchases,
} from './usePurchases';

interface PurchasesPageProps {
  username: string;
  totalItems: number;
  crumb?: string;
}

/**
 * Shown when frankfurter's /currencies endpoint can't be reached: a small
 * set the ECB has published continuously for years, so conversion (which can
 * still be served from cached rates) keeps working instead of blocking the
 * whole exporter.
 */
const FALLBACK_CURRENCIES = ['USD', 'EUR', 'GBP', 'JPY', 'AUD', 'CAD', 'CHF'];

function ErrorRow({
  severity,
  children,
}: {
  severity: 'error' | 'warning';
  children: ReactNode;
}) {
  return (
    <div
      className={`BandcampTempoAdjust__purchases_row BandcampTempoAdjust__purchases_row--${severity}`}
      role="alert"
    >
      <span aria-hidden="true">⚠️</span>
      <span>{children}</span>
    </div>
  );
}

/** Whether a `YYYY-MM-DD` payment date falls within the selected year filter. */
function matchesPurchasesFilter(paymentDate: string, purchasesFilter: string) {
  return (
    purchasesFilter === 'ALL' ||
    paymentDate.split('-').at(0) === purchasesFilter
  );
}

function PurchaseTotals({
  currency,
  purchasesFilter,
  stats,
}: {
  purchasesFilter: string;
  currency: string;
  stats: {
    /** Purchases within the selected timespan, in original order. */
    filteredPurchases: ConvertedPurchase[];
    totalPriceInLocalCurrency: number;
    purchaseCount: number;
  };
}) {
  const [generating, setGenerating] = useState(false);

  return (
    <>
      <div
        className="BandcampTempoAdjust__purchases_row"
        style={{ justifyContent: 'space-between', alignItems: 'center' }}
      >
        <div style={{ width: 320 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <strong>Total: </strong>
            <strong>
              {new Intl.NumberFormat(navigator.language, {
                style: 'currency',
                currency,
              }).format(stats.totalPriceInLocalCurrency)}{' '}
              <span className="small">{currency}</span>
            </strong>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span></span>
            <span>{stats.purchaseCount} purchases</span>
          </div>
        </div>
        {generating ? (
          <span>Exporting...</span>
        ) : (
          <button
            className="BandcampTempoAdjust__button BandcampTempoAdjust__button--purchases"
            onClick={() => {
              setGenerating(true);
              const filename = `bandcamp-purchases-${purchasesFilter}-${formatDate(
                new Date()
              )}`;

              downloadFile(stats.filteredPurchases, filename);

              setGenerating(false);
            }}
          >
            Export CSV
          </button>
        )}
      </div>
      <div className="BandcampTempoAdjust__purchases_row">
        <div>
          <strong>Did this help you do your taxes?</strong>{' '}
          <a
            href="https://buymeacoffee.com/miseryconfusion"
            target="_blank"
            rel="noreferrer"
            className="BandcampTempoAdjust__button BandcampTempoAdjust__button--purchases"
          >
            Consider donating to support future development!
          </a>
        </div>
      </div>
    </>
  );
}

export default function PurchasesPage({ username, crumb }: PurchasesPageProps) {
  const currentYear = new Date().getFullYear();
  const [startedFirstFetch, setStartedFirstFetch] = useState(false);
  const [purchasesFilter, setPurchasesFilter] = useState('ALL');
  const [currency, setCurrency] = useState<string>('USD');

  const currenciesQuery = useQuery({
    queryKey: ['currencies'],
    queryFn: fetchCurrencies,
  });
  const purchasesQuery = usePurchases({
    username,
    enabled: startedFirstFetch,
    crumb,
  });
  const purchases = purchasesQuery.data;
  const ratesQuery = useExchangeRates(
    purchases ? earliestPaymentDate(purchases) : undefined
  );
  const rates = ratesQuery.data;

  // Conversion is pure derivation: switching display currency touches no
  // network. An empty purchase list needs no rates (the rates query never
  // gets a start date), so it converts immediately.
  const converted = useMemo(() => {
    if (!purchases || (!rates && purchases.length > 0)) return undefined;
    return convertPurchases(purchases, rates ?? {}, currency);
  }, [purchases, rates, currency]);
  // Everything derived from the selected timespan in one pass: the rows to
  // display/export, the totals over the convertible ones, and the failure
  // count (a failure outside the timespan is not excluded from anything the
  // user is currently looking at).
  const stats = useMemo(() => {
    if (!converted) return undefined;
    const filteredPurchases: ConvertedPurchase[] = [];
    let totalPriceInLocalCurrency = 0;
    let purchaseCount = 0;
    let conversionFailureCount = 0;
    for (const row of converted) {
      if (!matchesPurchasesFilter(row.paymentDate, purchasesFilter)) continue;
      filteredPurchases.push(row);
      if ('conversionError' in row) {
        conversionFailureCount++;
      } else {
        totalPriceInLocalCurrency += row.totalPriceInLocalCurrency;
        purchaseCount++;
      }
    }
    return {
      filteredPurchases,
      totalPriceInLocalCurrency,
      purchaseCount,
      conversionFailureCount,
    };
  }, [converted, purchasesFilter]);
  const hasError = purchasesQuery.isError || ratesQuery.isError;

  const years: string[] = [];
  for (let year = currentYear; year > 2007; year--) {
    years.push(year.toString());
  }

  if (currenciesQuery.isLoading) {
    return (
      <div className="BandcampTempoAdjust__purchases_container">
        <div className="BandcampTempoAdjust__purchases_row">Loading...</div>
      </div>
    );
  }

  const currencyCodes = currenciesQuery.data
    ? Object.keys(currenciesQuery.data)
    : FALLBACK_CURRENCIES;

  return (
    <div className="BandcampTempoAdjust__purchases_container">
      <div
        className="BandcampTempoAdjust__purchases_row"
        style={{ justifyContent: 'space-between' }}
      >
        <div
          style={{
            justifyContent: 'space-between',
            display: 'flex',
            alignItems: 'center',
            gap: 16,
          }}
        >
          <label htmlFor="currency">Currency:</label>
          <Select
            inputId="currency"
            options={currencyCodes.map((currencyCode) => ({
              value: currencyCode,
              label: currencyCode,
            }))}
            defaultValue={{ value: 'USD', label: 'USD' }}
            isClearable={false}
            onChange={(event) => {
              if (event) {
                setCurrency(event.value);
              }
            }}
          />
          <label htmlFor="year">Year:</label>
          <Select
            inputId="year"
            onChange={(event) => {
              if (event) {
                setPurchasesFilter(event.value);
              }
            }}
            options={[
              { value: 'ALL', label: 'All time' },
              ...years.map((year) => ({
                value: year,
                label: year,
              })),
            ]}
            defaultValue={{ value: 'ALL', label: 'All time' }}
          />
        </div>
        <div
          style={{
            width: 300,
            textAlign: 'right',
          }}
        >
          <small>
            <strong>Note:</strong> Calculated totals are only an approximation
            due to currency conversions. Currency exchange rates for each
            purchase are based on historical data from{' '}
            <a href="https://frankfurter.dev">frankfurter.dev</a>.
          </small>
        </div>
      </div>

      {currenciesQuery.isError && (
        <ErrorRow severity="warning">
          Couldn&apos;t load the full currency list, so only a few common
          currencies are available.
        </ErrorRow>
      )}
      {!startedFirstFetch && (
        <div className="BandcampTempoAdjust__purchases_row">
          <button
            className="BandcampTempoAdjust__button BandcampTempoAdjust__button--purchases"
            onClick={() => {
              setStartedFirstFetch(true);
            }}
          >
            Load purchases
          </button>
        </div>
      )}
      {purchasesQuery.isError && (
        <ErrorRow severity="error">
          There was an error loading your purchases.
        </ErrorRow>
      )}
      {ratesQuery.isError && (
        <ErrorRow severity="error">
          There was an error loading exchange rates.
        </ErrorRow>
      )}
      {stats && stats.conversionFailureCount > 0 && (
        <ErrorRow severity="warning">
          {stats.conversionFailureCount} of {stats.filteredPurchases.length}{' '}
          purchases couldn&apos;t be converted to {currency}. They are excluded
          from the totals but still appear in the CSV export.
        </ErrorRow>
      )}
      {startedFirstFetch && !stats && !hasError && (
        <div className="BandcampTempoAdjust__purchases_row">
          <span>Loading... (this could take a while)</span>
        </div>
      )}
      {stats && (
        <PurchaseTotals
          stats={stats}
          currency={currency}
          purchasesFilter={purchasesFilter}
        />
      )}
    </div>
  );
}
