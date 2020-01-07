import { delay, all, put, takeEvery } from 'redux-saga/effects';
export function* incrementAsync() {
  yield delay(1000);
  yield put({ type: 'INCREMENT' })
}
export function* watchIncrementAsync() {
  yield takeEvery('INCREMENT', incrementAsync);
}
export function helloSaga() {
  console.log('Hello Saga!');
}

export default function* rootSaga() {
  yield all([
    helloSaga(),
    watchIncrementAsync(),
  ])
}