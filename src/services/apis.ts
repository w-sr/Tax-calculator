import { TaxBracket } from "../models/tax";
import { axg } from "./axios";

export const fetchTaxBrackets = async (year: number): Promise<TaxBracket[]> =>
  axg(`${process.env["E2E_BASE_URL"]}/${year}`);
