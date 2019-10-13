import {ScaledSheet} from 'react-native-size-matters';
import {colors} from '../../../../common/theme/colors';

export const recipeListStyles = ScaledSheet.create({
  header: {
    backgroundColor: colors.GREEN,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  headerTextStyle: {
    fontSize: '17@ms',
    color: colors.WHITE,
    padding: 10,
  },
  searchIcon: {
    fontSize: '30@ms',
    padding: 10,
    color: colors.WHITE,
  },
});
