import {StyleSheet} from 'react-native';

import {colors, fonts, metrics} from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    justifyContent: 'space-around',
  },
  content: {
    flex: 1,
    width: metrics.screenWidth,
    height: metrics.screenHeight,
    marginTop: 50,
  },
  textTop: {
    flex: 4,
    textAlign: 'center',
    color: colors.textColorSecondary,
    fontSize: metrics.screenWidth * 0.14,
    fontFamily: 'Poppins-Bold',
  },
  textEnd: {
    flex: 1,
    textAlign: 'center',
    color: colors.textColorSecondary,
    fontSize: metrics.screenWidth * 0.1,
    fontFamily: 'Poppins-Bold',
  },
  textButton: {
    color: colors.colorBackground,
    textDecorationLine: 'underline',
    fontSize: fonts.title,
    fontFamily: 'Poppins-Bold',
  },
  buttonAltenative: {
    alignItems: 'center',
    marginTop: metrics.halfMargin,
    marginBottom: 30,
  },
});

export default styles;
