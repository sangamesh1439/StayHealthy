

import React from 'react';
import { Text, ImageBackground, FlatList, View, Image, TouchableNativeFeedback,ScrollView } from 'react-native';
import { Container, Header, Content, Icon } from 'native-base';
import { colors } from '../../../common/theme/colors';
import StarRating from 'react-native-star-rating';
import { RESTAURANT_DETAILS_SCREEN } from './RestaurantDetails/RestaurantDetails';

const RestaurantComponent = (props) => {
    return (
        <TouchableNativeFeedback onPress ={()=>{
            props.navigation.navigate(RESTAURANT_DETAILS_SCREEN,{restaurant: props.restaurant});
        }}> 
        <View style={{ flexDirection: "row", marginBottom: 15, justifyContent: "center", padding: 10, height: 110, borderRadius: 10, backgroundColor: colors.WHITE, flex: 1 }}>
            <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 20 }}>{props.restaurant.name}</Text>
                <Text style={{ opacity: 0.5, fontSize: 15 }}>{props.restaurant.type}</Text>
                <View style={{ flexDirection: "row", paddingTop: 15 }}>
                    <View style={{ width: 100, height: 10 }}>
                        <StarRating
                            disabled={true}
                            maxStars={5}
                            rating={2.4}
                            emptyStarColor={colors.GREEN_LIGHT}
                            starSize={20}
                            fullStarColor={colors.GREEN}
                        />
                    </View>
                    <Text style={{ opacity: 0.5, fontSize: 15, marginLeft: 10 }}>{props.restaurant.reviews} reviews</Text>
                </View>
            </View>
            <View style={{ alignSelf: "center" }}>
                <Image style={{ width: 100, borderRadius: 10, height: 80 }}
                    source={{ uri: props.restaurant.uri }} />
            </View>
        </View>
        </TouchableNativeFeedback>

    );
}

export const Restaurant = RestaurantComponent;
