import * as UserConstants from '../constants/userConstants';
export const addUser = (payload: string) => ({
  payload,
  type: UserConstants.GET_USER,
});
export const addUserSuccess = (payload: string) => ({
  payload,
  type: UserConstants.GET_USER_SUCCESS,
});
export const addUserFailure = (payload: string) => ({
  payload,
  type: UserConstants.GET_USER_FAILURE,
});
