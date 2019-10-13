

import React, {useState} from 'react';
import { Text, ImageBackground, FlatList, View, Image, ScrollView } from 'react-native';
import { Container, Header, Content, Icon } from 'native-base';
import { colors } from '../../../../common/theme/colors';
import { ImageCarousel, IconView, CurvedButton } from '../../../../common/components';
import StarRating from 'react-native-star-rating';
import { MakeReservationModal } from './MakeReservationModal/MakeReservationModal';

const RestaurantDetailsComponent = (props) => {
    const [makeReservationModalVisible, setMakeReservarionModalVisibility] = useState(false);
    return (
        <View style={{backgroundColor:colors.WHITE_LIGHT, flex:1}}>
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
                <IconView type={"Foundation"} name={"dollar-bill"} description={"€€"} />

                <View >
                    <StarRating
                        disabled={true}
                        maxStars={5}
                        rating={2.4}
                        emptyStarColor={colors.GREEN_LIGHT}
                        starSize={20}
                        fullStarColor={colors.GREEN}
                    />
                    <Text style={{ color: colors.GREEN }}>{"propsdescription"}</Text>
                </View>
                <IconView type={"Ionicons"} name={"ios-time"} description={"jhgj"} />
            </View>
            
            <CurvedButton title={"Make Reservation"} onPress={() => {
                setMakeReservarionModalVisibility(true);
            }} />
            <MakeReservationModal visible={makeReservationModalVisible} hideModal={() => {
                    setMakeReservarionModalVisibility(false);
            }} />
                
            <View style={{marginRight: 20,marginLeft: 20,margin:5, padding: 10, backgroundColor:colors.WHITE, borderRadius:10}}>
                <Text >{"thisfsgaus hvjy tvy thisfsgaus hvjy tvy thisfsgaus hvjy tvy thisfsgaus hvjy tvy thisfsgaus hvjy tvy thisfsgaus hvjy tvy thisfsgaus hvjy tvy thisfsgaus hvjy tvy "}</Text>
            </View>
            <View style={{marginRight: 20,marginLeft: 20,margin:5,padding: 10, backgroundColor:colors.WHITE, borderRadius:10}}>
                <Text style={{fontSize:30}}>{"Some title"}</Text>
                <Text >{"thisfsgaus hvjy tvy thisfsgaus hvjy tvy thisfsgaus hvjy tvy thisfsgaus hvjy tvy thisfsgaus hvjy tvy thisfsgaus hvjy tvy thisfsgaus hvjy tvy thisfsgaus hvjy tvy "}</Text>
            </View>
        </View>
    );
}

RestaurantDetailsComponent.navigationOptions = {
    headerTransparent: true,
    headerStyle: {
        backgroundColor: "transparent"
    },
    headerRight: () => {
        return (
            <Icon type="Feather" name='bookmark' style={{ color: "white", fontSize: 25, padding: 10 }} />
        )
    },
}


export const RESTAURANT_DETAILS_SCREEN = "RESTAURANT_DETAILS_SCREEN";
export const RestaurantDetails = RestaurantDetailsComponent;
