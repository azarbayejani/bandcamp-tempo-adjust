export default function getConversionRatesForDate(
  date: string,
  currency: string
) {
  const apiUrl = `https://api.frankfurter.app/${date}?from=${currency}`;
  return fetch(apiUrl)
    .then((resp) => resp.json())
    .then((resp) => ({
      date,
      rates: resp.rates,
    }));
}
