import {StyleSheet} from 'react-native';
import {colors} from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10
  },
  button: {
    alignItems: 'center',
    backgroundColor: colors.colorPrimary,
    borderRadius: 10,
    padding: 10
  },
  text: {
    fontWeight:'bold',
    color: colors.textColorSecondary
  }
})

export default styles;