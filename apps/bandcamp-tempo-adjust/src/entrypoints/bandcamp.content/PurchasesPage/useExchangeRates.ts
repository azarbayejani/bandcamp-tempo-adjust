import { useQuery } from '@tanstack/react-query';
import { loadRates, rangeStartFor } from './services/exchangeRates';

/**
 * EUR-based historical rates covering every purchase from
 * `earliestPurchaseDate` (rounded down to Jan 1st) through today.
 * Disabled until the purchases have loaded and a start date is known.
 */
export function useExchangeRates(earliestPurchaseDate: string | undefined) {
  const start = earliestPurchaseDate
    ? rangeStartFor(earliestPurchaseDate)
    : undefined;

  return useQuery({
    queryKey: ['exchangeRates', start],
    queryFn: () => {
      if (!start)
        throw new Error('exchange rates query enabled without a start date');
      return loadRates(start);
    },
    enabled: start !== undefined,
    staleTime: Infinity,
  });
}
