import {put, takeLatest} from 'redux-saga/effects';
import * as EventConstants from '../constants/eventsConstants';
import * as payload from '../../helperData.json';
function* getEvents() {
  try {
    yield put({
      type: EventConstants.GET_EVENTS_SUCCESS,
      payload: payload.events,
    });
  } catch (error) {
    yield put({type: EventConstants.GET_EVENTS_FAILURE, error});
  }
}
export default function* rootEventsSaga() {
  yield takeLatest(EventConstants.GET_EVENTS, getEvents);
}
