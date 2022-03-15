import {StyleSheet} from 'react-native';

import {colors, metrics, fonts} from '../../styles';

const HEIGHT_PORCENTAGE = 0.13;
const WIDTH_PORCENTAGE = 0.65;
const MARGIN_PORCENTAGE = 0.85;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: metrics.screenWidth,
    height: metrics.screenHeight,
    backgroundColor: colors.colorBackground,
    alignItems:'center',
  },
  marginScreen:{
    width: metrics.screenWidth * MARGIN_PORCENTAGE
  },
  logo: {
    resizeMode:'contain',
    width: metrics.screenWidth * WIDTH_PORCENTAGE,
    height: metrics.screenHeight * HEIGHT_PORCENTAGE,
    margin:metrics.doubleBaseMargin
  },
  title: {
    fontFamily:'Poppins-Bold',
    textAlign: 'center',
    fontSize:fonts.regular,
    padding:metrics.basePadding
  },
  textContent: {
    textAlign:'left',
    margin:metrics.baseMargin
  },
  links:{
    flexDirection:'row',
    justifyContent:'space-around',
  },
  
  images:{
    margin:metrics.baseMargin,
    width:metrics.screenWidth * MARGIN_PORCENTAGE,
  }
});

export default styles;