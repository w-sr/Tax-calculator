import { all, call, put, takeLatest } from "redux-saga/effects";
import { SagaIterator } from "redux-saga";
import { fetchTaxBrackets } from "../../services/apis";
import { taxSlice } from "./reducer";

export function* getTaxBracketsInfoSaga(
  action: ReturnType<typeof taxSlice.actions.getTaxBrackets>
): SagaIterator {
  try {
    const taxBrackets = yield call(fetchTaxBrackets, action.payload);
    yield put(taxSlice.actions.getTaxBracketsSuccess(taxBrackets.tax_brackets));
  } catch (error) {
    yield put(
      taxSlice.actions.getTaxBracketsFailure({
        error: new Error(error as string).message,
      })
    );
  }
}

function* watchTaxBracketsInfo() {
  yield takeLatest(
    taxSlice.actions.getTaxBrackets.type,
    getTaxBracketsInfoSaga
  );
}

function* taxSaga() {
  yield all([watchTaxBracketsInfo()]);
}

export default taxSaga;
