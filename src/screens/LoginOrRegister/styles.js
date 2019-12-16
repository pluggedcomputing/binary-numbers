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
		width: 150,
		height: 150,
		alignSelf: 'center',
		marginTop: '10%',
		marginBottom: '10%'
	}
});

export default styles;
