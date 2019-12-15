import { Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');

const metrics = {
	smallMargin: 5,
	baseMargin: 10,
	doubleBaseMargin: 20,
	fullMargin: 60,
	basePadding: 8,
	baseSliding: 139,
	basePaddingsliding: '19%',
	screenWidth: width < height ? width : height,
	screenHeight: width < height ? height : width,
	tabBarHeight: 54,
	navBarHeight: Platform.OS === 'ios' ? 64 : 54,
	statusBarHeight: Platform.OS === 'ios' ? 20 : 0,
	baseRadius: 3,
	baseBorder: 20,
	containerWidth: width,
	containerBase: width - 45,
	switchWidth: width / 2.7,
	inputWidth: '65%'
};

export default metrics;
