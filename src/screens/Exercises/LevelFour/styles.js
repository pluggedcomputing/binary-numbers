import {StyleSheet} from 'react-native';

import {colors, metrics, fonts} from '../../../styles';

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
  componetTree: {
    alignItems: 'center',
  },
  componentAnswer: {
    flex: 7,
    alignItems: 'center',
  },
  text: {
    fontSize: fonts.input,
    marginBottom: metrics.doubleBaseMargin,
  },
  textAnswer: {
    marginBottom: metrics.doubleBaseMargin,
    fontSize: fonts.title,
  },
});

export default styles;
