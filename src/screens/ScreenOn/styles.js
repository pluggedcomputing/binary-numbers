import {StyleSheet} from 'react-native';
import {colors, metrics} from '../../styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.colorBackground,
    width: metrics.screenWidth,
    height: metrics.screenHeight,
    alignItems: 'center'
  },
  logo: {
    marginTop: 30
  }
})

export default styles;