import { useQuery } from '@tanstack/react-query';
import { type Purchase, PurchasesAPI } from './services/GetItemsAPI';
import { convert, type RatesTable } from './services/convertCurrency';

interface UsePurchasesInput {
  username: string;
  enabled: boolean;
  crumb?: string;
}

export type PurchaseWithLocalCurrency = Purchase & {
  totalPriceInLocalCurrency: number;
  localCurrency: string;
};

export interface ConversionFailure {
  purchase: Purchase;
  error: Error;
}

export interface ConvertedPurchases {
  purchases: PurchaseWithLocalCurrency[];
  failures: ConversionFailure[];
}

/** The user's full order history, independent of display currency. */
export function usePurchases({ username, enabled, crumb }: UsePurchasesInput) {
  return useQuery({
    queryKey: ['purchases', username],
    queryFn: () => new PurchasesAPI({ crumb, username }).getAllItems(),
    enabled,
  });
}

export function earliestPaymentDate(purchases: Purchase[]): string | undefined {
  return purchases.reduce<string | undefined>(
    (earliest, purchase) =>
      earliest === undefined || purchase.paymentDate < earliest
        ? purchase.paymentDate
        : earliest,
    undefined
  );
}

/**
 * Convert each purchase into `currency`, collecting per-purchase failures
 * (e.g. a currency the ECB didn't publish on that date) instead of letting
 * one unconvertible purchase discard the whole list.
 */
export function convertPurchases(
  purchases: Purchase[],
  rates: RatesTable,
  currency: string
): ConvertedPurchases {
  const converted: PurchaseWithLocalCurrency[] = [];
  const failures: ConversionFailure[] = [];
  for (const purchase of purchases) {
    try {
      converted.push({
        ...purchase,
        totalPriceInLocalCurrency: convert(
          purchase.totalPrice,
          purchase.currency,
          currency,
          rates,
          purchase.paymentDate
        ),
        localCurrency: currency,
      });
    } catch (e) {
      failures.push({
        purchase,
        error: e instanceof Error ? e : new Error(String(e)),
      });
    }
  }
  return { purchases: converted, failures };
}
