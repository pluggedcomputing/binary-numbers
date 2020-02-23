import {StyleSheet} from 'react-native';

import {colors, metrics, fonts} from '../../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.colorBackground,
  },
  header: {
    flex: 1,
    width: metrics.screenWidth,
    paddingRight: metrics.basePadding,
    paddingLeft: metrics.basePadding,
  },
  info: {
    flex: 5,
    justifyContent: 'center',
  },
  statement: {
    textAlign: 'center',
    fontSize: fonts.input,
    fontWeight: 'bold',
    color: colors.textColorPrimary,
  },
  descriptive: {
    margin: metrics.baseMargin,
    height: metrics.screenWidth * 0.8,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  subDescriptive: {
    height: metrics.screenHeight * 0.21,
  },
  buttonGroup: {
    flex: 5,
    justifyContent: 'center',
  },
  button: {
    width: metrics.screenWidth * 0.8,
    height: metrics.screenHeight * 0.06,
  },
  contentText: {
    textAlign: 'center',
    fontSize: fonts.regular,
    fontWeight: 'bold',
    color: colors.textColorPrimary,
  },
  cardGroup: {
    flexDirection: 'row',
  },
  progressBar: {
    width: metrics.screenWidth,
  },
  input: {
    backgroundColor: colors.colorBackground,
    margin: 2,
    borderWidth: 2,
  },
});

export default styles;
