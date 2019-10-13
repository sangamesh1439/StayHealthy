/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import {RootNavigator} from './src/navigation';

export const App = () => {
  return (
    <>
      <RootNavigator />
      <SafeAreaView />
    </>
  );
};
