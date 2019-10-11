import React from 'react';
import { Text, ImageBackground, FlatList, View, ScrollView } from 'react-native';
import { styles } from '../../common/theme/styles';
import { Container, Header, Content, Icon } from 'native-base';

import LinearGradient from 'react-native-linear-gradient';
import { RecipeType } from './RecipeType/RecipeType';
import { typesOfRecipesData } from '../../common/data';
import { colors } from '../../common/theme/colors';
import { typesOfRecipesStyles } from './TypesOfRecipes.styles';

class TypesOfRecipesComponent extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={typesOfRecipesStyles.header}>
          <View style={typesOfRecipesStyles.searchView}>
            <Icon name='search' style={typesOfRecipesStyles.searchIcon} />
          </View>
          <Text style={styles.headerTextStyle}>Recipes</Text>
        </View>
        <FlatList
          data={typesOfRecipesData}
          renderItem={({ item }) => (
            <RecipeType {...this.props} recipeType={item} />
          )}
          keyExtractor={recipe => recipe.id}
        />
      </View>
    );
  }
}

export const TypesOfRecipes = TypesOfRecipesComponent;
