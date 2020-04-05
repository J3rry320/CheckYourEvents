declare module CheckEventsTypes {
  type Maybe<T> = T | undefined;
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
  type Address = {
    locationName: string;
    addressLine1: string;
    addressLine2: string;
    nearbyLandmark: string;
    pin: number;
  };
  type EventDetails = {
    location: {
      latitude: number;
      longitude: number;
    };
    timeBegins: number;
    timeEnds: number;
    address: Address;
  };
  export type EventType = {
    thumbnail: Maybe<string>;
    eventName: Maybe<string>;
    eventImages: Maybe<string[]>;
    eventData: Maybe<EventDetails>;
    tracked: boolean;
  };
}
