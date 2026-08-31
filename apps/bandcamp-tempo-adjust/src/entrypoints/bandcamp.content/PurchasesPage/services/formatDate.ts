/** Local-timezone `YYYY-MM-DD` of a `Date` or anything `Date.parse` accepts. */
export function formatDate(input: Date | string): string {
  const date = typeof input === 'string' ? new Date(Date.parse(input)) : input;
  const year = date.getFullYear(); // get the year component (e.g. 2023)
  const month = String(date.getMonth() + 1).padStart(2, '0'); // get the month component (0-11) and add leading zeros if necessary (e.g. 03 for March)
  const day = String(date.getDate()).padStart(2, '0'); // get the day component (1-31) and add leading zeros if necessary (e.g. 23)

  return `${year}-${month}-${day}`;
}
