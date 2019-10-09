/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';

import { RootNavigator } from './src/navigation';

export const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <RootNavigator />
      <SafeAreaView>
      </SafeAreaView>
    </>
  );
};
