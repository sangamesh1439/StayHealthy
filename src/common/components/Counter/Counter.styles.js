import {ScaledSheet} from 'react-native-size-matters';
import {colors} from '../../theme/colors';

export const counterStyles = ScaledSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 15,
    borderRadius: 8,
    height: 45,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
    backgroundColor: colors.GREEN_LIGHT,
  },
  numberOfPeople: {color: colors.GREEN, fontSize: 17},
  minus: {color: colors.GREEN},
  plus: {color: colors.GREEN},
});
