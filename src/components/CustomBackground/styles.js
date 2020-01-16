import {StyleSheet} from 'react-native';

import {colors, metrics, fonts} from '../../styles';

const WIDHT_PORCENTAGE = 0.9;
const HEIGHT_PORCENTAGE = 0.3;

const styles = StyleSheet.create({
  container: {
    borderWidth: metrics.smallBorder,
    borderRadius: metrics.smallRadius,
    borderColor: colors.textcolorPrimary,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.colorBackground,
    height: metrics.screenHeight * HEIGHT_PORCENTAGE,
    width: metrics.screenWidth * WIDHT_PORCENTAGE,
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 3,
    padding: metrics.basePadding,
    transform: [{rotate: '2deg'}],
  },
  buttonsContainer: {
    flex: 0.5,
    marginTop: metrics.smallMargin,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  Icon: {
    width: 20,
    height: 20,
    margin: 5,
    resizeMode: 'contain',
  },
  textCont: {
    flex: 0.5,
    fontSize: fonts.medium,
    color: colors.textColorPrimary,
    fontWeight: 'bold',
    alignSelf: 'flex-end',
    padding: metrics.basePadding,
  },
});

export default styles;
