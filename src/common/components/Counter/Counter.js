import React, {useState} from 'react';
import {Text} from 'react-native';
import {
  ImageBackground,
  View,
  ScrollView,
  TouchableNativeFeedback,
} from 'react-native';
import {colors} from '../../theme/colors';
import {Container, Header, Content, Button, Icon} from 'native-base';
import {counterStyles} from './Counter.styles';
import {CurvedButton} from '../CurvedButton/CurvedButton';

const CounterComponent = props => {
  return (
    <View
      style={{
        flexDirection: 'row',
        marginVertical: 15,
        borderRadius: 8,
        height: 45,
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 5,
        backgroundColor: colors.GREEN_LIGHT,
      }}>
      <Icon
        onPress={() => {
          if (props.peopleCounter > 1) {
            props.setPeopleCounter(props.peopleCounter - 1);
          }
        }}
        type="AntDesign"
        name="minus"
        style={{color: colors.GREEN}}
      />
      <Text style={{color: colors.GREEN, fontSize: 17}}>
        {' '}
        {props.peopleCounter} peopple
      </Text>
      <Icon
        onPress={() => {
          props.setPeopleCounter(props.peopleCounter + 1);
        }}
        type="AntDesign"
        name="plus"
        style={{color: colors.GREEN}}
      />
    </View>
  );
};

export const Counter = CounterComponent;
