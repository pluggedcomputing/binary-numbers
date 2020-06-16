import {StyleSheet} from 'react-native';

import {fonts, metrics, colors} from '../../styles';

const styles = StyleSheet.create({
  button: {
    flex: 1,
    width: metrics.containerBase / 2.2,
    height: 54,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: fonts.input,
    fontFamily: 'Poppins-Bold',
    color: colors.textColorSecondary,
  },
});

export default styles;
