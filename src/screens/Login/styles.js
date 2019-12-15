import { StyleSheet, Dimensions } from 'react-native';
import {colors, metrics} from '../../styles';

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.colorBackground,
		width: metrics.containerBase / 3 * 2,
		justifyContent: 'center',
		alignItems: 'center',
		borderWidth: 1,
		borderColor: colors.colorBackground,
		borderRadius: metrics.radiusBorder,	
	}
});

export default styles;
