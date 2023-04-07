const buildPercent = (decimal?: number) =>
  new Intl.NumberFormat("en-US", {
    style: "percent",
    minimumFractionDigits: decimal ?? 2,
  });

/**
 *
 * @param value
 * @param decimal
 * @returns value with percentage
 * @example 0.20 => 20%
 */
export const percentValue = (
  value: number | undefined,
  decimal?: number
): string => {
  if (value === undefined) return "N/A";
  const percent = buildPercent(decimal);
  return percent.format(value);
};

/**
 *
 * @param value
 * @param decimal
 * @returns value with currency
 * @example 20 => $20
 */
export const moneyValue = (
  value: number | undefined,
  decimal?: number
): string => {
  const money = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    currencyDisplay: "narrowSymbol",
    minimumFractionDigits: decimal ?? 2,
  });
  return money.format(value ?? 0);
};

/**
 *
 * @param min
 * @param max
 * @returns formatted bracket
 * @example min: 0, max: 2000 => "$2000 or less"
 *          min: 2000, max: 4000 => "$2000 to $4000"
 *          min: 4000 => "More than $4000"
 */
export const bracketFormat = (min: number, max?: number): string => {
  if (min === 0) return moneyValue(max, 0) + " or less";
  if (max) return moneyValue(min, 0) + " to " + moneyValue(max, 0);
  else return "More than " + moneyValue(min, 0);
};
