import {StyleSheet} from 'react-native';
import {colors, metrics} from '../../styles';ns

const widhtScreen = 0.9

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
    width: metrics.screenWidth * widhtScreen
  },
  button: {
    alignItems: 'center',
    backgroundColor: colors.colorPrimary,
    borderRadius: metrics.baseRadius,
    padding: 10
  },
  text: {
    fontWeight:'bold',
    color: colors.textColorSecondary,
    textTransform: 'uppercase'
  }
})

export default styles;