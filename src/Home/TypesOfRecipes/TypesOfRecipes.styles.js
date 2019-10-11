import { ScaledSheet } from 'react-native-size-matters';
import { colors } from '../../common/theme/colors';

export const typesOfRecipesStyles = ScaledSheet.create({
    header: { backgroundColor: colors.GREEN },
    searchView: {
        alignSelf: "flex-end",
        paddingTop: "20@ms",
        paddingRight: "20@ms"
    },
    searchIcon: {
        fontSize: "30@ms",
        color: colors.WHITE
    },
    imageStyle: {
        borderRadius: "25@ms",
    },
});