import { StyleSheet } from 'react-native';
import { colors, metrics, fonts } from '../../styles';

const styles = StyleSheet.create({
	containerBase: {
		backgroundColor: colors.colorBackground,
		width: metrics.baseSliding,
		paddingRight: metrics.baseMargin,
		paddingLeft: metrics.baseMargin,
		alignItems: 'center'
	},
	container: {
		width: '100%',
		flexDirection: 'row',
		height: 40
	},
	containerInput: {
		width: metrics.inputWidth,
		color: colors.colorText,
		fontSize: fonts.input
	},
	lineBottom: {
		borderBottomColor: '#000000',
		borderBottomWidth: 2,
		width: '80%'
	},
	icon: {
		paddingBottom: 0,
		paddingLeft: metrics.smallMargin
	}
});

export default styles;
