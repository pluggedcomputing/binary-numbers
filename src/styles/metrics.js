import {Dimensions, Platform} from 'react-native';

const {width, height} = Dimensions.get('window');

const metrics = {
  smallMargin: 5,
  baseMargin: 10,
  doubleBaseMargin: 20,
  halfMargin: 30,
  fullMargin: 60,
  basePadding: 8,
  baseSliding: '90%',
  basePaddingsliding: '19%',
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  tabBarHeight: 54,
  navBarHeight: Platform.OS === 'ios' ? 64 : 54,
  statusBarHeight: Platform.OS === 'ios' ? 20 : 0,
  smallRadius: 5,
  baseRadius: 10,
  radiusBorder: 27.5,
  baseBorder: 20,
  containerBase: width - 45,
};

export default metrics;
