import {StyleSheet} from 'react-native';

import {metrics, colors} from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: metrics.screenHeight,
    width: metrics.screenWidth,
    padding: metrics.basePadding,
  },
  borderStyles: {
    borderWidth: 1,
    borderColor: colors.textColorPrimary,
    borderRadius: metrics.baseRadius,
  },
  rows: {
    margin: metrics.baseMargin,
  },
});

export default styles;
