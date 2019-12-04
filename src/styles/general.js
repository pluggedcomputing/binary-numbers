import metrics from './metrics';
import colors from './colors';
import fonts from './fonts';

const general = {
  container: {
    flex: 1,
    backgroundColor: colors.colorBackground,
  },
  sectionTitle: {
    color: colors.textColorPrimary,
    fontWeight: 'bold',
    fontSize: fonts.title,
    alignSelf: 'center',
    marginBottom: metrics.doubleBaseMargin,
  },
};

export default general;
