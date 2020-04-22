import {StyleSheet} from 'react-native';

import {general, colors, metrics, fonts} from '../../styles';

const styles = StyleSheet.create({
  container: {
    ...general.defaultContainer,
  },
  info: {
    marginTop: metrics.halfMargin,
  },
  contentText: {
    textAlign: 'center',
    fontSize: fonts.regular,
    fontWeight: 'bold',
    color: colors.textColorPrimary,
  },
  statement: {
    textAlign: 'center',
    fontSize: fonts.input,
    fontWeight: 'bold',
    color: colors.textColorPrimary,
  },
  icon: {
    color: colors.colorPrimary,
    margin: metrics.basePadding,
  },
});

export default styles;
