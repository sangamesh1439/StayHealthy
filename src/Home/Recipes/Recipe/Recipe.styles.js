import { ScaledSheet } from 'react-native-size-matters';
import { colors } from '../../../common/theme/colors';

export const recipeStyles = ScaledSheet.create({
    imageBackground: {
        height: "300@ms",
        margin: "10@ms",
        borderRadius: "25@ms",
    },
    imageStyle: {
        borderRadius: "25@ms",
    },
    linearGradientStyle: {
        height: "100@ms",
        borderRadius: "25@ms",
    },
    recipeDecription: {
        fontSize: "15@ms",
        color: colors.WHITE,
        paddingLeft: "10@ms",
        paddingTop: "10@ms"
    },
    type: {
        fontSize: "28@ms",
        color: colors.WHITE,
        paddingLeft: "10@ms",
        paddingTop: "10@ms",
    }
});