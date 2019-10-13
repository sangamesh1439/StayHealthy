import React from 'react';
import {Text, View, FlatList, Image} from 'react-native';
import {Container, Header, Content, Button, Icon} from 'native-base';

import {colors} from '../../common/theme/colors';
import {Restaurant} from './Restaurant/Restaurant';
import {styles} from '../../common/theme/styles';
import {restaurantsData} from '../../common/data';

class RestaurantsComponent extends React.Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: colors.WHITE_LIGHT}}>
        <FlatList
          style={{padding: 15}}
          data={restaurantsData}
          renderItem={({item}) => (
            <Restaurant {...this.props} restaurant={item} />
          )}
          keyExtractor={restaurant => restaurant.id}
        />
      </View>
    );
  }
}

RestaurantsComponent.navigationOptions = ({navigation, navigationOptions}) => {
  return {
    title: 'Restaurants',
    headerTitleStyle: styles.headerTextStyle,
    headerStyle: {
      ...navigationOptions.headerStyle,
      height: 100,
    },
    headerRight: () => {
      return (
        <Icon
          name="search"
          style={{
            position: 'absolute',
            right: 0,
            top: 0,
            color: 'white',
            fontSize: 25,
            padding: 10,
          }}
        />
      );
    },
  };
};

export const Restaurants = RestaurantsComponent;
