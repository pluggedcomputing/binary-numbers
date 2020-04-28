import {StyleSheet} from 'react-native';

import {general, colors, metrics} from '../../styles';

const styles = StyleSheet.create({
  container: {
    ...general.defaultContainer,
    height: metrics.screenHeight,
    justifyContent: 'flex-end',
  },
  halfView: {
    height: metrics.screenHeight / 2,
    justifyContent: 'space-around',
    alignItems: 'center',
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
    height: metrics.screenHeight / 4,
    textAlign: 'center',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});

export default styles;
