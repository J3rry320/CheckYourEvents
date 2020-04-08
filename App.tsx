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
import {helper} from './src/utils/helper';
// @ts-ignore
import {HELLO} from 'react-native-dotenv';
const sagaMiddleWare = createSagaMiddleWare();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleWare, logger));
sagaMiddleWare.run(rootSaga);
const LandingPage = React.lazy(() => import('./src/containers/LandingPage'));
const EventPage = React.lazy(() => import('./src/containers/Events'));
const Tracker = React.lazy(() => import('./src/containers/Tracker'));
console.log('Here Tracker', Tracker);
const Stack = createStackNavigator();
class App extends React.PureComponent {
  private initScreenName = '';
  async componentDidMount() {
    this.initScreenName = !(await helper._retrieveData('userName'))
      ? 'LandingPage'
      : 'Event';
    console.log(
      'Here',
      this.initScreenName,
      await helper._retrieveData('userName'),
      HELLO,
    );
  }

  render() {
    console.disableYellowBox = true;
    console.log('In Render', this.initScreenName);
    return (
      <NavigationContainer>
        <Suspense fallback={<Text>Loading...</Text>}>
          <Provider store={store}>
            <Stack.Navigator initialRouteName={this.initScreenName}>
              <Stack.Screen name="LandingPage" component={LandingPage} />
              <Stack.Screen
                options={{headerShown: true, headerBackTitleVisible: false}}
                name="Event"
                component={EventPage}
              />
              <Stack.Screen
                options={{headerShown: true, headerBackTitleVisible: false}}
                name="Tracker"
                component={Tracker}
              />
            </Stack.Navigator>
          </Provider>
        </Suspense>
      </NavigationContainer>
    );
  }
}

export default App;
