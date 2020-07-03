import {StyleSheet} from 'react-native';

import {colors, metrics, fonts} from '../../styles';

const HEIGHT_PORCENTAGE = 0.4;
const WIDTH_PORCENTAGE = 0.8;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: metrics.screenWidth,
    height: metrics.screenHeight,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.colorBackground,
  },
  logo: {
    resizeMode: 'contain',
    width: metrics.screenWidth * WIDTH_PORCENTAGE,
    height: metrics.screenHeight * HEIGHT_PORCENTAGE,
  },
  title: {
    margin: metrics.smallMargin,
    textAlign: 'center',
    fontSize: metrics.screenWidth * 0.13,
    fontFamily: 'Poppins-Bold',
    color: colors.colorPrimary,
  },
  subTitle: {
    margin: metrics.smallMargin,
    textAlign: 'center',
    fontSize: fonts.title,
    color: colors.textColorPrimary,
  },
  buttons: {
    margin: metrics.smallMargin,
  },
});

export default styles;
