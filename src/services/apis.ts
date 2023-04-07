import { TaxBracket } from "../models/tax";
import { axg } from "./axios";

export const fetchTaxBrackets = async (year: number): Promise<TaxBracket[]> =>
  axg(
    `${process.env["REACT_APP_API_ENDPOINT"]}/tax-calculator/tax-year/${year}`
  );
