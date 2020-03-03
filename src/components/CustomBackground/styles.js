import {StyleSheet} from 'react-native';

import {colors, metrics, fonts, general} from '../../styles';

const WIDHT_PORCENTAGE = 0.9;
const HEIGHT_PORCENTAGE = 0.33;

const styles = StyleSheet.create({
  container: {
    height: metrics.screenHeight * HEIGHT_PORCENTAGE,
    width: metrics.screenWidth * WIDHT_PORCENTAGE,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: metrics.smallBorder,
    borderRadius: metrics.baseRadius,
    borderColor: colors.textColorSecondary,
    backgroundColor: colors.textColorSecondary,
    ...general.defaultShadow,
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 3,
    padding: metrics.basePadding,
    transform: [{rotate: '2deg'}],
    ...general.defaultShadow,
  },
  iconsContainer: {
    flex: 0.5,
    marginTop: metrics.smallMargin,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  textCont: {
    flex: 0.5,
    fontSize: fonts.regular,
    color: colors.textColorPrimary,
    fontWeight: 'bold',
    alignSelf: 'flex-end',
    padding: metrics.basePadding,
  },
});

export default styles;
