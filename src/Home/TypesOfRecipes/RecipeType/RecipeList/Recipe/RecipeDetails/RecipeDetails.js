/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState} from 'react';
import {Text} from 'react-native';
import {
  ImageBackground,
  View,
  ScrollView,
  TouchableNativeFeedback,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {Container, Header, Content, Button, Icon} from 'native-base';

import {Dimensions} from 'react-native';
import {colors} from '../../../../../../common/theme/colors';
import {recipeDetailsStyles} from './RecipeDetails.styles';
import {FlatList} from 'react-native-gesture-handler';
import {SeeIngredients} from './SeeIngredients/SeeIngredients';
import {
  IconView,
  CurvedButton,
  ImageCarousel,
} from '../../../../../../common/components/index';

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
    <View style={{backgroundColor: colors.WHITE_LIGHT, flex: 1}}>
      <ImageCarousel images={moreImages} title={name} />

      <View
        style={{
          height: 70,
          flexDirection: 'row',
          backgroundColor: colors.WHITE,
          alignItems: 'center',
          justifyContent: 'space-around',
        }}>
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
        style={{
          flexGrow: 0,
          margin: 20,
          marginTop: 0,
          backgroundColor: colors.WHITE,
          borderRadius: 10,
        }}
        data={steps}
        renderItem={({item, index}) => (
          <View>
            <View
              style={{
                flexDirection: 'row',
                padding: 20,
              }}>
              <Text style={{marginLeft: 5, opacity: 0.5}}>{index} </Text>
              <Text style={{marginLeft: 5}}>{item} </Text>
            </View>
            <View style={{height: 1, backgroundColor: colors.WHITE_LIGHT}} />
          </View>
          // <Recipe {...props} recipe={item} />
        )}
        keyExtractor={recipe => recipe.id}
      />
    </View>
  );
};

RecipeDetailsComponent.navigationOptions = {
  headerTransparent: true,
  headerStyle: {
    backgroundColor: 'transparent',
  },
  headerRight: () => {
    return (
      <Icon
        type="Feather"
        name="bookmark"
        style={{color: 'white', fontSize: 25, padding: 10}}
      />
    );
  },
};

export const RECIPE_DETAILS_SCREEN = 'RECIPE_DETAILS_SCREEN';
export const RecipeDetails = RecipeDetailsComponent;
