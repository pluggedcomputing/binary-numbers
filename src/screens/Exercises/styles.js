import {StyleSheet} from 'react-native';

import {colors, metrics, fonts} from '../../styles';



const styles = StyleSheet.create({
  container: {
    justifyContent:'center',
    width:metrics.screenWidth,
    height: metrics.screenHeight,
    backgroundColor:colors.colorBackground,
  },
  halfView: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
  },
  halfViewKeyBoard: {
    position:'absolute',
    bottom:50,
    justifyContent: 'center',
    alignItems: 'center',
    width: metrics.screenWidth
  },
  info: {
    marginTop: metrics.baseMargin,
  },
  contentText: {
    textAlign: 'left',
    color: colors.textColorPrimary,
    width: metrics.screenWidth * 0.60,
    paddingVertical:10
  },
  statementImageConteiner: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  statementImage: {
    resizeMode: 'contain',
    justifyContent: 'flex-end',
    width: Math.round((metrics.screenWidth * 14) / 16),
    height: metrics.screenHeight * 0.33,
  },
  icon: {
    color: colors.colorPrimary,
    margin: metrics.basePadding,
  },
  defaultText: {
    marginLeft: metrics.baseMargin,
    marginRight: metrics.baseMargin,
    height: metrics.screenHeight / 4,
    textAlign: 'center',
  },
  title: {
    fontFamily:'Poppins-Bold',
    textAlign: 'center',
    fontSize:fonts.regular,
    padding:metrics.basePadding
  },
  button:{
    backgroundColor:'red',
    color:'white'
  },
  textQuestion:{
    borderWidth:1,
    position:'relative'
  },
  left:{
    position:'absolute',
    left:40
  },
  right:{
    position:'absolute',
    right:40
  },
  header:{
    position:'relative',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    
  },
  closeButton:{
    position:'absolute',
    right:20,
  },
  closeImage:{
    resizeMode:'contain',
    width:metrics.screenWidth * 0.04,
    height: metrics.screenHeight * 0.04
  }
});

export default styles;
