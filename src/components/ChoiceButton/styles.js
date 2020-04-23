import {StyleSheet} from 'react-native';

import {colors, metrics, fonts, general} from '../../styles';

const WIDTH_PORCENTAGE = 0.9;

const styles = StyleSheet.create({
  container: {
    margin: metrics.baseMargin,
    justifyContent: 'center',
    width: metrics.screenWidth * WIDTH_PORCENTAGE,
  },
  button: {
    alignItems: 'center',
    backgroundColor: colors.colorPrimary,
    borderRadius: metrics.baseRadius,
    borderColor: colors.colorBackground,
    padding: metrics.basePadding,
    ...general.defaultShadow,
  },
  text: {
    fontSize: fonts.input,
    fontFamily: 'Poppins-Bold',
    color: colors.textColorSecondary,
  },
});

export default styles;
