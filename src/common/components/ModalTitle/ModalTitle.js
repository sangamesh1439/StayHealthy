import React, {useState} from 'react';
import {Text, TouchableHighlight} from 'react-native';
import {
  ImageBackground,
  View,
  ScrollView,
  TouchableNativeFeedback,
} from 'react-native';
import {Divider} from '../Divider/Divider';

import {Container, Header, Content, Button, Icon} from 'native-base';
import {modalTitleStyles} from './ModalTitle.styles';

const ModalTitleComponent = props => {
  return (
    <View>
      <TouchableHighlight
        onPress={() => {
          props.hideModal();
        }}
        style={modalTitleStyles.container}>
        <>
          <Icon
            type="EvilIcons"
            name="chevron-down"
            style={modalTitleStyles.chevronDownStyle}
          />
          <Text style={modalTitleStyles.title}>{props.title}</Text>
        </>
      </TouchableHighlight>
      <Divider />
    </View>
  );
};

export const ModalTitle = ModalTitleComponent;
