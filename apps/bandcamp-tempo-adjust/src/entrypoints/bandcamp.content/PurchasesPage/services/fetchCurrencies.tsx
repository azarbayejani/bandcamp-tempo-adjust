export async function fetchCurrencies(): Promise<{ [key: string]: string }> {
  const resp = await fetch('https://api.frankfurter.app/currencies');
  return await resp.json();
}
