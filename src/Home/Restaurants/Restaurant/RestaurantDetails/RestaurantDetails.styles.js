import {ScaledSheet} from 'react-native-size-matters';
import {colors} from '../../../../common/theme/colors';

export const restaurantDetailsStyles = ScaledSheet.create({
  container: {backgroundColor: colors.WHITE_LIGHT, flex: 1},
  row: {
    height: 70,
    flexDirection: 'row',
    backgroundColor: colors.WHITE,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  peopleCount: {color: colors.GREEN, textAlign: 'center'},

  description: {
    marginRight: 20,
    marginLeft: 20,
    margin: 5,
    padding: 10,
    backgroundColor: colors.WHITE,
    borderRadius: 10,
  },
  title: {fontSize: 30},
  titleContainer: {
    marginRight: 20,
    marginLeft: 20,
    margin: 5,
    padding: 10,
    backgroundColor: colors.WHITE,
    borderRadius: 10,
  },
  headerStyle: {
    backgroundColor: 'transparent',
  },
  headerRight: {color: colors.WHITE, fontSize: 25, padding: 10},
});
