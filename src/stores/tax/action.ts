import { taxSlice } from "./reducer";

export const getTaxBrackets = (year: number) => {
  return taxSlice.actions.getTaxBrackets(year);
};
