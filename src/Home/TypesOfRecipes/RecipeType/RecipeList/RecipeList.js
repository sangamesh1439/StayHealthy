/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useEffect} from 'react';
import {Text, View, FlatList} from 'react-native';
import {recipeListStyles} from './RecipeList.styles';
import {Container, Header, Content, Icon} from 'native-base';
import {Recipe} from './Recipe/Recipe';

const RecipeListComponent = props => {
  console.log('props sam', props);
  useEffect(() => {
    props.navigation.setParams({title: 'Breakfast'});
  }, [props.navigation]);
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
      return (
        <Icon
          name="search"
          style={{color: 'white', fontSize: 25, padding: 10}}
        />
      );
    },
  };
};

export const RECIPE_LIST_SCREEN = 'RECIPE_LIST_SCREEN';

export const RecipeList = RecipeListComponent;
