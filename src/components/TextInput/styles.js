import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../styles';

const styles = StyleSheet.create({
	containerBase: {
		backgroundColor: colors.colorBackground,
		width: metrics.baseSliding,
		height: 70,
		paddingTop: metrics.baseMargin,
		paddingBottom: 2,
		paddingRight: metrics.baseMargin,
		paddingLeft: metrics.baseMargin,
		alignItems: 'center'
	},
	container: {
		width: '100%',
		flexDirection: 'row',
		height: 35
	},
	containerInput: {
		width: metrics.inputWidth
	},
	lineBottom: {
		borderBottomColor: '#000000',
		borderBottomWidth: 2,
		width: '100%'
	},
	icon: {
		paddingBottom: 0,
		paddingLeft: metrics.smallMargin
	}
});

export default styles;
