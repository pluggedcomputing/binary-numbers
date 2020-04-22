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
    color: colors.textColorPrimary,
  },
  statement: {
    textAlign: 'center',
    fontSize: fonts.input,
    fontWeight: 'bold',
    color: colors.textColorPrimary,
  },
});

export default styles;
