import metrics from './metrics';
import colors from './colors';
import fonts from './fonts';

const general = {
	container: {
		flex: 1,
		backgroundColor: colors.colorBackground
	},
	sectionTitle: {
		color: colors.textColorPrimary,
		fontWeight: 'bold',
		fontSize: fonts.title,
		alignSelf: 'center',
		marginBottom: metrics.doubleBaseMargin
	},
	shadowRadius: {
		shadowColor: colors.colorBackground,
		shadowOffset: {
			width: 0,
			height: 2
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,

		elevation: 5
	}
};

export default general;
