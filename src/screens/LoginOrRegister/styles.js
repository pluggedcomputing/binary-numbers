import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../styles';

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.colorPrimary,
		width: metrics.screenWidth,
		height: metrics.screenHeight,
		alignItems: 'center'
	},
	containerImage: {
		width: 140,
		height: 140,
		alignSelf: 'center',
		marginTop: 45
	}
});

export default styles;
