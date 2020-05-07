import {StyleSheet} from 'react-native';

import {colors, metrics, general} from '../../styles';

const WIDHT_PORCENTAGE = 0.9;
const HEIGHT_PORCENTAGE = 0.4;

const styles = StyleSheet.create({
  container: {
    marginRight: metrics.smallPadding,
    marginLeft: metrics.smallPadding,
  },
  listContainer: {
    marginRight: metrics.smallPadding,
    marginLeft: metrics.smallPadding,
    height: metrics.screenHeight * HEIGHT_PORCENTAGE,
    width: metrics.screenWidth * WIDHT_PORCENTAGE,
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
  },
  footer: {
    flex: 0.3,
    justifyContent: 'center',
    marginBottom: metrics.smallMargin,
  },
  iconsContainer: {
    marginTop: metrics.baseMargin,
    flexDirection: 'row',
  },
  textCont: {
    alignSelf: 'flex-end',
    color: colors.textColorPrimary,
    padding: metrics.basePadding,
  },
});

export default styles;
