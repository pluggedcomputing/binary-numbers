import { StyleSheet, Dimensions } from 'react-native';
import {fonts, metrics } from '../../styles/fonts';

const styles = StyleSheet.create({
	button: {
		flex: 1,
		width: metrics.containerWidth / 3,
		height: 54,
		justifyContent: 'center',
		alignItems: 'center'
	},
	text: {
		fontSize: fonts.title
	}
});

export default styles;
