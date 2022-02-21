import {StyleSheet} from 'react-native';

import {colors, metrics, fonts} from '../../styles';

const HEIGHT_PORCENTAGE = 0.2;
const WIDTH_PORCENTAGE = 0.4;
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
    resizeMode: 'contain',
    width: metrics.screenWidth * WIDTH_PORCENTAGE,
    height: metrics.screenHeight * HEIGHT_PORCENTAGE,
  },
  title: {
    textAlign: 'center',
    fontWeight:"bold",
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
    resizeMode:'contain',
    margin:metrics.baseMargin
  }
});

export default styles;