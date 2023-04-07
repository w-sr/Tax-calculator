import { percentValue, moneyValue, bracketFormat } from "./helpers";

describe("percentValue", () => {
  it("without decimal", () => {
    const value = 0.2;
    expect(percentValue(value)).toBe("20.00%");
  });

  it("with decimal", () => {
    const value = 0.2;
    expect(percentValue(value, 1)).toBe("20.0%");
  });
});

describe("moneyValue", () => {
  it("without decimal", () => {
    const value = 151978;
    expect(moneyValue(value)).toBe("$151,978.00");
  });

  it("with decimal", () => {
    const value = 151978;
    expect(moneyValue(value, 1)).toBe("$151,978.0");
  });
});

describe("bracketFormat", () => {
  it("min 0", () => {
    const min = 0;
    const max = 49020;
    expect(bracketFormat(min, max)).toBe("$49,020 or less");
  });

  it("with max", () => {
    const min = 49020;
    const max = 98040;
    expect(bracketFormat(min, max)).toBe("$49,020 to $98,040");
  });

  it("without max", () => {
    const min = 216511;
    expect(bracketFormat(min)).toBe("More than $216,511");
  });
});
