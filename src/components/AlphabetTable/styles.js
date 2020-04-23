import {StyleSheet} from 'react-native';

import {metrics, colors} from '../../styles';

const styles = StyleSheet.create({
  containerView: {
    height: metrics.screenHeight * 0.15,
  },
  container: {
    height: metrics.screenHeight * 0.09,
    alignItems: 'center',
  },
  subContainer: {
    backgroundColor: colors.colorBackground,
    width: metrics.screenWidth,
    height: metrics.screenHeight * 0.04,
  },
  containerTableHeader: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.textColorPrimary,
    borderBottomColor: colors.textColorPrimary,
    borderWidth: metrics.smallBorder,
  },
  containerTableRow: {
    height: metrics.screenHeight * 0.05,
    justifyContent: 'center',
    borderBottomColor: colors.textColorPrimary,
    borderWidth: metrics.smallBorder,
    borderBottomWidth: metrics.smallBorder,
  },
  text: {
    color: colors.colorBackground,
  },
  textBold: {
    fontFamily: 'Poppins-Bold',
  },
});

export default styles;
