import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import metrics from '../../styles/metrics';

const styles = StyleSheet.create({
	container: {
		height: 55,
		flexDirection: 'row',
		backgroundColor: colors.colorBackground,
		alignItems: 'center',
		justifyContent: 'space-around',
		borderWidth: 1,
		borderColor: colors.colorBackground,
		borderRadius: 27.5,
		marginRight: metrics.basePaddingsliding,
		marginLeft: metrics.basePaddingsliding,
		marginTop: metrics.baseMargin
	},
	switcher: {
		flexDirection: 'row',
		position: 'absolute',
		top: 0,
		left: 0,
		backgroundColor: colors.colorPrimary,
		borderRadius: 28,
		height: 53,
		alignItems: 'center',
		justifyContent: 'center',
		width: metrics.baseSliding,
		elevation: 4,
		shadowOpacity: 0.31,
		shadowRadius: 10,
		shadowColor: '#A69E9E'
	}
});

export default styles;
