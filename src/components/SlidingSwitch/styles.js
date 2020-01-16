import {StyleSheet} from 'react-native';

import {colors, metrics} from '../../styles';

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
    marginTop: metrics.halfMargin,
    marginBottom: metrics.halfMargin,
  },
  switcher: {
    flexDirection: 'row',
    position: 'absolute',
    backgroundColor: colors.colorPrimary,
    borderRadius: metrics.tripleRadius,
    height: 53,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: metrics.baseElevation,
    shadowOpacity: 0.3,
    shadowRadius: metrics.baseRadius,
    shadowColor: '#A69E9E',
  },
  textColor: {
    color: colors.textColorPrimary,
  },
});

export default styles;
