import {StyleSheet} from 'react-native';

import {metrics, colors} from '../../styles';

const styles = StyleSheet.create({
  frame: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.8)',
  },
  container: {
    backgroundColor: colors.colorBackground,
    alignItems: 'center',
    justifyContent: 'center',
    margin: metrics.halfMargin,
    padding: metrics.smallPadding,
  },
  contentTips: {
    alignItems: 'stretch',
  },
  tip: {
    padding: metrics.basePadding,
  },
});

export default styles;
