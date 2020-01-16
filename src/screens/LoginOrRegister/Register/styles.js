import {StyleSheet} from 'react-native';
import {metrics, colors} from '../../../styles';

const styles = StyleSheet.create({
  containerBase: {
    alignItems: 'center',
    position: 'relative',
    paddingTop: 325,
  },
  containerBody: {
    position: 'absolute',
    backgroundColor: colors.colorBackground,
    width: metrics.containerBase / 1.1,
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
});

export default styles;
