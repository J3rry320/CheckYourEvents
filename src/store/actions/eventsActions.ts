import * as EventsConstants from '../constants/eventsConstants';
export const getEvents = () => ({
  type: EventsConstants.GET_EVENTS,
});
export const getEventsSuccess = (payload: any) => ({
  payload,
  type: EventsConstants.GET_EVENTS_SUCCESS,
});
export const getEventsFailure = (payload: any) => ({
  payload,
  type: EventsConstants.GET_EVENTS_FAILURE,
});
