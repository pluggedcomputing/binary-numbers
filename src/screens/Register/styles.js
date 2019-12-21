import {StyleSheet} from 'react-native';
import {metrics, colors} from '../../styles';

const styles = StyleSheet.create({
  containerBase: {
    alignItems: 'center',
    position: 'relative',
    paddingTop: 320,
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
    marginBottom: 20,
    borderBottomColor: '#000000',
    borderBottomWidth: 2,
    width: '80%',
  },
});

export default styles;
