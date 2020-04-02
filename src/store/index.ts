import {createStore, applyMiddleware} from 'redux';
import {rootReducer} from './reducers';
import sagaMiddleWare from 'redux-saga';
import rootSaga from './sagas';
const rootSagaMiddleWare = sagaMiddleWare();

export const store = createStore(
  rootReducer,
  applyMiddleware(rootSagaMiddleWare),
);
rootSagaMiddleWare.run(rootSaga);
