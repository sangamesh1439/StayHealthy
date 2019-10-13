import {ScaledSheet} from 'react-native-size-matters';
import {colors} from '../../theme/colors';

export const imageCarouselStyles = ScaledSheet.create({
  imageBackground: {
    height: '200@ms',
  },
  linearGradientStyle: {
    height: '200@ms',
  },
  title: {
    fontSize: '30@ms',
    backgroundColor: 'transparent',
    color: colors.WHITE,
    paddingLeft: '10@ms',
    paddingBottom: '10@ms',
  },
});
