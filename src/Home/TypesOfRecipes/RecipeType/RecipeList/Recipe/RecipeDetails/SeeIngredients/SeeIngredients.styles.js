import {ScaledSheet} from 'react-native-size-matters';
import {colors} from '../../../../../../../common/theme/colors';

export const seeIngredientsStyles = ScaledSheet.create({
  mainContainer: {flex: 1, borderRadius: 10, flexDirection: 'row'},
  overley: {
    flex: 1,
    backgroundColor: 'black',
    opacity: 0.5,
    flexDirection: 'row',
  },
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
    alignSelf: 'flex-end',
    flex: 1,
    position: 'absolute',
    width: '100%',
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
