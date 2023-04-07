import { createSelector } from "@reduxjs/toolkit";
import { State } from "../../models/state";

const selectTaxState = (state: State) => state.tax;

export const selectTaxBrackets = createSelector(
  selectTaxState,
  (taxState) => taxState.taxBrackets
);

export const selectTaxLoading = createSelector(
  selectTaxState,
  (taxState) => taxState.loading
);

export const selectTaxError = createSelector(
  selectTaxState,
  (taxState) => taxState.error
);
