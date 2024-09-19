import React, { useState } from 'react';

import { useQuery } from '@tanstack/react-query';
import Select from 'react-select';
import { downloadFile } from './downloadFile';
import { fetchCurrencies } from './services/fetchCurrencies';
import { formatDate } from './services/formatDate';
import { PurchaseWithLocalCurrency, usePurchases } from './usePurchases';

interface PurchasesPageProps {
  username: string;
  totalItems: number;
  crumb?: string;
}

function PurchaseTotals({
  currency,
  purchases,
  purchasesFilter,
}: {
  purchases: PurchaseWithLocalCurrency[];
  purchasesFilter: string;
  currency: string;
}) {
  const [generating, setGenerating] = useState(false);

  const filteredPurchases = purchases.filter(
    (purchase) =>
      purchasesFilter === 'ALL' ||
      purchase.paymentDate.split('-').at(0) === purchasesFilter
  );

  const totals = filteredPurchases.reduce(
    (totals, currPurchase) => ({
      totalPriceInLocalCurrency:
        totals.totalPriceInLocalCurrency +
        currPurchase.totalPriceInLocalCurrency,
      purchaseCount: totals.purchaseCount + 1,
    }),
    { totalPriceInLocalCurrency: 0, purchaseCount: 0 } as {
      totalPriceInLocalCurrency: number;
      purchaseCount: number;
    }
  );

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
              }).format(totals.totalPriceInLocalCurrency)}{' '}
              <span className="small">{currency}</span>
            </strong>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span></span>
            <span>{totals.purchaseCount} purchases</span>
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
                new Date().toDateString()
              )}`;

              downloadFile(filteredPurchases, filename);

              setGenerating(false);
            }}
          >
            Export CSV
          </button>
        )}
      </div>
      <div
        className="BandcampTempoAdjust__purchases_row"
        // style={{ justifyContent: 'flex-end' }}
      >
        <div>
          <strong>Did this help you do your taxes?</strong> Consider donating to
          support future development:
        </div>
        <a
          className="BandcampTempoAdjust__button BandcampTempoAdjust__button--purchases"
          href="https://www.paypal.com/donate/?business=8PMHBGHW49248&no_recurring=0&item_name=Your+generosity+helps+guarantee+the+continued+development+of+Bandcamp+Tempo+Adjust.&currency_code=USD&amount=5"
          target="_blank"
          rel="noreferrer"
        >
          $5
        </a>
        <a
          className="BandcampTempoAdjust__button BandcampTempoAdjust__button--purchases"
          href="https://www.paypal.com/donate/?business=8PMHBGHW49248&no_recurring=0&item_name=Your+generosity+helps+guarantee+the+continued+development+of+Bandcamp+Tempo+Adjust.&currency_code=USD&amount=10"
          target="_blank"
          rel="noreferrer"
        >
          $10
        </a>
        <a
          className="BandcampTempoAdjust__button BandcampTempoAdjust__button--purchases"
          href="https://www.paypal.com/donate/?business=8PMHBGHW49248&no_recurring=0&item_name=Your+generosity+helps+guarantee+the+continued+development+of+Bandcamp+Tempo+Adjust.&currency_code=USD&amount=20"
          target="_blank"
          rel="noreferrer"
        >
          $20
        </a>
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
    currency,
    crumb,
  });

  const years: string[] = [];
  for (let year = currentYear; year > 2007; year--) {
    years.push(year.toString());
  }

  if (currenciesQuery.isLoading) {
    <div className="BandcampTempoAdjust__purchases_container">
      <div className="BandcampTempoAdjust__purchases_row">Loading...</div>
    </div>;
  }

  if (!currenciesQuery.data) {
    console.log("Couldn't load currencies");
    return null;
  }

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
            options={Object.keys(currenciesQuery.data).map((currencyCode) => ({
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
            <a href="https://frankfurter.app">frankfurter.app</a>.
          </small>
        </div>
      </div>

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
      {startedFirstFetch && purchasesQuery.isError && (
        <div className="BandcampTempoAdjust__purchases_row">
          <span>There was an error loading purchases.</span>
        </div>
      )}
      {startedFirstFetch && purchasesQuery.isLoading && (
        <div className="BandcampTempoAdjust__purchases_row">
          <span>Loading... (this could take a while)</span>
        </div>
      )}
      {purchasesQuery.data && (
        <PurchaseTotals
          {...purchasesQuery.data}
          currency={currency}
          purchasesFilter={purchasesFilter}
        />
      )}
    </div>
  );
}
