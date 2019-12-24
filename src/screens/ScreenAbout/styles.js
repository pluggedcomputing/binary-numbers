import {StyleSheet} from 'react-native';
import {colors, metrics,fonts } from '../../styles';

const styles = StyleSheet.create({
	container: {
    flex: 1,
		backgroundColor: colors.colorPrimary,
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
    paddingHorizontal: 20,
    left: 0,
    right: 0,
    bottom: 0
  },
  text: {
    fontSize: fonts.regular,
    fontWeight: 'bold',
    color: colors.colorBackground,
    margin: metrics.doubleBaseMargin,
    textAlign: 'center'
  }
});


export default styles;