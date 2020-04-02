import {put, takeLatest} from 'redux-saga/effects';
import * as UserConstants from '../constants/userConstants';
import {helper} from '../../utils/helper';
function* addUser(params: any) {
  const payload = params.payload;

  yield helper._storeData('userName', payload);
  yield put({type: UserConstants.ADD_USER_SUCCESSFUl, payload});
}
export default function* rootUserSaga() {
  yield takeLatest(UserConstants.ADD_USER, addUser);
}
