import React, {useState} from 'react';
import {Text, TouchableHighlight} from 'react-native';
import {
  ImageBackground,
  View,
  ScrollView,
  TouchableNativeFeedback,
} from 'react-native';
import {colors} from '../../theme/colors';

const DividerComponent = props => {
  return <View style={{height: 1, backgroundColor: colors.WHITE_LIGHT}} />;
};

export const Divider = DividerComponent;
