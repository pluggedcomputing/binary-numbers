import {StyleSheet} from 'react-native';
import {colors, metrics} from '../../styles';

const styles = StyleSheet.create({
  container: {
    height: 55,
    width: metrics.containerBase / 1.1,
    flexDirection: 'row',
    backgroundColor: colors.colorBackground,
    alignItems: 'center',
    justifyContent: 'space-around',
    borderWidth: 1,
    borderColor: colors.colorBackground,
    borderRadius: metrics.radiusBorder,
    marginTop: metrics.halfMargin,
    marginBottom: metrics.halfMargin,
  },
  switcher: {
    flexDirection: 'row',
    position: 'absolute',
    backgroundColor: colors.colorPrimary,
    borderRadius: 28,
    height: 53,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
    shadowOpacity: 0.31,
    shadowRadius: 10,
    shadowColor: '#A69E9E',
  },
});

export default styles;
