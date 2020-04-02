import {put, takeLatest} from 'redux-saga/effects';
import * as UserConstants from '../constants/userConstants';
function* addUser(params: any) {
  const payload = params.userName;
  yield put({type: UserConstants.ADD_USER_SUCCESSFUl, payload});
}
export default function* rootUserSaga() {
  yield takeLatest(UserConstants.ADD_USER, addUser);
}
