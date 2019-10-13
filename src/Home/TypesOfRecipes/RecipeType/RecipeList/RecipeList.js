/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useEffect} from 'react';
import {View, FlatList} from 'react-native';
import {Icon} from 'native-base';
import {Recipe} from './Recipe/Recipe';
import {recipeListStyles} from './RecipeList.styles';

const RecipeListComponent = props => {
  console.log('props sam', props);
  useEffect(() => {
    props.navigation.setParams({title: 'Breakfast'});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <View>
        <FlatList
          data={props.navigation.state.params.listOfRecipes}
          renderItem={({item}) => <Recipe {...props} recipe={item} />}
          keyExtractor={recipe => recipe.id}
        />
      </View>
    </>
  );
};

RecipeListComponent.navigationOptions = ({navigation}) => {
  return {
    title: navigation.getParam('title', 'Recipe List'),
    headerRight: () => {
      return <Icon name="search" style={recipeListStyles.headerRight} />;
    },
  };
};

export const RECIPE_LIST_SCREEN = 'RECIPE_LIST_SCREEN';

export const RecipeList = RecipeListComponent;
