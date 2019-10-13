import {ScaledSheet} from 'react-native-size-matters';
import {colors} from '../../../../../common/theme/colors';

export const makeReservationModalStyles = ScaledSheet.create({
  modalContainer: {
    alignSelf: 'flex-end',
    flex: 1,
    position: 'absolute',
    width: '100%',
    backgroundColor: colors.WHITE,
    borderRadius: '15@ms',
  },
  mainContainer: {flex: 1, borderRadius: '15@ms', flexDirection: 'row'},
  overley: {
    flex: 1,
    backgroundColor: 'black',
    opacity: 0.5,
    flexDirection: 'row',
  },
  name: {fontSize: '20@ms'},
  description: {opacity: 0.5, fontSize: '15@ms', width: 120},
  row: {margin: '20@ms', width: 600, flexDirection: 'row'},
  nameContainer: {marginRight: 80},
  imageContainer: {alignSelf: 'center'},
  image: {width: '100@ms', borderRadius: '15@ms', height: 80},
  counterContainer: {margin: '20@ms'},
  appleIcon: {position: 'absolute', marginLeft: '100@ms', color: 'white'},
  appleIconContainer: {
    backgroundColor: 'black',
    margin: '20@ms',
    borderRadius: 5,
  },
  payButton: {
    color: 'white',
    flex: 1,
    textAlign: 'center',
    fontSize: '30@ms',
  },
});
