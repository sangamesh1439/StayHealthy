/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
    Text
} from 'react-native';
import { ImageBackground, View, ScrollView, TouchableNativeFeedback } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { Container, Header, Content, Button, Icon } from 'native-base';

import { Dimensions } from 'react-native';
import { colors } from '../../../../../../common/theme/colors';
import { recipeDetailsStyles } from './RecipeDetails.styles';
import { FlatList } from 'react-native-gesture-handler';
import { ModalDemo } from './SeeIngredients/SeeIngredients';
import { IconView, CurvedButton, ImageCarousel } from '../../../../../../common/components/index';

class RecipeDetailsComponent extends React.Component {

    state = {
        showIngredientsModal: false,
        entries: [
            {
                id: 10,
                name: "Belgin Waffles",
                uri: "https://images.squarespace-cdn.com/content/v1/5ce5c372bfc833000140eedd/1558632000007-W5Z30GJDS9JG4ZH9D7P9/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/image-asset.jpeg"

            },
            {
                id: 10,
                name: "Belgin Waffles",
                uri: "https://images.squarespace-cdn.com/content/v1/5ce5c372bfc833000140eedd/1558632000007-W5Z30GJDS9JG4ZH9D7P9/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/image-asset.jpeg"

            }
        ],
        activeSlide: 0
    }

    render = (props) => {
        const { entries, activeSlide } = this.state;

        return (
            <View style={{ backgroundColor: colors.WHITE_LIGHT, flex: 1 }}>
                <ImageCarousel images={[
                    {
                        uri: "https://images.squarespace-cdn.com/content/v1/5ce5c372bfc833000140eedd/1558632000007-W5Z30GJDS9JG4ZH9D7P9/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/image-asset.jpeg"
                    },
                    {
                        uri: "https://images.squarespace-cdn.com/content/v1/5ce5c372bfc833000140eedd/1558632000007-W5Z30GJDS9JG4ZH9D7P9/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/image-asset.jpeg"
                    },
                ]}
                    title={"breakFast"} />

                <View style={{ height: 70, flexDirection: "row", backgroundColor: colors.WHITE, alignItems: "center", justifyContent: "space-around" }}>
                    <IconView type={"MaterialCommunityIcons"} name={"food-fork-drink"} description={"jhgj"} />
                    <IconView type={"Ionicons"} name={"ios-time"} description={"jhgj"} />
                </View>

                <CurvedButton title={"See ingredientes"} onPress={() => {
                    this.setState({ showIngredientsModal: true })
                }} />

                <ModalDemo visible={this.state.showIngredientsModal} hideModal={() => {
                    this.setState({ showIngredientsModal: false })
                }} />

                <FlatList
                    style={{
                        flexGrow: 0, margin: 20, marginTop: 0,
                        backgroundColor: colors.WHITE,
                        borderRadius: 10
                    }}
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
                        },
                        {
                            id: 2,
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
                        }, {
                            id: 2,
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
                        }, {
                            id: 2,
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
                        }, {
                            id: 2,
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
                        }, {
                            id: 2,
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
                        }, {
                            id: 2,
                            name: "Morning Smoothies",
                            uri: "https://cdn.beobachter.ch/sites/default/files/styles/header_16_9_large/public/fileadmin/dateien/Gesundheit/smoothies.jpg",
                            time: "10 mins",
                            numberOfPeople: "2 people"
                        }

                    ]}
                    renderItem={({ item, index }) => (

                        <View>
                            <View style={{
                                flexDirection: "row",
                                padding: 20
                            }}>
                                <Text style={{ marginLeft: 5 }}>{index} </Text>
                                <Text style={{ marginLeft: 5 }}>{item.name} </Text>

                            </View>
                            <View style={{ height: 1, backgroundColor: colors.WHITE_LIGHT }}>
                            </View>
                        </View>
                        // <Recipe {...props} recipe={item} />
                    )}
                    keyExtractor={recipe => recipe.id}
                />

            </View>

        );
    };

}

export const RECIPE_DETAILS_SCREEN = "RECIPE_DETAILS_SCREEN"
export const RecipeDetails = RecipeDetailsComponent
