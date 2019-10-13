import React from 'react';

import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { TypesOfRecipes } from '../Home/TypesOfRecipes/TypesOfRecipes';
import { Restaurants } from '../Home/Restaurants/Restaurants';
import { View } from 'react-native';

import { createStackNavigator } from 'react-navigation-stack';
import { RecipeList } from '../Home/TypesOfRecipes/RecipeType/RecipeList/RecipeList';
import { RECIPE_SCREEN, Recipe } from '../Home/TypesOfRecipes/RecipeType/RecipeList/Recipe/Recipe';
import { Container, Header, Content, Icon } from 'native-base';
import { colors } from '../common/theme/colors';
import { RecipeDetails, RECIPE_DETAILS_SCREEN } from '../Home/TypesOfRecipes/RecipeType/RecipeList/Recipe/RecipeDetails/RecipeDetails';
import { RestaurantDetails } from '../Home/Restaurants/Restaurant/RestaurantDetails/RestaurantDetails';

const defaultNavigationOptions = (props) => {
    return {
        headerStyle:{
            backgroundColor:colors.GREEN
        },
        headerTintColor: 'white',
    }
}

const recipesNavigator = createStackNavigator({
    TypesOfRecipes: TypesOfRecipes,
    RECIPE_LIST_SCREEN: RecipeList,
    RECIPE_SCREEN: Recipe,
    RECIPE_DETAILS_SCREEN: RecipeDetails,
}, { defaultNavigationOptions });

const restaurantsNavigator = createStackNavigator({
    Restaurants:Restaurants,
    RESTAURANT_DETAILS_SCREEN: RestaurantDetails
}, { defaultNavigationOptions });


const HomeNavigator = createBottomTabNavigator({
    recipesNavigator: {
        screen: recipesNavigator,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
                <Icon type="Feather" name="smartphone" style={{ color: tintColor }} />
            ),
        }
    },
    restaurantsNavigator: {
        screen: restaurantsNavigator,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
                <Icon type={"MaterialIcons"} name={"restaurant-menu"} style={{ color: tintColor }} />
            ),
        }
    },
}, {
        tabBarOptions: {
            showLabel: false,
            activeTintColor: colors.GREEN
        }
    });


export const RootNavigator = createAppContainer(HomeNavigator);