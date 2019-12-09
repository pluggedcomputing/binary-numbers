import { Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');

const metrics = {
	smallMargin: 5,
	baseMargin: 10,
	doubleBaseMargin: 20,
	fullMargin: 60,
	basePadding: 8,
	baseSliding: '50%',
	basePaddingsliding: '16%',
	screenWidth: width < height ? width : height,
	screenHeight: width < height ? height : width,
	tabBarHeight: 54,
	navBarHeight: Platform.OS === 'ios' ? 64 : 54,
	statusBarHeight: Platform.OS === 'ios' ? 20 : 0,
	baseRadius: 3,
	baseBorder: 20,
	containerWidth: width,
	switchWidth: width / 2.7,
	inputWidth: '80%'
};

export default metrics;
