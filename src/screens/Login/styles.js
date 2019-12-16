import { StyleSheet } from 'react-native';
import { colors, metrics, general } from '../../styles';

const styles = StyleSheet.create({
	containerBase: {
		alignItems: 'center',
		position: 'relative',
		padding: 140
	},
	containerBody: {
		position: 'absolute',
		backgroundColor: colors.colorBackground,
		width: metrics.containerBase / 1.2,
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
		width: '90%'
	},
	linerWriteSmall: {
		marginBottom: 20,
		borderBottomColor: '#FFFFFF',
		borderBottomWidth: 2,
		width: 120
	},
	Text: {
		...general.sectionTitle,
		color: colors.colorBackground,
		marginTop: metrics.baseMargin
	},
	containeFooter: {
		marginTop: metrics.baseMargin,
		width: 400,
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center'
	}
});

export default styles;
