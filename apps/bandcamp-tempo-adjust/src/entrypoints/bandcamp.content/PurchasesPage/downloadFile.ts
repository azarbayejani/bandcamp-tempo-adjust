import type { ConvertedPurchase } from './usePurchases';
import { Parser } from '@json2csv/plainjs';

export function downloadFile(
  filteredPurchases: ConvertedPurchase[],
  filename: string
) {
  // Every row must carry the same keys — the parser infers the columns from
  // the first row. An unconvertible purchase keeps its place and original
  // amounts, with the error message where the converted price would be.
  const rows = filteredPurchases.map((row) => {
    if (!('conversionError' in row)) return row;
    const { conversionError, ...purchase } = row;
    return {
      ...purchase,
      totalPriceInLocalCurrency: conversionError,
      localCurrency: '',
    };
  });
  const parser = new Parser();
  const csv = parser.parse(rows);
  const file = new Blob([csv], { type: 'text/csv' });
  const element = document.createElement('a');
  element.href = URL.createObjectURL(file);
  element.download = filename;
  document.body.appendChild(element); // Required for this to work in FireFox
  element.click();
}
