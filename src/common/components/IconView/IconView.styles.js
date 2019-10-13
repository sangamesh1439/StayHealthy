import { ScaledSheet } from 'react-native-size-matters';
import { colors } from '../../theme/colors';

export const iconViewStyles = ScaledSheet.create({
    container:{ height: "50@ms", width: "50@ms", backgroundColor: colors.WHITE },
    description: {
        color: colors.GREEN
    },
    iconStyle: {
        color: colors.GREEN
    }

});