import React from 'react';
import {Text, ImageBackground, FlatList, View, ScrollView} from 'react-native';
import {styles} from '../../common/theme/styles';
import {Container, Header, Content, Icon} from 'native-base';

import LinearGradient from 'react-native-linear-gradient';
import {RecipeType} from './RecipeType/RecipeType';
import {typesOfRecipesData} from '../../common/data';
import {colors} from '../../common/theme/colors';
import {typesOfRecipesStyles} from './TypesOfRecipes.styles';

class TypesOfRecipesComponent extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
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
      return (
        <Icon
          name="search"
          style={{
            position: 'absolute',
            right: 0,
            top: 0,
            color: 'white',
            fontSize: 25,
            padding: 10,
          }}
        />
      );
    },
  };
};

export const TypesOfRecipes = TypesOfRecipesComponent;
