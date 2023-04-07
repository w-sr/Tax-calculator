export type TaxBracket = {
  min: number;
  max?: number;
  rate: number;
};

export type TaxPerBand = {
  [key: string]: number;
};

export type TaxState = {
  taxBrackets: TaxBracket[];
  loading: boolean;
  error: string;
};
