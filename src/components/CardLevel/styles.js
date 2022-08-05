import {StyleSheet} from 'react-native';

import {colors, metrics, fonts} from '../../styles';

const styles = StyleSheet.create({
  container: {
    height: metrics.screenHeight * 0.14,
    width: metrics.screenWidth * 0.80,
    
  },
  subContainer: {
    flex: 1,
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
    backgroundColor: colors.colorPrimary,
    borderRadius: metrics.baseRadius,
    
  },
  imageLevel: {
    flex: 3,
    margin: metrics.smallMargin,
    width: metrics.screenWidth * 0.20,
    resizeMode: 'contain',
  },
  textLevel: {
    fontSize: fonts.title,
    fontFamily: 'Poppins-Bold',
    color: colors.textColorPrimary,
    textTransform:'uppercase'
  },
  bio:{
    fontSize:fonts.medium,
    maxWidth: metrics.screenWidth * 0.25,
  },
});

export default styles;
