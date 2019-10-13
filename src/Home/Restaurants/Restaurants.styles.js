import {ScaledSheet} from 'react-native-size-matters';
import {colors} from '../../common/theme/colors';

export const restaurantsStyles = ScaledSheet.create({
  container: {flex: 1, backgroundColor: colors.WHITE_LIGHT},
  flatList: {padding: 15},
  right: {
    position: 'absolute',
    right: 0,
    top: 0,
    color: 'white',
    fontSize: 25,
    padding: 10,
  },
});
