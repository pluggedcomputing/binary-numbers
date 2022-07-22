import {StyleSheet} from 'react-native';

import {colors, fonts, metrics} from '../../../styles';

const WIDHT_PORCENTAGE = 0.14;
const HEIGHT_PORCENTAGE = 0.17;

const styles = StyleSheet.create({
  card: {
    height: metrics.screenHeight * WIDHT_PORCENTAGE,
    width: metrics.screenWidth * HEIGHT_PORCENTAGE,
    borderRadius: metrics.smallRadius,
    borderColor: colors.colorAcent,
    borderWidth: 3,
    margin: 1,
    backgroundColor: colors.colorBackground,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardWhite: {
    alignItems: 'center',
    justifyContent: 'space-around',
    flex: 1,
    margin: 2,
  },
  cardCenter: {
    flex: 4,
    flexDirection: 'row',
    borderRadius: metrics.smallRadius,
    alignItems: 'stretch',
    justifyContent: 'space-around',
    width: metrics.screenWidth * 0.14,
  },
  text: {
    fontSize: fonts.regular,
    fontFamily: 'Poppins-Bold',
    color: colors.colorAcent,
  },
  circle: {
    height: metrics.screenHeight * 0.01,
    width: metrics.screenWidth * 0.02,
    padding:6,
    borderRadius: 50,
    backgroundColor: colors.colorAcent,
  },
  image: {
    alignSelf: 'center',
    resizeMode: 'contain',
    width: metrics.screenWidth * 0.13,
  },
  containerContent: {
    flex: 4,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'stretch',
    padding: 2,
    width: metrics.screenWidth * 0.14,
    borderRadius: metrics.smallRadius,
    borderWidth:1,
    borderColor: colors.colorPrimary,
  },
  containerCircles: {
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  cardContainer:{
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:colors.colorPrimary,
  },
});

export default styles;
