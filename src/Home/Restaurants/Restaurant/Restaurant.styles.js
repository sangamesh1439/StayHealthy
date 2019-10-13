import {ScaledSheet} from 'react-native-size-matters';
import {colors} from '../../../common/theme/colors';

export const restaurantStyles = ScaledSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 15,
    justifyContent: 'center',
    padding: 10,
    height: 110,
    borderRadius: 10,
    backgroundColor: colors.WHITE,
    flex: 1,
  },
  imageContainer: {alignSelf: 'center'},
  name: {fontSize: 20},
  type: {opacity: 0.5, fontSize: 15},
  startRating: {width: 100, height: 10},
  startRatingContainer: {flexDirection: 'row', paddingTop: 15},
  subContainer: {
    flex: 1,
  },
  reviews: {opacity: 0.5, fontSize: 15, marginLeft: 10},
  image: {width: 100, borderRadius: 10, height: 80},
});
