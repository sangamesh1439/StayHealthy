/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
    Text,
    View,
    FlatList
} from 'react-native';
import { recipeListStyles } from './RecipeList.styles';
import { Container, Header, Content, Icon } from 'native-base';
import { Recipe } from './Recipe/Recipe';


const RecipeListComponent = (props) => {
    return (
        <>
            <View style={recipeListStyles.header}>
                <View styles={{ flex: 1, flexDirection: "row" }}>
                    <Icon name='search' styles={recipeListStyles.searchIcon} />
                    <Text style={recipeListStyles.headerTextStyle}>Recipes</Text>
                </View>
                <Text style={recipeListStyles.headerTextStyle}>BreakFast</Text>
                <Icon name='search' styles={recipeListStyles.searchIcon} />
            </View>
            <View >
                <FlatList
                    data={[
                        {
                            id: 1,
                            name: "Morning Smoothies",
                            uri: "https://cdn.beobachter.ch/sites/default/files/styles/header_16_9_large/public/fileadmin/dateien/Gesundheit/smoothies.jpg",
                            time: "10 mins",
                            numberOfPeople: "2 people"
                        }, {
                            id: 2,
                            name: "Morning Smoothies",
                            uri: "https://cdn.beobachter.ch/sites/default/files/styles/header_16_9_large/public/fileadmin/dateien/Gesundheit/smoothies.jpg",
                            time: "10 mins",
                            numberOfPeople: "2 people"
                        }
                    ]}
                    renderItem={({ item }) => (
                        <Recipe {...props} recipe={item} />
                    )}
                    keyExtractor={recipe => recipe.id}
                />
            </View>
        </>
    );
};

export const RECIPE_LIST_SCREEN = "RECIPE_LIST_SCREEN"

export const RecipeList = RecipeListComponent
