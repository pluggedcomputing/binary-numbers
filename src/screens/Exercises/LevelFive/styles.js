import {StyleSheet} from 'react-native';

import {colors, fonts, metrics} from '../../../styles';

const styles = StyleSheet.create({
  containerScrollView: {
    backgroundColor: colors.colorBackground,
  },
  container: {
    height: metrics.screenHeight * 0.96,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  contentText: {
    textAlign: 'center',
    fontSize: fonts.regular,
    fontWeight: 'bold',
    color: colors.textColorPrimary,
  },
  textQuestion: {
    textAlign: 'center',
    fontSize: fonts.input,
    fontWeight: 'bold',
    color: colors.textColorPrimary,
  },
  containerText: {
    height: metrics.screenHeight * 0.3,
    justifyContent: 'center',
  },
  progressBar: {
    width: metrics.screenWidth,
  },
  containerTable: {
    height: metrics.screenHeight * 0.3,
    justifyContent: 'space-around',
    marginTop: metrics.baseMargin,
    marginBottom: metrics.baseMargin,
    alignItems: 'center',
  },
  input: {
    height: 40,
  },
  image: {
    resizeMode: 'contain',
    width: metrics.screenWidth * 0.8,
    height: metrics.screenHeight * 0.2,
  },
  containerContent: {
    height: metrics.screenHeight * 0.25,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

export default styles;
