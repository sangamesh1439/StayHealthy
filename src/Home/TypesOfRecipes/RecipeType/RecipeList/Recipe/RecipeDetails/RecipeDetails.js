/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState} from 'react';
import {Text} from 'react-native';
import {View} from 'react-native';
import {Icon} from 'native-base';
import {recipeDetailsStyles} from './RecipeDetails.styles';
import {FlatList} from 'react-native-gesture-handler';
import {SeeIngredients} from './SeeIngredients/SeeIngredients';
import {
  IconView,
  CurvedButton,
  ImageCarousel,
} from '../../../../../../common/components/index';
import {Divider} from '../../../../../../common/components/Divider/Divider';

const RecipeDetailsComponent = props => {
  const [
    seeIngredientsModalVisibility,
    setSeeIngredientsModalVisibility,
  ] = useState(false);

  const {
    name,
    time,
    numberOfPeople,
    moreImages,
    steps,
    ingredients,
  } = props.navigation.state.params.recipe;
  return (
    <View style={recipeDetailsStyles.container}>
      <ImageCarousel images={moreImages} title={name} />

      <View style={recipeDetailsStyles.row}>
        <IconView
          type={'MaterialIcons'}
          name={'restaurant'}
          description={numberOfPeople}
        />
        <IconView type={'Ionicons'} name={'ios-time'} description={time} />
      </View>

      <CurvedButton
        title={'See ingredientes'}
        onPress={() => {
          setSeeIngredientsModalVisibility(true);
        }}
      />

      <SeeIngredients
        ingredients={ingredients}
        visible={seeIngredientsModalVisibility}
        hideModal={() => {
          setSeeIngredientsModalVisibility(false);
        }}
      />

      <FlatList
        style={recipeDetailsStyles.flatList}
        data={steps}
        renderItem={({item, index}) => (
          <View>
            <View style={recipeDetailsStyles.step}>
              <Text style={recipeDetailsStyles.count}>{index} </Text>
              <Text style={recipeDetailsStyles.item}>{item} </Text>
            </View>
            <Divider />
          </View>
        )}
        keyExtractor={recipe => recipe.id}
      />
    </View>
  );
};

RecipeDetailsComponent.navigationOptions = {
  headerTransparent: true,
  headerStyle: recipeDetailsStyles.header,
  headerRight: () => {
    return (
      <Icon
        type="Feather"
        name="bookmark"
        style={recipeDetailsStyles.headerRight}
      />
    );
  },
};

export const RECIPE_DETAILS_SCREEN = 'RECIPE_DETAILS_SCREEN';
export const RecipeDetails = RecipeDetailsComponent;
