import { PurchaseWithLocalCurrency } from './usePurchases';
import { Parser } from '@json2csv/plainjs';

export function downloadFile(
  filteredPurchases: PurchaseWithLocalCurrency[],
  filename: string
) {
  const parser = new Parser();
  const csv = parser.parse(filteredPurchases);
  const file = new Blob([csv], { type: 'text/csv' });
  const element = document.createElement('a');
  element.href = URL.createObjectURL(file);
  element.download = filename;
  document.body.appendChild(element); // Required for this to work in FireFox
  element.click();
}
