import {combineReducers} from 'redux';
import user from './userReducer';
import event from './eventsReducer';
export const rootReducer = combineReducers<CheckEventsTypes.IRootReducer>({
  user,
  event,
});
