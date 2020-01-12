import {StyleSheet} from 'react-native';
import {colors, metrics, fonts} from '../../styles';

const HEIGHT_PORCENTAGE = 0.1;
const WIDTH_PORCENTAGE = 0.4;

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.colorPrimary,
    height: metrics.screenHeight * HEIGHT_PORCENTAGE,
    width: metrics.screenWidth * WIDTH_PORCENTAGE,
    elevation: 4,
  },
  textButton: {
    fontSize: fonts.title,
    textTransform: 'uppercase',
    color: colors.textColorSecondary,
  },
});

export default styles;
