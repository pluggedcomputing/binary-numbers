import { StyleSheet } from 'react-native';

import { colors, metrics, fonts } from '../../../styles';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		height: metrics.screenHeight * 0.96,
		backgroundColor: colors.colorBackground
	},
	header: {
		flex: 1,
		width: metrics.screenWidth,
		paddingRight: metrics.basePadding,
		paddingLeft: metrics.basePadding
	},
	info: {
		flex: 3,
		justifyContent: 'center'
	},
	statement: {
		textAlign: 'center',
		fontSize: fonts.input,
		fontWeight: 'bold',
		color: colors.textColorPrimary
	},
	descriptive: {
		margin: metrics.baseMargin,
		height: metrics.screenWidth * 0.7,
		justifyContent: 'space-around',
		alignItems: 'center'
	},
	subDescriptive: {
		height: metrics.screenHeight * 0.26
	},
	buttonGroup: {
		flex: 5,
		justifyContent: 'center'
	},
	contentText: {
		textAlign: 'center',
		fontSize: fonts.regular,
		fontWeight: 'bold',
		color: colors.textColorPrimary
	},
	cardGroup: {
		flexDirection: 'row'
	},
	progressBar: {
		width: metrics.screenWidth
	}
});

export default styles;