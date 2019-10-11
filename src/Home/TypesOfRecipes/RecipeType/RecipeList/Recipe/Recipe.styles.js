import { ScaledSheet } from 'react-native-size-matters';
import { colors } from '../../../../../common/theme/colors';

export const recipeStyles = ScaledSheet.create({
    imageBackground: {
        height: "150@ms",
        margin: "10@ms",
        borderRadius: "10@ms",
    },
    imageStyle: {
        borderRadius: "10@ms",
    },
    linearGradientStyle: {
        height: "120@ms",
        borderRadius: "10@ms",
    },
    recipeTypeDecription: {
        fontSize: "25@ms",
        color: colors.WHITE,
        paddingLeft: "10@ms",
        paddingTop: "10@ms"
    },
    peopleMinutes: {
        flexDirection: "row"
    },
    numberOfPeople: {
        fontSize: "18@ms",
        color: colors.WHITE,
        paddingLeft: "10@ms",
    },
    minutes: {
        fontSize: "18@ms",
        color: colors.WHITE,
        paddingLeft: "10@ms",
    }
});