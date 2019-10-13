

import React from 'react';
import { Text, ImageBackground, FlatList, View, Image, ScrollView } from 'react-native';
import { Container, Header, Content, Icon } from 'native-base';
import { colors } from '../../../../common/theme/colors';

const RestaurantDetailsComponent = (props) => {
    return (
        <View style={{ flexDirection: "row", marginBottom: 15, justifyContent: "center", padding: 10, height: 110, borderRadius: 10, backgroundColor: colors.WHITE, flex: 1 }}>
            <Text> RestaurantDetailsComponent </Text>
        </View>
    );
}

export const RESTAURANT_DETAILS_SCREEN = "RESTAURANT_DETAILS_SCREEN";
export const RestaurantDetails = RestaurantDetailsComponent;
