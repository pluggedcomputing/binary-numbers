import {StyleSheet} from 'react-native';
import {colors, metrics, fonts} from '../../styles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 40,
    width: metrics.baseSliding,
    alignItems: 'center',
  },
  input: {
    height: 45,
    width: metrics.inputWidth,
    color: colors.textColorPrimary,
    fontSize: fonts.input,
    marginLeft: metrics.baseMargin,
    marginRight: metrics.baseMargin,
  },
});

export default styles;
