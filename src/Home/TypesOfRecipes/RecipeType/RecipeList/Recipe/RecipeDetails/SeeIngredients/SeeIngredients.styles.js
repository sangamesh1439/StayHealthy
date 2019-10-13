import {ScaledSheet} from 'react-native-size-matters';
import {colors} from '../../../../../../../common/theme/colors';

export const seeIngredientsStyles = ScaledSheet.create({
  ingredientContainer: {
    backgroundColor: 'transparent',
    elevation: 0,
    margin: 5,
  },
  ingredientRowSelected: {
    flexDirection: 'row',
    alignItems: 'center',
    opacity: 0.4,
  },
  ingredientRowUnSelected: {
    flexDirection: 'row',
    alignItems: 'center',
    opacity: 1,
  },
  selectedIngredient: {
    height: 20,
    width: 20,
    margin: 10,
    borderRadius: 10,
    backgroundColor: colors.GREEN,
    opacity: 0.5,
  },
  modalContainer: {
    marginTop: 150,
    flex: 1,
    backgroundColor: colors.WHITE,
    borderRadius: 10,
  },
  flatlist: {
    flexGrow: 0,
    marginTop: 0,
    backgroundColor: colors.WHITE,
    borderRadius: 10,
  },
  unselectedIngredient: {
    height: 20,
    width: 20,
    margin: 10,
    borderRadius: 10,
    borderColor: colors.GREEN,
    borderWidth: 2,
  },
  name: {marginTop: 5, fontSize: 20},
  quantity: {opacity: 0.5, marginBottom: 5, fontSize: 12},
});
