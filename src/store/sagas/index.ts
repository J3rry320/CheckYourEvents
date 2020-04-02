import {fork, all} from 'redux-saga/effects';
import rootUserSaga from './userSagas';
export default function* rootSaga() {
  yield all([fork(rootUserSaga)]);
}
