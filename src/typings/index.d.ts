declare module CheckEventsTypes {
  type Maybe<T> = T | null;
  export interface IRootReducer {
    user: IUserReducer;
  }
  export interface IUserReducer {
    userName: Maybe<string>;
    userNameLoading: Maybe<boolean>;
    userNameError: Maybe<Error>;
    addUserName: Maybe<string>;
    addUserNameLoading: Maybe<boolean>;
    addUserNameError: Maybe<Error>;
  }
}
