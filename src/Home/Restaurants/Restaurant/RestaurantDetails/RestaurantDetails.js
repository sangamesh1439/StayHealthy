import React, {useState} from 'react';
import {
  Text,
  ImageBackground,
  FlatList,
  View,
  Image,
  ScrollView,
  Alert,
} from 'react-native';
import {Container, Header, Content, Icon} from 'native-base';
import {colors} from '../../../../common/theme/colors';
import {
  ImageCarousel,
  IconView,
  CurvedButton,
} from '../../../../common/components';
import StarRating from 'react-native-star-rating';
import {MakeReservationModal} from './MakeReservationModal/MakeReservationModal';

const RestaurantDetailsComponent = props => {
  const {
    moreImages,
    name,
    description,
    reviews,
    moreDescription,
    time,
  } = props.navigation.state.params.restaurant;
  const [
    makeReservationModalVisible,
    setMakeReservarionModalVisibility,
  ] = useState(false);
  return (
    <View style={{backgroundColor: colors.WHITE_LIGHT, flex: 1}}>
      <ImageCarousel images={moreImages} title={name} />

      <View
        style={{
          height: 70,
          flexDirection: 'row',
          backgroundColor: colors.WHITE,
          alignItems: 'center',
          justifyContent: 'space-around',
        }}>
        <IconView type={'Foundation'} name={'dollar-bill'} description={'€€'} />

        <View>
          <StarRating
            disabled={true}
            maxStars={5}
            rating={2.4}
            emptyStarColor={colors.GREEN_LIGHT}
            starSize={20}
            fullStarColor={colors.GREEN}
          />
          <Text style={{color: colors.GREEN, textAlign: 'center'}}>
            {reviews} people
          </Text>
        </View>
        <IconView type={'Ionicons'} name={'ios-time'} description={time} />
      </View>

      <CurvedButton
        title={'Make Reservation'}
        onPress={() => {
          setMakeReservarionModalVisibility(true);
        }}
      />

      <MakeReservationModal
        restaurant={props.navigation.state.params.restaurant}
        visible={makeReservationModalVisible}
        hideModal={() => {
          setMakeReservarionModalVisibility(false);
        }}
      />

      <View
        style={{
          marginRight: 20,
          marginLeft: 20,
          margin: 5,
          padding: 10,
          backgroundColor: colors.WHITE,
          borderRadius: 10,
        }}>
        <Text>{moreDescription.description}</Text>
      </View>
      <View
        style={{
          marginRight: 20,
          marginLeft: 20,
          margin: 5,
          padding: 10,
          backgroundColor: colors.WHITE,
          borderRadius: 10,
        }}>
        <Text style={{fontSize: 30}}>{moreDescription.title}</Text>
        <Text>{moreDescription.description}</Text>
      </View>
    </View>
  );
};

RestaurantDetailsComponent.navigationOptions = {
  headerTransparent: true,
  headerStyle: {
    backgroundColor: 'transparent',
  },
  headerRight: () => {
    return (
      <Icon
        type="Feather"
        name="bookmark"
        style={{color: 'white', fontSize: 25, padding: 10}}
      />
    );
  },
};

export const RESTAURANT_DETAILS_SCREEN = 'RESTAURANT_DETAILS_SCREEN';
export const RestaurantDetails = RestaurantDetailsComponent;
