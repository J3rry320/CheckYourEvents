import * as UserConstants from '../constants/userConstants';
const INIT_STATE: CheckEventsTypes.IUserReducer = {
  userName: null,
  userNameLoading: null,
  userNameError: null,
  addUserName: null,
  addUserNameLoading: null,
  addUserNameError: null,
};
export default function userReducer(state = INIT_STATE, action: any) {
  switch (action.type) {
    case UserConstants.GET_USER: {
      return {
        ...state,
        userNameLoading: true,
      };
    }
    case UserConstants.GET_USER_SUCCESS: {
      return {
        ...state,
        userNameLoading: false,
        userName: action.payload,
      };
    }
    case UserConstants.GET_USER_FAILURE: {
      return {
        ...state,
        userNameLoading: false,
        userNameError: action.error,
      };
    }
    case UserConstants.ADD_USER: {
      return {
        ...state,
        addUserNameLoading: true,
      };
    }
    case UserConstants.ADD_USER_SUCCESSFUl: {
      return {
        ...state,
        addUserNameLoading: false,
        addUserName: action.payload,
      };
    }
    case UserConstants.ADD_USER_FAILURE: {
      return {
        ...state,
        addUserNameLoading: false,
        addUserNameError: action.error,
      };
    }
    default: {
      return state;
    }
  }
}
