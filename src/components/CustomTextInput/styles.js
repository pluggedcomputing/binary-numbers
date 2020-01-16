import {StyleSheet} from 'react-native';
import {colors, metrics, fonts} from '../../styles';

const WIDTH_PORCENTAGE = 0.7;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    height: 40,
    width: metrics.screenWidth * WIDTH_PORCENTAGE,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  input: {
    flex: 4,
    color: colors.textColorPrimary,
    fontSize: fonts.input,
    fontWeight: 'bold',
    backgroundColor: colors.colorBackground,
  },
  iconSecure: {
    flex: 1,
  },
});

export default styles;
