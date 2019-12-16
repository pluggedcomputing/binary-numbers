import { StyleSheet } from 'react-native';
import { fonts, metrics } from '../../styles';

const styles = StyleSheet.create({
	button: {
		flex: 1,
		width: metrics.containerBase / 2.4,
		height: 54,
		justifyContent: 'center',
		alignItems: 'center'
	},
	text: {
		fontSize: fonts.title
	}
});

export default styles;
