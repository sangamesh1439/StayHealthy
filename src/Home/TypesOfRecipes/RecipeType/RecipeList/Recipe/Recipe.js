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

import { ImageBackground, View, ScrollView,TouchableOpacity, TouchableNativeFeedback } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '../../../../../common/theme/colors';
import { RECIPE_DETAILS_SCREEN } from './RecipeDetails/RecipeDetails';


const RecipeComponent = (props) => {

    const { uri, name, numberOfPeople, time } = props.recipe;

    return (
        <>
            <TouchableOpacity onPress={() => {
                console.log('props.navigation')
                console.log('props.RECIPE_DETAILS_SCREEN',RECIPE_DETAILS_SCREEN)
                props.navigation.navigate(RECIPE_DETAILS_SCREEN);
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
            </TouchableOpacity>
        </>
    );
};

export const Recipe = RecipeComponent