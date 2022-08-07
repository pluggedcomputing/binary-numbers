import {StyleSheet} from 'react-native';

import {colors} from '../../styles';

const styles = StyleSheet.create({
  contentText: {
    textAlign: 'center',

    color: colors.textColorPrimary,
    margin: 10,
  },
  cardGroup: {
    flexDirection: 'row',
    justifyContent:'center'
  },
});

export default styles;
