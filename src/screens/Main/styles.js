import {StyleSheet} from 'react-native';
import {colors, metrics, fonts} from '../../styles';

const HEIGHT_PORCENTAGE = 0.4;
const WIDTH_PORCENTAGE = 0.8;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: metrics.screenWidth,
    height: metrics.screenHeight,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.colorBackground,
  },
  logo: {
    width: metrics.screenWidth * WIDTH_PORCENTAGE,
    height: metrics.screenHeight * HEIGHT_PORCENTAGE,
  },
  title: {
    margin: 5,
    textAlign: 'center',
    fontSize: 50,
    fontWeight: 'bold',
    color: colors.colorPrimary,
  },
  subTitle: {
    margin: 5,
    textAlign: 'center',
    fontSize: fonts.title,
    color: colors.textColorPrimary,
  },
  buttons: {
    margin: 5,
  },
});

export default styles;
