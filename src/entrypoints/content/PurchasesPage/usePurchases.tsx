import { useQuery } from '@tanstack/react-query';
import { Purchase, PurchasesAPI } from './services/GetItemsAPI';
import getConversionRatesForDate from './services/getConversionRatesForDate';

interface UsePurchasesInput {
  username: string;
  currency: string;
  enabled: boolean;
  crumb?: string;
}

export type PurchaseWithLocalCurrency = Purchase & {
  totalPriceInLocalCurrency: number;
};

export function usePurchases({
  username,
  currency,
  enabled,
  crumb,
}: UsePurchasesInput) {
  return useQuery({
    queryKey: ['purchases', currency],
    queryFn: async () => {
      const purchasesApi = new PurchasesAPI({ crumb, username });
      const purchases = await purchasesApi.getAllItems();

      const purchaseDates = purchases.reduce((acc, purchase) => {
        acc[purchase.paymentDate] = true;
        return acc;
      }, {} as { [key: string]: boolean });

      const dateToRates = (
        await Promise.all(
          Object.keys(purchaseDates).map((purchaseDate) =>
            getConversionRatesForDate(purchaseDate, currency)
          )
        )
      ).reduce((acc, { date, rates }) => {
        acc[date] = rates;
        return acc;
      }, {} as { [key: string]: { [key: string]: number } });

      const purchasesWithLocalCurrency = purchases.map((purchase) => {
        const conversionRate =
          purchase.currency === currency
            ? 1
            : dateToRates[purchase.paymentDate][purchase.currency];
        if (!conversionRate) {
          throw new Error(
            `There was an error getting currency conversions from ${currency} to ${purchase.currency} on ${purchase.paymentDate}`
          );
        }
        return {
          ...purchase,
          totalPriceInLocalCurrency: purchase.totalPrice / conversionRate,
          localCurrency: currency,
        };
      });

      return { purchases: purchasesWithLocalCurrency };
    },
    enabled: enabled,
  });
}
