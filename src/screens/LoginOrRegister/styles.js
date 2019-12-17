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
		width: '38%',
		height: '20%',
		alignSelf: 'center',
		marginTop: '10%',
		marginBottom: '5%'
	}
});

export default styles;
