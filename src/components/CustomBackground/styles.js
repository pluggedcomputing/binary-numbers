import {StyleSheet} from 'react-native';
import {colors, metrics} from '../../styles';

const WIDHT_PORCENTAGE = 0.9
const CENTER_PORCENTAGE = 0.6
const HEIGHT_PORCENTAGE = 0.333
const MARGINLEFT_TEXT = 260


const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1.5,
    borderRadius: 5,
    borderColor: colors.textcolorPrimary,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.textColorSecondary,
    height: metrics.screenHeight * HEIGHT_PORCENTAGE,
    width: metrics.screenWidth * WIDHT_PORCENTAGE,
    marginTop: metrics.screenWidth * CENTER_PORCENTAGE,
    position: "absolute"
  },
  loadButton: {
    flexDirection: 'row',
    position: 'absolute'
  },
  Icon: {
    width: 20,
    height:20,
    resizeMode: 'contain',
  },
  button: {
    marginHorizontal: 4,
    marginTop: 160
  },
  contain: {
    padding: 10,
    resizeMode: 'contain',
  },
  textCont: {
    alignContent: 'flex-end',
    marginTop: 160,
    marginLeft: MARGINLEFT_TEXT,
  }
});

export default styles;
