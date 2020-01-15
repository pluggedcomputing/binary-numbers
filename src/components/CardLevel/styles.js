import {StyleSheet} from 'react-native';
import {colors, metrics, fonts} from '../../styles';

const HEIGHT_PORCENTAGE = 0.25;
const WIDTH_PORCENTAGE = 0.3;

const styles = StyleSheet.create({
  container: {
    height: metrics.screenHeight * HEIGHT_PORCENTAGE,
    width: metrics.screenWidth * WIDTH_PORCENTAGE,
    backgroundColor: colors.colorBackground,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 6,
    borderRadius: 5,
    elevation: 4,
  },
  subContainer: {
    flex: 1,
    margin: 3,
    width: metrics.screenWidth * 0.26,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.colorPrimary,
    borderRadius: 5,
  },
  imageLevel: {
    flex: 3,
    width: metrics.screenWidth * 0.25,
    resizeMode: 'contain',
  },
  textLevel: {
    flex: 1,
    fontSize: fonts.title,
    fontWeight: 'bold',
    color: colors.textColorSecondary,
  },
});

export default styles;
