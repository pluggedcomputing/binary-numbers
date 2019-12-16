import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../styles';

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.colorBackground,
		width: metrics.containerBase / 3 * 2,
		justifyContent: 'center',
		alignItems: 'center',
		borderWidth: 1,
		borderColor: colors.colorBackground,
		borderRadius: metrics.baseRadius,
		paddingTop: metrics.doubleBaseMargin,
		paddingBottom: metrics.doubleBaseMargin
	},
	lineBottom: {
		marginBottom: 20,
		borderBottomColor: '#000000',
		borderBottomWidth: 2,
		width: '80%'
	}
});

export default styles;
