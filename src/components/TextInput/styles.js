import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../styles';

const styles = StyleSheet.create({
	containerBase: {
		backgroundColor: colors.colorBackground,
		width: 300,
		height: 70,
		paddingTop: 5,
		paddingBottom: 2,
		paddingLeft: 20,
		paddingRight: 20,
		alignItems: 'center',
		justifyContent: 'space-around'
	},
	container: {
		width: '100%',
		flexDirection: 'row',
		height: 35,
		justifyContent: 'space-around'
	},
	containerInput: {
		width: metrics.inputWidth
	},
	lineBottom: {
		borderBottomColor: '#000000',
		borderBottomWidth: 2,
		width: 250
	},
	icon: {
		paddingBottom: 0,
		alignItems: 'stretch'
	}
});

export default styles;
