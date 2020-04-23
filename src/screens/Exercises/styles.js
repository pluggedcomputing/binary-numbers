import {StyleSheet} from 'react-native';

import {general, colors, metrics, fonts} from '../../styles';

const styles = StyleSheet.create({
  container: {
    ...general.defaultContainer,
    width: metrics.screenWidth,
    height: metrics.screenHeight,
  },
  halfView: {
    height: metrics.screenHeight / 2,
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
  statementImageConteiner: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  statementImage: {
    resizeMode: 'contain',
    width: metrics.screenHeight * 0.4,
  },
  icon: {
    color: colors.colorPrimary,
    margin: metrics.basePadding,
  },
  defaultText: {
    marginTop: metrics.halfMargin,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
