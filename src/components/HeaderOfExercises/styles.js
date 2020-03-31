import {StyleSheet} from 'react-native';

import Constants from 'expo-constants';

import {general, fonts, metrics, colors} from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: Constants.statusBarHeight,
    width: metrics.screenWidth,
    ...general.defaultShadow,
  },
  content: {
    backgroundColor: colors.textColorSecondary,
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    flex: 1,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: fonts.header,
  },
  icon: {
    color: colors.colorPrimary,
    margin: metrics.basePadding,
  },
  defaultTips: {
    fontSize: fonts.regular,
    fontWeight: 'bold',
  },
});

export default styles;
