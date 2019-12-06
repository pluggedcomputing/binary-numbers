import colors from '../../../styles/colors';
import { StyleSheet, Dimensions } from 'react-native';

const metrics = {
	widhtButton: Dimensions.get('window') - 30,
	heightButton: 55
};

const styles = StyleSheet.create({
	container: {
		width: metrics.widhtButton / 3,
		height: 55,
		flexDirection: 'row',
		backgroundColor: colors.colorBackground,
		alignItems: 'center',
		justifyContent: 'center',
		borderWidth: 1,
		borderColor: colors.colorBackground,
		borderRadius: 27.5
	},
	button: {
		flex: 1,
		width: metrics.widhtButton,
		height: 54,
		justifyContent: 'center',
		alignItems: 'center'
	}
});

export default styles;
