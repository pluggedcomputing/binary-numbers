import {StyleSheet} from 'react-native';

import {colors, metrics, fonts} from '../../styles';

const styles = StyleSheet.create({
  container: {
    height: metrics.screenHeight * 0.25,
    width: metrics.screenWidth * 0.3,
    backgroundColor: colors.colorBackground,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: metrics.baseBorder,
    borderRadius: metrics.smallRadius,
    elevation: metrics.baseElevation,
  },
  subContainer: {
    flex: 1,
    margin: metrics.smallMargin,
    width: metrics.screenWidth * 0.26,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.colorPrimary,
    borderRadius: metrics.smallRadius,
  },
  imageLevel: {
    flex: 3,
    margin: metrics.smallMargin,
    width: metrics.screenWidth * 0.25,
    resizeMode: 'contain',
  },
  textLevel: {
    flex: 1,
    fontSize: fonts.title,
    fontFamily: 'Poppins-Bold',
    color: colors.textColorSecondary,
  },
});

export default styles;
