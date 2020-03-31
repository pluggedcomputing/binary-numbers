import {StyleSheet} from 'react-native';

import {colors, fonts} from '../../styles';

const styles = StyleSheet.create({
  contentText: {
    textAlign: 'center',
    fontSize: fonts.regular,
    fontWeight: 'bold',
    color: colors.textColorPrimary,
    margin: 10,
  },
  cardGroup: {
    flexDirection: 'row',
  },
});

export default styles;
