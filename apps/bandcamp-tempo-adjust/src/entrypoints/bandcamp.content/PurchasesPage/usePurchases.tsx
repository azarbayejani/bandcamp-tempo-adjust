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

export function convertPurchases(
  purchases: Purchase[],
  rates: RatesTable,
  currency: string
): PurchaseWithLocalCurrency[] {
  return purchases.map((purchase) => ({
    ...purchase,
    totalPriceInLocalCurrency: convert(
      purchase.totalPrice,
      purchase.currency,
      currency,
      rates,
      purchase.paymentDate
    ),
    localCurrency: currency,
  }));
}
