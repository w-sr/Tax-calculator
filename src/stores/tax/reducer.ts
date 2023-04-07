import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TaxBracket } from "../../models/tax";

export const taxSlice = createSlice({
  name: "tax",
  initialState: {
    loading: false,
    error: "",
    taxBrackets: [] as TaxBracket[],
  },
  reducers: {
    getTaxBrackets: (state, _) => {
      state.taxBrackets = [];
      state.loading = true;
      state.error = "";
    },
    getTaxBracketsSuccess: (state, action: PayloadAction<TaxBracket[]>) => {
      state.taxBrackets = action.payload;
      state.loading = false;
      state.error = "";
    },
    getTaxBracketsFailure: (
      state,
      action: PayloadAction<{ error: string }>
    ) => {
      state.taxBrackets = [];
      state.loading = false;
      state.error = action.payload.error;
    },
  },
});

export const { getTaxBracketsSuccess } = taxSlice.actions;

export default taxSlice.reducer;
