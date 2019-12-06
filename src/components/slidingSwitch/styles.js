import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import metrics from '../../styles/metrics';
import general from '../../styles/general';

const metric = {
	widhtButton: 30,
	heightButton: 55
};

const styles = StyleSheet.create({
	container: {
		width: 300,
		height: 55,
		flexDirection: 'row',
		backgroundColor: colors.colorBackground,
		alignItems: 'center',
		justifyContent: 'center',
		borderWidth: 1,
		borderColor: colors.colorPrimary,
		borderRadius: 27.5
	}
	// container22: {
	// 	backgroundColor: colors.colorBackground,
	// 	marginRight: metrics.doubleBaseMargin,
	// 	marginLeft: metrics.doubleBaseMargin,
	// 	marginTop: metrics.baseMarginTop,
	// 	padding: metrics.basePadding,
	// 	...general.shadowRadius,
	// 	borderRadius: metrics.baseBorder
	// }
});

export default styles;
