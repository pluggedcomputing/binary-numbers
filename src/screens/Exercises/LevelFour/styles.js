import {StyleSheet} from 'react-native';

import {colors, metrics} from '../../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    height: metrics.screenHeight * 0.96,
    backgroundColor: colors.colorBackground,
  },
  subContainer: {
    height: metrics.screenHeight * 0.38,
  },
  progressBar: {
    width: metrics.screenWidth,
  },
  tree: {
    height: metrics.screenHeight * 0.36,
  },
  rowContainer: {
    marginTop: 6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: metrics.screenWidth * 0.8,
  },
  input: {
    height: 40,
  },
});

export default styles;
