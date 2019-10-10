/**
 * @flow
 */

import React from 'react';
import { Text, ImageBackground, View, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { recipeStyles } from './Recipe.styles';
import { colors } from '../../../common/theme/colors';

class RecipeComponent extends React.Component {
  render() {
    const { uri, type, description } = this.props.recipe;
    return (
      <ImageBackground
        source={{ uri }}
        style={recipeStyles.imageBackground}
        imageStyle={recipeStyles.imageStyle}>
        <LinearGradient
          colors={[colors.LIGHTBLACK, colors.TRANSPARENT]}
          style={recipeStyles.linearGradientStyle}>
          <View>
            <Text style={recipeStyles.recipeDecription}>{description.toUpperCase()}</Text>
            <Text style={recipeStyles.type}>{type.charAt(0).toUpperCase() +
              type.slice(1)}</Text>
          </View>
        </LinearGradient>
      </ImageBackground>
    );
  }
}


export const Recipe = RecipeComponent;