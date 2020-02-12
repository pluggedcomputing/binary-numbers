import {StyleSheet} from 'react-native';

import {metrics, fonts, colors} from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: metrics.screenHeight * 0.26,
  },
  textTitle: {
    color: colors.colorBackground,
    fontSize: fonts.input,
  },
  textCell: {
    fontSize: fonts.title,
    fontWeight: 'bold',
    color: colors.textColorPrimary,
  },
  containerHeader: {
    width: metrics.screenWidth * 0.2,
    height: metrics.screenHeight * 0.03,
    backgroundColor: colors.textColorPrimary,
    borderBottomColor: colors.textColorPrimary,
    borderWidth: metrics.smallBorder,
    alignItems: 'center',
  },
  containerRow: {
    width: metrics.screenWidth * 0.2,
    height: metrics.screenHeight * 0.1,
    backgroundColor: colors.textColorSecondary,
    borderBottomColor: colors.textColorPrimary,
    borderWidth: metrics.smallBorder,
    borderBottomWidth: metrics.smallBorder,
  },
  contaninerBody: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
