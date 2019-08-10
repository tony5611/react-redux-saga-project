import { all } from "redux-saga/effects";

import { watchMenu } from "../sagas/headerSaga";

export default function* rootSaga() {
  yield all([
    watchMenu()
  ]);
}
