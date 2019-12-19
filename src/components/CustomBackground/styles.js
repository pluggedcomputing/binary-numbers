import {StyleSheet} from 'react-native';
import {colors, metrics} from '../../styles';

const WIDHT_PORCENTAGE = 0.9
const CENTER_PORCENTAGE = 0.6
const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 0.5,
    borderRadius: 5,
    borderColor: colors.textcolorPrimary,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.textColorSecondary,
    height: metrics.screenHeight/3,
    width: metrics.screenWidth * WIDHT_PORCENTAGE,
    marginLeft: 20,
    marginRight: 20,
    marginTop: metrics.screenWidth * CENTER_PORCENTAGE,
    position: "absolute"
  },
  loadButton: {
    flexDirection: 'row',
  },
  nextIcon: {
    width: 20,
    height:20,
    resizeMode: 'contain'
  },
  previousIcon: {
    width: 20,
    height:20,
    resizeMode: 'contain',
  },
  button: {
    alignItems: 'center',
    marginHorizontal: 4,
  },
});

export default styles;
