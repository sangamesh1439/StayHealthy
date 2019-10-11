/**
 * @flow
 */

import React from 'react';
import { Text, ImageBackground, View, ScrollView,TouchableNativeFeedback } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { recipeTypeStyles } from './RecipeType.styles';
import { colors } from '../../../common/theme/colors';
import { RECIPE_LIST_SCREEN } from './RecipeList/RecipeList';

class RecipeTypeComponent extends React.Component {
  render() {
    const { uri, type, description } = this.props.recipeType;
    return (
          <TouchableNativeFeedback onPress={()=>{
          this.props.navigation.navigate(RECIPE_LIST_SCREEN);
          }}>

      <ImageBackground
        source={{ uri }}
        style={recipeTypeStyles.imageBackground}
        imageStyle={recipeTypeStyles.imageStyle}>
        <LinearGradient
          colors={[colors.LIGHTBLACK, colors.TRANSPARENT]}
          style={recipeTypeStyles.linearGradientStyle}>
          <View>
            <Text style={recipeTypeStyles.recipeTypeDecription}>{description.toUpperCase()}</Text>
            <Text style={recipeTypeStyles.type}>{type.charAt(0).toUpperCase() +
              type.slice(1)}</Text>
          </View>
        </LinearGradient>
      </ImageBackground>
      </TouchableNativeFeedback>
    );
  }
}


export const RecipeType = RecipeTypeComponent;