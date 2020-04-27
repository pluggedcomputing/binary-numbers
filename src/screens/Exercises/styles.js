import {StyleSheet} from 'react-native';

import {general, colors, metrics} from '../../styles';

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
  statementImageConteiner: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  statementImage: {
    resizeMode: 'contain',
    width: 150,
    height: 150,
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
