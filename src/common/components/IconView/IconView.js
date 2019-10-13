import React from 'react';
import {Text} from 'react-native';
import {
  ImageBackground,
  View,
  ScrollView,
  TouchableNativeFeedback,
} from 'react-native';
import {colors} from '../../theme/colors';
import {Container, Header, Content, Button, Icon} from 'native-base';
import {iconViewStyles} from './IconView.styles';

const IconViewComponent = props => {
  return (
    <View style={iconViewStyles.container}>
      <Icon
        type={props.type}
        name={props.name}
        style={iconViewStyles.iconStyle}
      />
      <Text style={iconViewStyles.description}>{props.description}</Text>
    </View>
  );
};

export const IconView = IconViewComponent;
