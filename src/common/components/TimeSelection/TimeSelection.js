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
import {timeSelectionStyles} from './TimeSelection.styles';
import {CurvedButton} from '../CurvedButton/CurvedButton';

const TimeSelectionComponent = props => {
  const nextHour = new Date().getHours() + 1;
  const [selectedHour, setSelectedHour] = useState(0);

  const selectedHourStyle = {
    ...timeSelectionStyles.hourButtonStyle,
    opacity: 1,
  };

  let options = [
    `${nextHour}:10`,
    `${nextHour}:20`,
    `${nextHour}:30`,
    `${nextHour}:40`,
  ];
  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
      <CurvedButton
        style={
          selectedHour === 0
            ? selectedHourStyle
            : timeSelectionStyles.hourButtonStyle
        }
        title={options[0]}
        onPress={() => {
          setSelectedHour(0);
          props.setSelectedHour(options[0]);
        }}
      />
      <CurvedButton
        style={
          selectedHour === 1
            ? selectedHourStyle
            : timeSelectionStyles.hourButtonStyle
        }
        title={options[1]}
        onPress={() => {
          setSelectedHour(1);
          props.setSelectedHour(options[1]);
        }}
      />
      <CurvedButton
        style={
          selectedHour === 2
            ? selectedHourStyle
            : timeSelectionStyles.hourButtonStyle
        }
        title={options[2]}
        onPress={() => {
          setSelectedHour(2);
          props.setSelectedHour(options[2]);
        }}
      />
      <CurvedButton
        style={
          selectedHour === 3
            ? selectedHourStyle
            : timeSelectionStyles.hourButtonStyle
        }
        title={options[3]}
        onPress={() => {
          setSelectedHour(3);
          props.setSelectedHour(options[3]);
        }}
      />
    </View>
  );
};

export const TimeSelection = TimeSelectionComponent;
