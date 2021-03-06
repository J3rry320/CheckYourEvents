/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import 'react-native-gesture-handler';

import React, {Suspense} from 'react';
import {Provider} from 'react-redux';
// import {Colors} from 'react-native/Libraries/NewAppScreen';
// import Layout from './src/components/Layout';
// import {Text} from 'native-base';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Text} from 'native-base';
import {store} from './src/store';
const Welcome = React.lazy(() => import('./src/containers/Welcome'));
const Stack = createStackNavigator();
const App: () => any = () => {
  return (
    <NavigationContainer>
      <Suspense fallback={<Text>Loading...</Text>}>
        <Provider store={store}>
          <Stack.Navigator initialRouteName="Welcome">
            <Stack.Screen name="Welcome" component={Welcome} />
          </Stack.Navigator>
        </Provider>
      </Suspense>
    </NavigationContainer>
  );
};

export default App;
