import React from 'react';
import { Text, ImageBackground, View } from 'react-native';
import { styles } from '../../common/theme/styles';
import { Container, Header, Content, Icon } from 'native-base';

import LinearGradient from 'react-native-linear-gradient';

class Recipe extends React.Component {
  render() {
    return (
      <ImageBackground
        source={{ uri: "https://food-images.files.bbci.co.uk/food/recipes/veggie_breakfast_fry_up_66913_16x9.jpg" }}
        style={{
          height: 300, margin: 10, borderRadius: 25,
        }
        }
        imageStyle={{ borderRadius: 25 }}>
        <>
          <LinearGradient
            colors={['#3f3f3f', 'transparent']}
            style={{
              height: 100,
              borderRadius: 25,
            }}>
            <View>
              <Text style={{ fontSize: 15, color: "white", paddingLeft: 10, paddingTop: 10 }}>Start Your Day Right</Text>
              <Text style={{
                fontSize: 28, color: "white", paddingLeft: 10, paddingTop: 10,
              }}>Breakfast</Text>
            </View>
          </LinearGradient>
        </>
      </ImageBackground>
    );
  }
}

class RecipesComponent extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ backgroundColor: "#72C734" }}>
          <View style={{ alignSelf: "flex-end", padding: 10 }}>
            <Icon name='search' style={{ fontSize: 30, color: 'white' }} />
          </View>
          <Text style={styles.headerTextStyle}>Recipes</Text>
        </View>
        <Recipe />
      </View>
    );
  }
}

export const Recipes = RecipesComponent;
