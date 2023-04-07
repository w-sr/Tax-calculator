import { TaxBracket } from "../models/tax";
import { taxCalculator } from "./taxCalculator";

describe("taxCalculator", () => {
  it("without brackets", () => {
    const brackets: TaxBracket[] = [];
    const income = 0;

    const { taxPerBand, total, effectiveRate } = taxCalculator(
      income,
      brackets
    );

    expect(taxPerBand).toEqual({});
    expect(total).toBe(0);
    expect(effectiveRate).toBe(0);
  });

  it("with brackets", () => {
    const brackets: TaxBracket[] = [
      { max: 50197, min: 0, rate: 0.15 },
      { max: 100392, min: 50197, rate: 0.205 },
      { max: 155625, min: 100392, rate: 0.26 },
      { max: 221708, min: 155625, rate: 0.29 },
      { min: 221708, rate: 0.33 },
    ];
    const income = 200000;

    const { taxPerBand, total, effectiveRate } = taxCalculator(
      income,
      brackets
    );

    expect(taxPerBand["0-50197"].toFixed(2)).toBe("7529.55");
    expect(taxPerBand["50197-100392"].toFixed(2)).toBe("10289.97");
    expect(taxPerBand["100392-155625"].toFixed(2)).toBe("14360.58");
    expect(taxPerBand["155625-221708"].toFixed(2)).toBe("12868.75");
    expect(total.toFixed(2)).toBe("45048.85");
    expect(effectiveRate.toFixed(4)).toBe("0.2252");
  });
});
