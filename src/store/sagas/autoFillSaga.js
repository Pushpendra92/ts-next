import {
  takeEvery,
  take,
  takeLatest,
  select,
  call,
  put,
  delay,
  all,
} from 'redux-saga/effects';

import { AUTOFILL_TERM, UPDATE_FIELD_TERM } from '../constants';

function* handleAutoFillTerm({ payload: query }) {
  try {
    // debouncing
    yield delay(400);
    yield put({ type: UPDATE_FIELD_TERM, payload: query });
  } catch (e) {
    console.log(e);
  }
}

export default function* watchUpdatePost() {
  yield all([takeLatest(AUTOFILL_TERM, handleAutoFillTerm)]);
}
