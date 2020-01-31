import {StyleSheet} from 'react-native';

import {fonts, metrics, colors} from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: metrics.basePadding,
    alignItems: 'center',
  },
  title: {
    flex: 5,
    fontWeight: 'bold',
    fontSize: fonts.title,
  },
  icon: {
    color: colors.colorPrimary,
    margin: metrics.smallPadding,
  },
});

export default styles;
