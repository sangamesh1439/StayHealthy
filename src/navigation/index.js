import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { TypesOfRecipes } from '../Home/TypesOfRecipes/TypesOfRecipes';
import { Restaurants } from '../Home/Restaurants/Restaurants';

import { createStackNavigator } from 'react-navigation-stack';
import { RecipeList } from '../Home/TypesOfRecipes/RecipeType/RecipeList/RecipeList';
import { RECIPE_SCREEN, Recipe } from '../Home/TypesOfRecipes/RecipeType/RecipeList/Recipe/Recipe';

const MainNavigator = createStackNavigator({
    TypesOfRecipes: TypesOfRecipes,
    RECIPE_LIST_SCREEN: RecipeList,
    RECIPE_SCREEN: Recipe
}, {
        // initialRouteName:"HomeNavigator",
        // initialRouteName:"RECIPE_LIST_SCREEN",
        headerMode: "none"
    });

const HomeNavigator = createBottomTabNavigator({
    MainNavigator,
    Restaurants,
});




export const RootNavigator = createAppContainer(HomeNavigator);