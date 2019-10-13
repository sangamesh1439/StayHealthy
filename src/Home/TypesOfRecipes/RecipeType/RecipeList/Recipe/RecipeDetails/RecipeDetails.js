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

        // const { uri, name, numberOfPeople, time } = props.recipe;

        return (
            <View style={{ backgroundColor: colors.WHITE_LIGHT, flex: 1 }}>

                <View style={{ height: 200 }}>
                    <Carousel
                        data={this.state.entries}
                        renderItem={(props) => {
                            console.log('props', props);
                            let imageData = this.state.entries[this.state.activeSlide];
                            return (
                                <ImageBackground
                                    source={{ uri: imageData.uri }}
                                    style={
                                        recipeDetailsStyles.imageBackground
                                    }
                                    imageStyle={recipeDetailsStyles.imageStyle}>
                                    <LinearGradient
                                        colors={[colors.LIGHTBLACK, colors.TRANSPARENT]}
                                        style={recipeDetailsStyles.linearGradientStyle}>
                                        <View style={{ flex: 1, backgroundColor: "transparent", justifyContent: "flex-end" }}>
                                            <Text style={recipeDetailsStyles.recipeTypeDecription}>{imageData.name}</Text>
                                        </View>
                                    </LinearGradient>
                                </ImageBackground>
                            )
                        }}
                        sliderWidth={Dimensions.get('screen').width}
                        itemWidth={Dimensions.get('screen').width}
                        style={{ backgroundColor: 'green' }}
                        onSnapToItem={(index) => this.setState({ activeSlide: index })}
                    />

                    <Pagination
                        dotsLength={entries.length}
                        activeDotIndex={activeSlide}
                        containerStyle={{
                            backgroundColor: 'transparent',
                            position: "absolute",
                            right: 0,
                            bottom: -20
                            // height:10 
                        }}
                        dotStyle={{
                            width: 10,
                            height: 10,
                            borderRadius: 5,
                            // marginHorizontal: 8,
                            backgroundColor: 'white'
                        }}
                        inactiveDotStyle={{
                            // Define styles for inactive dots here
                        }}
                        inactiveDotOpacity={0.4}
                        inactiveDotScale={0.6}
                    />

                </View>

                <View style={{ height: 70, flexDirection: "row", backgroundColor: colors.WHITE, alignItems: "center", justifyContent: "space-around" }}>
                    <View style={{ height: 50, width: 50, backgroundColor: colors.WHITE }}>
                        <Icon name='search' styles={{}} />
                        <Text> jhgj</Text>
                    </View>
                    <View style={{ height: 50, width: 50, backgroundColor: colors.WHITE }}>
                        <Icon name='search' styles={{}} />
                        <Text> jhgj</Text>
                    </View>
                </View>

                <Button onPress={()=>{
                    this.setState({showIngredientsModal:true})
                }} style={{ backgroundColor: colors.GREEN, margin: 20, borderRadius: 5 }}>
                    <Text style={{
                        flex: 1, color: colors.WHITE,
                        fontSize: 15, textAlign: "center"
                    }}>
                        See ingredientes
                   </Text>
                </Button>
                <ModalDemo visible={this.state.showIngredientsModal} hideModal ={()=>{
                    this.setState({showIngredientsModal:false})
                }}/>

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
