import React from 'react';
import {FlatList, View} from 'react-native';
import {styles} from '../../common/theme/styles';
import {Icon} from 'native-base';

import {RecipeType} from './RecipeType/RecipeType';
import {typesOfRecipesData} from '../../common/data';
import {typesOfRecipesStyles} from './TypesOfRecipes.styles';

class TypesOfRecipesComponent extends React.Component {
  render() {
    return (
      <View style={typesOfRecipesStyles.container}>
        <FlatList
          data={typesOfRecipesData}
          renderItem={({item}) => (
            <RecipeType {...this.props} recipeType={item} />
          )}
          keyExtractor={recipe => recipe.id}
        />
      </View>
    );
  }
}

TypesOfRecipesComponent.navigationOptions = ({
  navigation,
  navigationOptions,
}) => {
  return {
    title: 'Recipes',
    headerTitleStyle: styles.headerTextStyle,
    headerStyle: {
      ...navigationOptions.headerStyle,
      height: 100,
    },
    headerRight: () => {
      return <Icon name="search" style={typesOfRecipesStyles.headerRight} />;
    },
  };
};

export const TypesOfRecipes = TypesOfRecipesComponent;
