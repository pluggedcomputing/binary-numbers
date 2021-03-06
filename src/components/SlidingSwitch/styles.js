import {StyleSheet} from 'react-native';

import {colors, metrics, general} from '../../styles';

const styles = StyleSheet.create({
  container: {
    height: 55,
    width: metrics.containerBase / 1.1,
    flexDirection: 'row',
    backgroundColor: colors.colorBackground,
    alignItems: 'center',
    justifyContent: 'space-around',
    borderWidth: metrics.smallBorder,
    borderColor: colors.colorBackground,
    borderRadius: metrics.tripleRadius,
    marginTop: metrics.doubleBaseMargin,
    marginBottom: metrics.doubleBaseMargin,
  },
  switcher: {
    flexDirection: 'row',
    position: 'absolute',
    backgroundColor: colors.colorPrimary,
    borderRadius: metrics.tripleRadius,
    height: 53,
    alignItems: 'center',
    justifyContent: 'center',
    ...general.defaultShadow,
  },
  textColor: {
    color: colors.textColorPrimary,
  },
});

export default styles;
