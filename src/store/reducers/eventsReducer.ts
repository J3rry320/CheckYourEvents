import * as EventConstants from '../constants/eventsConstants';
const INIT_STATE: CheckEventsTypes.IEventReducer = {
  events: undefined,
  eventsLoading: undefined,
  eventsLoadingError: undefined,
};
export default function (state = INIT_STATE, action: any) {
  switch (action.type) {
    case EventConstants.GET_EVENTS:
      return {
        ...state,
        eventsLoading: true,
      };

    case EventConstants.GET_EVENTS_SUCCESS:
      return {
        ...state,
        eventsLoading: false,
        events: action.payload,
      };

    case EventConstants.GET_EVENTS_FAILURE:
      return {
        ...state,
        eventsLoading: false,
        eventsLoadingError: action.error,
      };

    default:
      return state;
  }
}
