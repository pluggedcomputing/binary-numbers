import {StyleSheet} from 'react-native';

import {general, colors, metrics} from '../../styles';

const styles = StyleSheet.create({
  container: {
    ...general.defaultContainer,
    height: metrics.screenHeight,
  },
  halfView: {
    flex: 1,
  },
  halfViewKeyBoard: {
    flex: 1.1,
    justifyContent: 'space-around',
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
    width: metrics.screenWidth * 0.6,
    height: metrics.screenHeight * 0.1,
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
