import {StyleSheet} from 'react-native';
import {colors, metrics, fonts} from '../../styles';

const widthPorcentage = 0.4;

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.colorPrimary,
    height: 65,
    width: metrics.screenWidth * widthPorcentage,
  },
  textButton: {
    fontSize: fonts.title,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: colors.textColorSecondary,
  },
});

export default styles;
