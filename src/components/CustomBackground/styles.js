import {StyleSheet} from 'react-native';

import {colors, metrics} from '../../styles';

const WIDHT_PORCENTAGE = 0.9;
const HEIGHT_PORCENTAGE = 0.3;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1.5,
    borderRadius: 5,
    borderColor: colors.textcolorPrimary,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.colorBackground,
    height: metrics.screenHeight * HEIGHT_PORCENTAGE,
    width: metrics.screenWidth * WIDHT_PORCENTAGE,
  },
  content: {
    flex: 3,
    padding: 10,
    transform: [{rotate: '2deg'}],
  },
  buttonsContainer: {
    flex: 0.5,
    marginTop: 5,
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
    color: colors.textColorPrimary,
    fontWeight: 'bold',
    alignSelf: 'flex-end',
    padding: 5,
  },
});

export default styles;
