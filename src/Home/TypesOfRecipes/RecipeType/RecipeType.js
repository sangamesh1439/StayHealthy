/**
 * @flow
 */

import React from 'react';
import {Text, ImageBackground, View, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {recipeTypeStyles} from './RecipeType.styles';
import {colors} from '../../../common/theme/colors';
import {RECIPE_LIST_SCREEN} from './RecipeList/RecipeList';

class RecipeTypeComponent extends React.Component {
  render() {
    const {uri, type, description, listOfRecipes} = this.props.recipeType;
    return (
      <TouchableOpacity
        onPress={() => {
          this.props.navigation.navigate(RECIPE_LIST_SCREEN, {listOfRecipes});
        }}>
        <ImageBackground
          source={{uri}}
          style={recipeTypeStyles.imageBackground}
          imageStyle={recipeTypeStyles.imageStyle}>
          <LinearGradient
            colors={[colors.LIGHTBLACK, colors.TRANSPARENT]}
            style={recipeTypeStyles.linearGradientStyle}>
            <View>
              <Text style={recipeTypeStyles.recipeTypeDecription}>
                {description.toUpperCase()}
              </Text>
              <Text style={recipeTypeStyles.type}>
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </Text>
            </View>
          </LinearGradient>
        </ImageBackground>
      </TouchableOpacity>
    );
  }
}

export const RecipeType = RecipeTypeComponent;
