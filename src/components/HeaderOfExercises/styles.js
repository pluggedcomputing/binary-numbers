import {StyleSheet} from 'react-native';

import {fonts, metrics, colors} from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: metrics.basePadding,
  },
  title: {
    flex: 5,
    fontWeight: 'bold',
    fontSize: fonts.header,
  },
  icon: {
    color: colors.colorPrimary,
    margin: metrics.smallPadding,
  },
  defaultTips: {
    fontSize: fonts.regular,
    fontWeight: 'bold',
  },
});

export default styles;
