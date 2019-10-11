import React from 'react';

import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { TypesOfRecipes } from '../Home/TypesOfRecipes/TypesOfRecipes';
import { Restaurants } from '../Home/Restaurants/Restaurants';

import { createStackNavigator } from 'react-navigation-stack';
import { RecipeList } from '../Home/TypesOfRecipes/RecipeType/RecipeList/RecipeList';
import { RECIPE_SCREEN, Recipe } from '../Home/TypesOfRecipes/RecipeType/RecipeList/Recipe/Recipe';
import { Container, Header, Content, Icon } from 'native-base';
import { colors } from '../common/theme/colors';
import { RecipeDetails,RECIPE_DETAILS_SCREEN } from '../Home/TypesOfRecipes/RecipeType/RecipeList/Recipe/RecipeDetails/RecipeDetails';

const MainNavigator = createStackNavigator({
    TypesOfRecipes: TypesOfRecipes,
    RECIPE_LIST_SCREEN: RecipeList,
    RECIPE_SCREEN: Recipe,
    RECIPE_DETAILS_SCREEN:RecipeDetails
}, {
        // initialRouteName:"HomeNavigator",
        // initialRouteName:"RECIPE_LIST_SCREEN",
        headerMode: "none"
    });

const HomeNavigator = createBottomTabNavigator({
    MainNavigator: {
        screen: MainNavigator,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
                <Icon name="search" style={{ color: tintColor }} />
            ),
        }
    },
    Restaurants: {
        screen: Restaurants,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => (
                <Icon name="search" style={{ color: tintColor }} />
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