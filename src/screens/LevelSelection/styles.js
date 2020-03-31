import {StyleSheet} from 'react-native';

import {colors, metrics} from '../../styles';

const styles = StyleSheet.create({
  container: {
    marginTop: metrics.statusBarHeight,
    flex: 1,
    width: metrics.screenWidth,
    height: metrics.screenHeight,
    backgroundColor: colors.colorBackground,
  },
  boxContainer: {
    margin: metrics.doubleBaseMargin,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: colors.colorBackground,
  },
});

export default styles;
