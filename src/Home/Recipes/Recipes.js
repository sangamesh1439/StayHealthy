import React from 'react';
import { Text, View } from 'react-native';

class RecipesComponent extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Here list of Recipes will be shown!</Text>
        </View>
      );
    }
  }

export const Recipes = RecipesComponent;
