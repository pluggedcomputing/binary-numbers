import {StyleSheet} from 'react-native';

import {colors, metrics, fonts} from '../../styles';

const HEIGHT_PORCENTAGE = 0.13;
const WIDTH_PORCENTAGE = 0.65;
const TEXT_PORCENTAGE = 0.85;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: metrics.screenWidth,
    height: metrics.screenHeight,
    backgroundColor: colors.colorBackground,
  },
  box:{
    alignItems:'center'
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
    width:metrics.screenWidth * TEXT_PORCENTAGE,
    margin:metrics.baseMargin
  },
  links:{
    flexDirection:'row',
    justifyContent:'space-around',
    width:metrics.screenWidth * TEXT_PORCENTAGE,
  },
  
  images:{
    margin:metrics.baseMargin,
    width:metrics.screenWidth * TEXT_PORCENTAGE,
  }
});

export default styles;