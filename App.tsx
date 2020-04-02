/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
// import {Colors} from 'react-native/Libraries/NewAppScreen';
// import Layout from './src/components/Layout';
// import {Text} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Text} from 'native-base';
import React, {Suspense} from 'react';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';
import createSagaMiddleWare from 'redux-saga';
import {rootReducer} from './src/store/reducers';
import rootSaga from './src/store/sagas';

const sagaMiddleWare = createSagaMiddleWare();

export const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleWare, logger),
);
sagaMiddleWare.run(rootSaga);
const LandingPage = React.lazy(() => import('./src/containers/LandingPage'));
const EventPage = React.lazy(() => import('./src/containers/Events'));
const Stack = createStackNavigator();
const App: () => any = () => {
  return (
    <NavigationContainer>
      <Suspense fallback={<Text>Loading...</Text>}>
        <Provider store={store}>
          <Stack.Navigator initialRouteName="Welcome">
            <Stack.Screen name="Welcome" component={LandingPage} />
            <Stack.Screen name="Event" component={EventPage} />
          </Stack.Navigator>
        </Provider>
      </Suspense>
    </NavigationContainer>
  );
};

export default App;
