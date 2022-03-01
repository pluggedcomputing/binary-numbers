import {StyleSheet} from 'react-native';

import {colors, metrics} from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: metrics.screenWidth,
    height: metrics.screenHeight,
    backgroundColor: colors.colorBackgroundTertiary,
  },
  boxContainer: {
    margin:metrics.smallMargin,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  
});

export default styles;
