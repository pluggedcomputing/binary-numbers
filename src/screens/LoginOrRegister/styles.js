import {StyleSheet} from 'react-native';
import {metrics} from '../../styles';

const HEIGHT_PORCENTAGE = 0.2;
const WIDTH_PORCENTAGE = 0.41;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: metrics.screenWidth,
    height: metrics.screenHeight,
    alignItems: 'center',
  },
  containerImage: {
    width: metrics.screenWidth * WIDTH_PORCENTAGE,
    height: metrics.screenHeight * HEIGHT_PORCENTAGE,
    margin: 10,
    resizeMode: 'contain',
  },
});

export default styles;
