import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Recipes } from '../Home/Recipes/Recipes';
import { Restaurants } from '../Home/Restaurants/Restaurants';

const HomeNavigator = createBottomTabNavigator({
    Recipes,
    Restaurants,
});

export const RootNavigator = createAppContainer(HomeNavigator);