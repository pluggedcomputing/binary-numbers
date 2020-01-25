import {StyleSheet} from 'react-native';

import {colors, metrics} from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: metrics.screenWidth,
    height: metrics.screenHeight ,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  text1: {
    flex: 1,
    textAlign: 'center',
    color: colors.textColorSecondary,
    fontSize: metrics.screenWidth * 0.14,
    fontWeight: 'bold',
    justifyContent: 'flex-start',
    margin: metrics.baseMargin,
    paddingVertical: 150
  },
  text2: {
    flex: 1,
    textAlign: 'center',
    color: colors.textColorSecondary,
    fontSize: metrics.screenWidth * 0.1,
    fontWeight: 'bold',
    justifyContent: 'flex-end',
    margin: metrics.baseMargin,
  },
});

export default styles;