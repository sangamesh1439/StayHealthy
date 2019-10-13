import React from 'react';
import {View, FlatList} from 'react-native';
import {Icon} from 'native-base';
import {Restaurant} from './Restaurant/Restaurant';
import {styles} from '../../common/theme/styles';
import {restaurantsData} from '../../common/data';
import {restaurantsStyles} from './Restaurants.styles';

class RestaurantsComponent extends React.Component {
  render() {
    return (
      <View style={restaurantsStyles.container}>
        <FlatList
          style={restaurantsStyles.flatList}
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
      return <Icon name="search" style={restaurantsStyles.right} />;
    },
  };
};

export const Restaurants = RestaurantsComponent;
