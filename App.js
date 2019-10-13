/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import {RootNavigator} from './src/navigation';
import {colors} from './src/common/theme/colors';

export const App = () => {
  return (
    <>
      <StatusBar barStyle={colors.GREEN} />
      <RootNavigator />
      <SafeAreaView />
    </>
  );
};
