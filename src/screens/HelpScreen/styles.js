import { StyleSheet } from "react-native";

import { colors, fonts, metrics} from "../../styles";


const WIDTH_PORCENTAGE = 0.85;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        width: metrics.screenWidth,
        height: metrics.screenHeight,
        backgroundColor: colors.colorBackground,
        alignItems:'center',
        paddingBottom:metrics.doubleBasePadding
    },
    title:{
        fontFamily:'Poppins-Bold',
        textAlign: 'center',
        fontSize:fonts.regular,
        marginVertical:metrics.baseMargin,
    },

    textContent:{
        width: metrics.screenWidth * WIDTH_PORCENTAGE,
        textAlign:'left',
        margin:metrics.smallMargin,
    },

    image:{
        width:metrics.screenWidth * WIDTH_PORCENTAGE,
        borderRadius:metrics.smallRadius,
        marginVertical:metrics.doubleBaseMargin
    },
    link:{
        fontFamily: 'Poppins-Bold'
    }
});


export default styles;