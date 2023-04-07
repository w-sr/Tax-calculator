import { all } from "redux-saga/effects";

import taxSaga from "./tax/saga";

export default function* rootSaga() {
  yield all([taxSaga()]);
}
