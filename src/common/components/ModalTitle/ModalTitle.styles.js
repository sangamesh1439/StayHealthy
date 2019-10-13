import { ScaledSheet } from 'react-native-size-matters';
import { colors } from '../../theme/colors';

export const modalTitleStyles = ScaledSheet.create({
    container:{ flexDirection: "row", padding: 10 },
    chevronDownStyle :{
         color: colors.GREEN, fontSize: 50, textAlign: "center", position: "absolute" 
    },
    title:{
         color: colors.GREEN, flex: 1, fontSize: 20, textAlign: "center" 
    }
});