import { all } from 'redux-saga/effects';

import autoFillSaga from './autoFillSaga';

export default function* rootSaga() {
  yield all([autoFillSaga()]);
}
