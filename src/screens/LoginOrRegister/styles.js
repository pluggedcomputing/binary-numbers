import {StyleSheet} from 'react-native';
import {colors, metrics} from '../../styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.colorPrimary,
    width: metrics.screenWidth,
    height: metrics.screenHeight,
    alignItems: 'center',
  },
  containerImage: {
    width: 140,
    height: 140,
    alignSelf: 'center',
    marginTop: 60,
  },
  containerScrollView: {
    width: '100%',
    marginBottom: 30,
  },
});

export default styles;
