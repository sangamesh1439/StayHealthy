/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useEffect} from 'react';
import {
    Text,
    View,
    FlatList
} from 'react-native';
import { recipeListStyles } from './RecipeList.styles';
import { Container, Header, Content, Icon } from 'native-base';
import { Recipe } from './Recipe/Recipe';


const RecipeListComponent = (props) => {
    useEffect(()=>{
        props.navigation.setParams({ title: 'Breakfast' })
    },[])
    return (
        <>
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


RecipeListComponent.navigationOptions = ({ navigation }) => {
    return {
        title: navigation.getParam('title', 'Recipe List'),
        headerRight: () => {
            return (
                <Icon name='search' style={{ color: "white", fontSize: 25, padding: 10 }} />
            )
        },
    }
}

export const RECIPE_LIST_SCREEN = "RECIPE_LIST_SCREEN"

export const RecipeList = RecipeListComponent
