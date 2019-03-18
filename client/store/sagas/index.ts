import { all, takeLatest } from 'redux-saga/effects';

import {
    delayedIncrement,
    delayedDecrement
} from './saga';

import {
    countIncrement,
    countDecrement,
} from '../reducers/counter';

function* watchCounter() {
    yield takeLatest(countIncrement, delayedIncrement);
    yield takeLatest(countDecrement, delayedDecrement);
}

export default function* rootSaga() {
    yield all([
      watchCounter()
    ])
  }