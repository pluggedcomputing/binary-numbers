import {StyleSheet} from 'react-native';

import {metrics} from '../../styles';

const HEIGHT_PORCENTAGE = 0.2;
const WIDTH_PORCENTAGE = 0.41;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: metrics.statusBarHeight,
    width: metrics.screenWidth,
    height: metrics.screenHeight,
    alignItems: 'center',
  },
  scrollView: {
    justifyContent: 'center',
    alignItems: 'center',
    width: metrics.screenWidth,
  },
  containerImage: {
    width: metrics.screenWidth * WIDTH_PORCENTAGE,
    height: metrics.screenHeight * HEIGHT_PORCENTAGE,
    marginTop: metrics.doubleBaseMargin,
    resizeMode: 'contain',
  },
});

export default styles;
