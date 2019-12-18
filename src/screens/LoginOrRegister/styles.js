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
		width: 160,
		height: 160,
		alignSelf: 'center',
		marginTop: '15%'
	}
});

export default styles;
