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
    height: metrics.screenHeight / 1.9,
    justifyContent: 'center',
  },
  info: {
    marginTop: metrics.baseMargin,
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
    marginLeft: metrics.baseMargin,
    marginRight: metrics.baseMargin,
    height: metrics.screenHeight / 4,
    textAlign: 'center',
  },
});

export default styles;
