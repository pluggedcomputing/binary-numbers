import {StyleSheet} from 'react-native';
import {colors, metrics, fonts} from '../../../styles';

const styles = StyleSheet.create({
  containerBase: {
    alignItems: 'center',
    position: 'relative',
    paddingTop: 160,
  },
  containerBody: {
    position: 'absolute',
    backgroundColor: colors.colorBackground,
    width: (metrics.screenWidth - 45) / 1.1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: metrics.smallBorder,
    borderColor: colors.colorBackground,
    borderRadius: metrics.baseRadius,
    paddingTop: metrics.halfMargin,
    paddingBottom: metrics.halfMargin,
  },
  lineBottom: {
    marginBottom: metrics.doubleBaseMargin,
    borderBottomColor: colors.textColorPrimary,
    borderBottomWidth: metrics.smallBorder,
    width: '80%',
  },
  linerWriteSmall: {
    marginBottom: metrics.doubleBaseMargin,
    borderBottomColor: colors.colorBackground,
    borderBottomWidth: metrics.smallBorder,
    width: 90,
  },
  text: {
    color: colors.colorBackground,
    fontWeight: 'bold',
    fontSize: fonts.title,
    alignSelf: 'center',
    marginBottom: metrics.doubleBaseMargin,
    marginTop: metrics.baseMargin,
  },
  containeFooter: {
    marginTop: metrics.baseMargin,
    width: metrics.containerBase / 1.1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
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
  },
  containerButtonsOptions: {
    width: 120,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: metrics.baseMargin,
  },
});

export default styles;
