/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {config} from '@gluestack-ui/config';
// import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
// import {RootStackParamList} from './types/stack.types';
import {GluestackUIProvider} from '@gluestack-ui/themed';
import Home from './screens/home';
import {AppRegistry} from 'react-native';
// const RootStack = createStackNavigator<RootStackParamList>();

function App(): JSX.Element {
  return (
    <GluestackUIProvider config={config}>
      <NavigationContainer>
        <Home />
      </NavigationContainer>
    </GluestackUIProvider>
  );
}

export default App;

AppRegistry.registerComponent('App', () => App);
