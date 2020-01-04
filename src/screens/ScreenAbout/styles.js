import {StyleSheet} from 'react-native';
import {colors, metrics, fonts} from '../../styles';

const HEIGHT_PORCENTAGE = 0.2;
const WIDTH_PORCENTAGE = 0.3;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: metrics.screenWidth,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  logo: {
    resizeMode: 'contain',
    width: metrics.screenWidth * WIDTH_PORCENTAGE,
    height: metrics.screenHeight * HEIGHT_PORCENTAGE,
  },
  credits: {
    fontSize: fonts.regular,
    fontWeight: 'bold',
    color: colors.textColorSecondary,
    textAlign: 'center',
  },
  textContent: {
    fontSize: fonts.regular,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default styles;
