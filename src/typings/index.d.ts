declare module CheckEventsTypes {
  export type Maybe<T> = T | undefined;
  export interface IRootReducer {
    user: IUserReducer;
    event: IEventReducer;
  }
  export interface IEventReducer {
    events: Maybe<Events[]>;
    eventsLoading: Maybe<boolean>;
    eventsLoadingError: Maybe<Error>;
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
  type EventLocationData = {
    location: {
      latitude: number;
      longitude: number;
    };
    timeBegins: number;
    timeEnds: number;
    address: Address;
  };
  type ArtistWork = {
    name: string;
    featuring: Artist[];
    socialLinks: string[];
  };
  type Artist = {
    name: string;
    images: string[];
    majorWork: ArtistWork[];
  };
  type Pricing = {
    nearStage: number;
    behindTheInitRows: number;
    secondLastRow?: number;
    lastRows?: number;
  };
  type Ticket = {
    totalTickets: number;
    soldOut: number;
    left: number;
  };
  type EventData = {
    details: string;
    artists: Artist[];
    pricing: Pricing;
    ticket: Ticket;
  };
  export type Events = {
    eventId: string;
    thumbnail: Maybe<string>;
    eventName: Maybe<string>;
    eventImages: Maybe<string[]>;
    eventLocationData: Maybe<EventLocationData>;
    tracked: boolean;
    eventData: EventData;
  };
}
