import {StyleSheet} from 'react-native';
import {colors, metrics, general, fonts} from '../../../styles';

const styles = StyleSheet.create({
  containerBase: {
    alignItems: 'center',
    position: 'relative',
    paddingTop: 160,
  },
  containerBody: {
    position: 'absolute',
    backgroundColor: colors.colorBackground,
    width: metrics.containerBase / 1.1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.colorBackground,
    borderRadius: metrics.baseRadius,
    paddingTop: metrics.halfMargin,
    paddingBottom: metrics.halfMargin,
  },
  lineBottom: {
    marginBottom: 15,
    borderBottomColor: colors.textColorPrimary,
    borderBottomWidth: 2,
    width: '80%',
  },
  linerWriteSmall: {
    marginBottom: 20,
    borderBottomColor: colors.colorBackground,
    borderBottomWidth: 2,
    width: 90,
  },
  text: {
    ...general.sectionTitle,
    color: colors.colorBackground,
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
    width: 200,
    marginTop: 30,
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
