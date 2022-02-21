import {StyleSheet} from 'react-native';

import {colors, metrics, fonts} from '../../styles';

const HEIGHT_PORCENTAGE = 0.06;
const WIDTH_PORCENTAGE = 0.7;

const styles = StyleSheet.create({
  container: {
    borderRadius: metrics.smallRadius,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.textColorPrimary,
    height: metrics.screenHeight * HEIGHT_PORCENTAGE,
    width: metrics.screenWidth * WIDTH_PORCENTAGE,
    elevation: metrics.baseElevation,
  },
  textButton: {
    fontSize: fonts.input,
    fontFamily: 'Poppins-Bold',
    textTransform: 'uppercase',
    color: colors.textColorSecondary,
  },
});

export default styles;
