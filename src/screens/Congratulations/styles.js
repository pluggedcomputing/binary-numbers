import {StyleSheet} from 'react-native';

import {colors, general, fonts, metrics} from '../../styles';

const styles = StyleSheet.create({
  container: {
    ...general.defaultContainer,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    justifyContent: 'space-around',
  },
  textTop: {
    flex: 4,
    textAlign: 'center',
    color: colors.textColorSecondary,
    fontSize: metrics.screenWidth * 0.14,
    fontWeight: 'bold',
  },
  textEnd: {
    flex: 1,
    textAlign: 'center',
    color: colors.textColorSecondary,
    fontSize: metrics.screenWidth * 0.1,
    fontWeight: 'bold',
  },
  textButton: {
    color: colors.colorBackground,
    textDecorationLine: 'underline',
    fontSize: fonts.title,
    fontWeight: 'bold',
  },
  buttonAltenative: {
    alignItems: 'center',
    marginTop: metrics.halfMargin,
    marginBottom: 30,
  },
});

export default styles;
