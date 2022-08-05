import {StyleSheet} from 'react-native';

import {colors, metrics} from '../../styles';


const HEIGHT_PORCENTAGE = 0.60;

const styles = StyleSheet.create({
  container: {
    height:metrics.screenHeight,
    width:metrics.screenWidth,
    position:'relative'
  },
  listContainer: {
    marginRight: metrics.smallPadding,
    marginLeft: metrics.smallPadding,
    height: metrics.screenHeight * HEIGHT_PORCENTAGE,
    width: metrics.screenWidth,
  },
  content: {
    justifyContent: 'center',
    padding: metrics.basePadding,
  },
  footer: {
    flex: 0.3,
    justifyContent: 'center',
    marginBottom: metrics.smallMargin,
  },
  iconsContainer: {
    marginTop: metrics.baseMargin,
    flexDirection: 'row',
  },
  textCont: {
    alignSelf: 'flex-end',
    color: colors.textColorPrimary,
    padding: metrics.basePadding,
  },
  dotView:{
    flexDirection:'row',
    justifyContent:'center',
    marginVertical:20,
  },
  circle:{
    width:10,
    height:10,
    borderRadius:50,
    backgroundColor:'gray',
    marginHorizontal:5
  },
  left:{
    zIndex:1,
    position:'absolute',
    top:metrics.screenWidth * 0.60,
    left:25
  },
  right:{
    zIndex:1,
    position:'absolute',
    top:metrics.screenWidth * 0.60,
    right:25
  }
});

export default styles;
