import {StyleSheet} from 'react-native';

import {colors, metrics} from '../../styles';

const HEIGHT_PORCENTAGE = 0.9;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: metrics.basePadding,
    width: metrics.screenWidth * HEIGHT_PORCENTAGE,
  },
  button: {
    alignItems: 'center',
    backgroundColor: colors.colorPrimary,
    borderRadius: metrics.baseRadius,
    padding: metrics.basePadding,
  },
  text: {
    fontWeight: 'bold',
    color: colors.textColorSecondary,
    textTransform: 'uppercase',
  },
});

export default styles;
