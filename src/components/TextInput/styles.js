import { StyleSheet } from 'react-native';
import { colors, metrics, fonts } from '../../styles';

const styles = StyleSheet.create({
	containerBase: {
		backgroundColor: colors.colorBackground,
		paddingTop: 15,
		paddingBottom: 5,
		alignItems: 'center',
		justifyContent: 'center'
	},
	container: {
		width: '85%',
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'row',
		height: 40
	},
	containerInput: {
		backgroundColor: colors.colorBackground,
		width: metrics.inputWidth,
		paddingLeft: metrics.doubleBaseMargin,
		fontSize: fonts.input,
		color: colors.textColorPrimary
	},
	lineBottom: {
		borderBottomColor: '#000000',
		borderBottomWidth: 2,
		width: '80%'
	}
});

export default styles;
