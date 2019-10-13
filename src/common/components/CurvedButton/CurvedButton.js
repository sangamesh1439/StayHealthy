

import React from 'react';
import {Text, ImageBackground, View, ScrollView, TouchableNativeFeedback } from 'react-native';
import { Container, Header, Content, Button, Icon } from 'native-base';
import { curvedButtonStyles } from './CurvedButton.styles';

const CurvedButtonComponent = (props) => {
    return (
        <Button onPress={props.onPress} style={curvedButtonStyles.buttonStyle}>
            <Text style={curvedButtonStyles.titleStyle}>  {props.title} </Text>
        </Button>
    )
}

export const CurvedButton = CurvedButtonComponent