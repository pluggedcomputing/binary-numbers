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
  descriptive: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: colors.colorBackground,
  },
  subDescriptive: {
    justifyContent: 'space-between',
    height: metrics.screenHeight * 0.25,
    padding: 5,
  },
  containerGroup: {
    flex: 5,
    justifyContent: 'flex-start',
    alignItems: 'center',
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
});

export default styles;
