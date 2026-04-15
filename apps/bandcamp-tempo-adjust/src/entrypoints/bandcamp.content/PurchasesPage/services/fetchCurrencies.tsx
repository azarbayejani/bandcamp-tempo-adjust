export async function fetchCurrencies(): Promise<{ [key: string]: string }> {
  const resp = await fetch('https://api.frankfurter.dev/v1/currencies');
  return await resp.json();
}
