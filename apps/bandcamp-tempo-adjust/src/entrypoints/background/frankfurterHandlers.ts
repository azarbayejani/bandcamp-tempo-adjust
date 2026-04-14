export async function handleFetchCurrencies(): Promise<{
  [key: string]: string;
}> {
  const resp = await fetch('https://api.frankfurter.app/currencies');
  return resp.json();
}

export async function handleFetchConversionRatesForDate(
  date: string,
  currency: string
): Promise<{ date: string; rates: { [key: string]: number } }> {
  const resp = await fetch(
    `https://api.frankfurter.app/${date}?from=${currency}`
  );
  const json = await resp.json();
  return { date, rates: json.rates };
}
