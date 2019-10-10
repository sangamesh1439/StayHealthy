import React from 'react';
import { Text, ImageBackground, FlatList, View, ScrollView } from 'react-native';
import { styles } from '../../common/theme/styles';
import { Container, Header, Content, Icon } from 'native-base';

import LinearGradient from 'react-native-linear-gradient';
import { Recipe } from './Recipe/Recipe';
import { recipesData } from '../../common/data';
import { colors } from '../../common/theme/colors';
import { recipesStyles } from './Recipes.styles';

class RecipesComponent extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={recipesStyles.header}>
          <View style={recipesStyles.searchView}>
            <Icon name='search' style={recipesStyles.searchIcon} />
          </View>
          <Text style={styles.headerTextStyle}>Recipes</Text>
        </View>
        <FlatList
          data={recipesData}
          renderItem={({ item }) => (
            <Recipe recipe={item} />
          )}
          keyExtractor={recipe => recipe.id}
        />
      </View>
    );
  }
}

export const Recipes = RecipesComponent;
