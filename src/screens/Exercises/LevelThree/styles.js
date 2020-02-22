import {StyleSheet} from 'react-native';

import {colors, metrics, fonts} from '../../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.colorBackground,
  },
  cardGroup: {
    flexDirection: 'row',
  },
  contentText: {
    textAlign: 'center',
    fontSize: fonts.regular,
    fontWeight: 'bold',
    color: colors.textColorPrimary,
  },
  statement: {
    textAlign: 'center',
    fontSize: fonts.input,
    fontWeight: 'bold',
    color: colors.textColorPrimary,
  },
  progressBar: {
    width: metrics.screenWidth,
  },
  button: {
    width: metrics.screenWidth * 0.8,
    height: metrics.screenHeight * 0.06,
    margin: metrics.halfMargin,
  },
  image: {
    margin: metrics.halfMargin,
    resizeMode: 'contain',
    width: metrics.screenWidth * 0.7,
    height: metrics.screenHeight * 0.14,
  },
  input: {
    width: metrics.screenWidth * 0.6,
    borderColor: colors.textColorPrimary,
  },
});

export default styles;
