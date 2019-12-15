import { StyleSheet, Dimensions } from 'react-native';
import fonts from '../../styles/fonts';

const { width } = Dimensions.get('window');

const metrics = {
	containerWidth: width - 45
};

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
