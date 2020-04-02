import * as UserConstants from '../constants/userConstants';
export const addUser = (payload: string) => ({
  payload,
  type: UserConstants.ADD_USER,
});
export const addUserSuccess = (payload: string) => ({
  payload,
  type: UserConstants.ADD_USER_SUCCESSFUl,
});
export const addUserFailure = (payload: string) => ({
  payload,
  type: UserConstants.ADD_USER_FAILURE,
});
