import {StyleSheet} from 'react-native';

import {colors, fonts, metrics} from '../../styles';

const WIDHT_PORCENTAGE = 0.14;
const HEIGHT_PORCENTAGE = 0.17;

const styles = StyleSheet.create({
  card: {
    height: metrics.screenHeight * WIDHT_PORCENTAGE,
    width: metrics.screenWidth * HEIGHT_PORCENTAGE,
    borderRadius: metrics.smallRadius,
    borderColor: colors.colorPrimary,
    borderWidth: metrics.baseBorder,
    margin: 1,
    backgroundColor: colors.backgroundColor,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: metrics.baseElevation,
  },
  cardWhite: {
    alignItems: 'center',
    justifyContent: 'space-around',
    flex: 1,
    margin: 2,
  },
  cardCenter: {
    flex: 4,
    flexDirection: 'row',
    borderRadius: metrics.smallRadius,
    alignItems: 'stretch',
    justifyContent: 'space-around',
    width: metrics.screenWidth * 0.14,
    backgroundColor: colors.colorPrimary,
  },
  text: {
    flex: 1,
    fontSize: fonts.regular,
    fontWeight: 'bold',
    color: colors.colorPrimary,
  },
  circle: {
    height: metrics.screenHeight * 0.02,
    width: metrics.screenWidth * 0.03,
    borderRadius: 50,
    backgroundColor: colors.colorBackground,
  },
  image: {
    alignSelf: 'center',
    resizeMode: 'center',
    width: metrics.screenWidth * 0.13,
  },
  containerContent: {
    flex: 4,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'stretch',
    padding: 2,
    width: metrics.screenWidth * 0.14,
    borderRadius: metrics.smallRadius,
    backgroundColor: colors.colorPrimary,
  },
  containerCircles: {
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

export default styles;
