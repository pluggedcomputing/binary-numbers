import {StyleSheet} from 'react-native';

import {colors, metrics, fonts} from '../../styles';

const HEIGHT_PORCENTAGE = 0.5;
const WIDTH_PORCENTAGE = 0.9;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: metrics.screenWidth,
    height: metrics.screenHeight,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: colors.colorBackgroundSecondary,
  },
  box:{
    alignItems:'center'
  },
  logo: {
    resizeMode: 'contain',
    width: metrics.screenWidth * WIDTH_PORCENTAGE,
    height: metrics.screenHeight * HEIGHT_PORCENTAGE,
  },
  textPrimary:{
    fontWeight:'bold',
    fontSize:fonts.title,
  },
  textSecondary:{
    top:-2
  },
  buttons: {
    margin: metrics.smallMargin,
  },
});

export default styles;
