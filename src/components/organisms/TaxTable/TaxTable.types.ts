import { TaxBracket } from "../../../models/tax";

export type TaxTableProps = {
  income?: number;
  year?: number;
  taxBrackets: TaxBracket[];
};
