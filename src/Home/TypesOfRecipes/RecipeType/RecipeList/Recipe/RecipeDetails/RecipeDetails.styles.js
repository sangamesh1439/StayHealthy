import { ScaledSheet } from 'react-native-size-matters';
import { colors } from '../../../../../../common/theme/colors';

export const recipeDetailsStyles = ScaledSheet.create({
    imageBackground: {
        height: "200@ms",
        // margin: "10@ms",
        // borderRadius: "10@ms",
    },
    imageStyle: {
        // borderRadius: "10@ms",
    },
    linearGradientStyle: {
        height: "200@ms",
        // borderRadius: "10@ms",
    },
    recipeTypeDecription: {
        fontSize: "30@ms",
        color: colors.WHITE,
        paddingLeft: "10@ms",
        paddingBottom: "10@ms"
    },
    
});