/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
    Text
} from 'react-native';
import { recipeStyles } from './Recipe.styles';

import { ImageBackground, View, ScrollView, TouchableNativeFeedback } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '../../../../../common/theme/colors';


const RecipeComponent = (props) => {

    const { uri, name, numberOfPeople, time } = props.recipe;

    return (
        <>
            <TouchableNativeFeedback onPress={() => {
                // this.props.navigation.navigate(RECIPE_LIST_SCREEN);
            }}>

                <ImageBackground
                    source={{ uri }}
                    style={
                        recipeStyles.imageBackground}
                    imageStyle={recipeStyles.imageStyle}>
                    <LinearGradient
                        colors={[colors.LIGHTBLACK, colors.TRANSPARENT]}
                        style={recipeStyles.linearGradientStyle}>
                        <View style={{ flex: 1, backgroundColor: "transparent", justifyContent: "space-between" }}>
                            <Text style={recipeStyles.recipeTypeDecription}>{name}</Text>

                        </View>
                    </LinearGradient>
                    <View style={recipeStyles.peopleMinutes}>
                        <Text style={recipeStyles.numberOfPeople}>{numberOfPeople}</Text>
                        <Text style={recipeStyles.minutes}>{time}</Text>
                    </View>
                </ImageBackground>
            </TouchableNativeFeedback>
        </>
    );
};

export const RECIPE_SCREEN = "RECIPE_SCREEN"
export const Recipe = RecipeComponent
