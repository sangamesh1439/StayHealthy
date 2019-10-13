import React from 'react';
import { Text, View, FlatList, Image } from 'react-native';

import { colors } from '../../common/theme/colors';
import { Restaurant } from './Restaurant/Restaurant';

class RestaurantsComponent extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: colors.WHITE_LIGHT }}>
        <FlatList
          style={{ padding: 15 }}
          data={[
            {
              id: 1,
              name: "Gusteau's",
              type: "French",
              rating: 3,
              reviews: 100,
              uri: "https://vignette.wikia.nocookie.net/fictionalcompanies/images/2/26/Gusteaus.jpg/revision/latest?cb=20150414201647"
            }, {
              id: 1,
              name: "Gusteau's",
              type: "French",
              rating: 3,
              reviews: 100,
              uri: "https://vignette.wikia.nocookie.net/fictionalcompanies/images/2/26/Gusteaus.jpg/revision/latest?cb=20150414201647"
            }, {
              id: 1,
              name: "Gusteau's",
              type: "French",
              rating: 3,
              reviews: 100,
              uri: "https://vignette.wikia.nocookie.net/fictionalcompanies/images/2/26/Gusteaus.jpg/revision/latest?cb=20150414201647"
            }, {
              id: 1,
              name: "Gusteau's",
              type: "French",
              rating: 3,
              reviews: 100,
              uri: "https://vignette.wikia.nocookie.net/fictionalcompanies/images/2/26/Gusteaus.jpg/revision/latest?cb=20150414201647"
            }, {
              id: 1,
              name: "Gusteau's",
              type: "French",
              rating: 3,
              reviews: 100,
              uri: "https://vignette.wikia.nocookie.net/fictionalcompanies/images/2/26/Gusteaus.jpg/revision/latest?cb=20150414201647"
            }, {
              id: 1,
              name: "Gusteau's",
              type: "French",
              rating: 3,
              reviews: 100,
              uri: "https://vignette.wikia.nocookie.net/fictionalcompanies/images/2/26/Gusteaus.jpg/revision/latest?cb=20150414201647"
            },

          ]}
          renderItem={({ item }) => (
            <Restaurant {...this.props} restaurant={item} />
          )}
          keyExtractor={restaurant => restaurant.id}
        />
      </View>
    );
  }
}

export const Restaurants = RestaurantsComponent;
