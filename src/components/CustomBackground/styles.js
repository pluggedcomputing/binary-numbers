import {StyleSheet} from 'react-native';

import {colors, metrics, fonts} from '../../styles';

const WIDHT_PORCENTAGE = 0.9;
const HEIGHT_PORCENTAGE = 0.35;

const styles = StyleSheet.create({
  container: {
    height: metrics.screenHeight * HEIGHT_PORCENTAGE,
    width: metrics.screenWidth * WIDHT_PORCENTAGE,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: metrics.smallBorder,
    borderRadius: metrics.smallRadius,
    borderColor: colors.textcolorPrimary,
    backgroundColor: colors.textColorSecondary,
    shadowColor: colors.textColorPrimary,
    shadowOffset: {
      width: 0,
      height: -20,
    },
    shadowOpacity: 1,
    shadowRadius: 3,
    elevation: metrics.elevation,
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
    margin: 5,
    resizeMode: 'contain',
  },
  textCont: {
    flex: 0.5,
    fontSize: fonts.regular,
    color: colors.textColorPrimary,
    fontWeight: 'bold',
    alignSelf: 'flex-end',
    padding: metrics.basePadding,
  },
});

export default styles;
