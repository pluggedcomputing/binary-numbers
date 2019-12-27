import {StyleSheet} from 'react-native';
import {colors, metrics, fonts} from '../../styles';

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.colorPrimary,
    height: 65,
    width: metrics.screenWidth / 2,
  },
  textButton: {
    fontSize: fonts.title,
    textTransform: 'uppercase',
    color: colors.textColorSecondary,
  },
});

export default styles;
