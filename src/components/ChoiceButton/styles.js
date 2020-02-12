import {StyleSheet} from 'react-native';

import {colors, metrics, fonts} from '../../styles';

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
    padding: metrics.basePadding,
    shadowColor: colors.textColorPrimary,
    shadowOffset: {
      width: 0,
      height: -20,
    },
    shadowOpacity: 1,
    shadowRadius: 3,
    elevation: metrics.elevation,
  },
  text: {
    fontSize: fonts.input,
    fontWeight: 'bold',
    color: colors.textColorSecondary,
  },
});

export default styles;
