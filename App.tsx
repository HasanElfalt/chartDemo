/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react'
import { AppRegistry, StyleSheet, useColorScheme, View, } from 'react-native'

import { NavigationContainer, } from '@react-navigation/native'

import ChartsListScreen from './app/ChartsListScreen'

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <NavigationContainer>
      <ChartsListScreen></ChartsListScreen>
    </NavigationContainer>
  );
}

export default App;

AppRegistry.registerComponent('App', () => App);
