import {StyleSheet} from 'react-native';

import {colors, metrics, fonts, general} from '../../styles';

const WIDHT_PORCENTAGE = 0.9;
const HEIGHT_PORCENTAGE = 0.33;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: metrics.screenHeight * HEIGHT_PORCENTAGE,
    width: metrics.screenWidth * WIDHT_PORCENTAGE,
    paddingTop: metrics.baseMargin,
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
    ...general.defaultShadow,
  },
  footer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: metrics.smallMargin,
  },
  iconsContainer: {
    marginTop: metrics.baseMargin,
    flexDirection: 'row',
  },
  textCont: {
    alignSelf: 'flex-end',
    alignContent: 'flex-end',
    fontSize: fonts.regular,
    color: colors.textColorPrimary,
    fontWeight: 'bold',
    padding: metrics.basePadding,
  },
});

export default styles;
