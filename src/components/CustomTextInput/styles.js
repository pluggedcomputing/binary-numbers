import {StyleSheet} from 'react-native';
import {colors, metrics, fonts} from '../../styles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 40,
    width: metrics.inputWidth,
    alignItems: 'center',
  },
  input: {
    width: metrics.inputWidth,
    color: colors.textColorPrimary,
    fontSize: fonts.input,
    fontWeight: 'bold',
    backgroundColor: colors.colorBackground,
  },
});

export default styles;
