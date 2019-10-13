import {ScaledSheet} from 'react-native-size-matters';
import {colors} from '../../../../../../common/theme/colors';

export const recipeDetailsStyles = ScaledSheet.create({
  container: {backgroundColor: colors.WHITE_LIGHT, flex: 1},
  headerRight: {color: 'white', fontSize: 25, padding: 10},
  header: {
    backgroundColor: 'transparent',
  },
  count: {marginLeft: 5, opacity: 0.5},
  item: {marginLeft: 5},
  step: {
    flexDirection: 'row',
    padding: 20,
  },
  flatList: {
    flexGrow: 0,
    margin: 20,
    marginTop: 0,
    backgroundColor: colors.WHITE,
    borderRadius: 10,
  },
  row: {
    height: 70,
    flexDirection: 'row',
    backgroundColor: colors.WHITE,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
