export const toOneDecimal = (num: number) =>
  (Math.round(num * 10) / 10).toFixed(1);
