import {fork, all} from 'redux-saga/effects';
import rootUserSaga from './userSagas';
import rootEventsSaga from './eventSagas';
export default function* rootSaga() {
  yield all([fork(rootUserSaga), fork(rootEventsSaga)]);
}
