import {StyleSheet} from 'react-native';

import {colors, metrics} from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: metrics.screenWidth,
    height: metrics.screenHeight,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  text: {
    color: colors.colorBackground,
    fontSize: 50,
    fontWeight: 'bold',
    margin: metrics.smallMargin,
  }
});

export default styles;