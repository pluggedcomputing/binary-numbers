import {StyleSheet} from 'react-native';

import {colors, metrics, fonts} from '../../styles';

const WIDTH_PORCENTAGE = 0.70;

const styles = StyleSheet.create({
  container: {
    margin: metrics.smallMargin,
    justifyContent: 'center',
    width: metrics.screenWidth * WIDTH_PORCENTAGE,
  },
  button: {
    width: metrics.screenWidth * WIDTH_PORCENTAGE,
    alignItems: 'center',
    backgroundColor: colors.colorPrimary,
    borderRadius: metrics.baseRadius,
    borderColor: colors.colorBackground,
    paddingVertical: metrics.basePadding,
  },
  text: {
    textAlign:'center',
    fontSize: fonts.input,
    fontFamily: 'Poppins-Bold',
    color: colors.textColorSecondary,
  },
});

export default styles;
