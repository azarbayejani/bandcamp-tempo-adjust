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

export type UnconvertiblePurchase = Purchase & {
  /** Why `convert` rejected this purchase (e.g. a currency the ECB doesn't publish). */
  conversionError: string;
};

export type ConvertedPurchase = PurchaseWithLocalCurrency | UnconvertiblePurchase;

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
 * Convert each purchase into `currency`, keeping the incoming order. A
 * purchase that can't be converted (e.g. a currency the ECB didn't publish
 * on that date) stays in place tagged with `conversionError` instead of
 * being dropped, so exports can still include it.
 */
export function convertPurchases(
  purchases: Purchase[],
  rates: RatesTable,
  currency: string
): ConvertedPurchase[] {
  return purchases.map((purchase) => {
    try {
      return {
        ...purchase,
        totalPriceInLocalCurrency: convert(
          purchase.totalPrice,
          purchase.currency,
          currency,
          rates,
          purchase.paymentDate
        ),
        localCurrency: currency,
      };
    } catch (e) {
      return {
        ...purchase,
        conversionError: e instanceof Error ? e.message : String(e),
      };
    }
  });
}
