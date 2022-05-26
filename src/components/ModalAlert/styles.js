import { StyleSheet } from "react-native";

import { fonts, metrics, colors} from "../../styles";

const WIDTH_PERCENTAGE = 0.80;

const styles = StyleSheet.create({
    modalBackground:{
        flex:1,
        justifyContent:'center',
        alignItems:"center",

      },
      modalContainer:{
        width: metrics.screenWidth * WIDTH_PERCENTAGE,
        backgroundColor:colors.colorBackground,
        height:215,
        elevation:metrics.baseElevation,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:8
      },

      textModal:{
          textAlign:'center',
          paddingVertical:metrics.doubleBasePadding,
          margin:metrics.baseMargin,
          fontSize: fonts.regular,
      },
      levelIndicator:{
        fontFamily: 'Poppins-Bold',
      }
});

export default styles;