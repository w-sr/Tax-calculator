import { TaxBracket, TaxPerBand } from "../models/tax";

/**
 *
 * @param income
 * @param brackets
 * @returns
 *    tax per band
 *    effective rate
 *    total taxes
 */
export const taxCalculator = (
  income: number | undefined,
  brackets: TaxBracket[]
) => {
  if (!brackets || brackets.length === 0 || !income) {
    return { taxPerBand: {}, total: 0, effectiveRate: 0 };
  }

  let taxPerBand: TaxPerBand = {};

  for (let i = 0; i < brackets.length; i++) {
    const { min, max, rate } = brackets[i];
    if (max) {
      if (income <= max) {
        taxPerBand[`${min}-${max}`] = (income - min) * rate;
        break;
      } else {
        taxPerBand[`${min}-${max}`] = (max - min) * rate;
      }
    } else {
      taxPerBand[`${min}-`] = (income - min) * rate;
    }
  }

  let total = Object.values(taxPerBand).reduce(
    (sum, current) => sum + current,
    0
  );
  let effectiveRate = total / income;

  return { taxPerBand, total, effectiveRate };
};
