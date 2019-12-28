import {StyleSheet} from 'react-native';
import {colors, metrics,fonts } from '../../styles';

const styles = StyleSheet.create({
	container: {
    flex: 1,
		backgroundColor: colors.colorBackground,
		width: metrics.screenWidth,
		height: metrics.screenHeight,
    alignItems: 'center',
	},
	logo: {
		alignSelf: 'center',
    marginTop: 40,
    resizeMode: 'contain',
    width: 150,
    height: 150
  },
  loadText:{
    flexDirection: 'row',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0
  },
  text: {
    fontSize: fonts.regular,
    fontWeight: 'bold',
    color: colors.textColorSecondary,
    margin: metrics.doubleBaseMargin,
    textAlign: 'center'
  },
  textContent:{
    fontSize: fonts.regular,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});


export default styles;