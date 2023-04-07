import { CombinedState } from "redux";
import { TaxState } from "./tax";

export type State = CombinedState<{
  tax: TaxState;
}>;
