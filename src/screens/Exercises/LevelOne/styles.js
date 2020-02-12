import {StyleSheet} from 'react-native';

import {colors, metrics, fonts} from '../../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.colorBackground,
  },
  header: {
    flex: 1,
    width: metrics.screenWidth,
    paddingRight: metrics.basePadding,
    paddingLeft: metrics.basePadding,
  },
  info: {
    flex: 5,
    justifyContent: 'center',
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
  cardGroup: {
    flexDirection: 'row',
  },
  buttonGroup: {
    flex: 5,
    justifyContent: 'center',
  },
  progressBar: {
    width: metrics.screenWidth,
  },
});

export default styles;
