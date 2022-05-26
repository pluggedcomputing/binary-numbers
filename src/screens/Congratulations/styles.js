import { StyleSheet } from 'react-native';

import {colors, fonts, metrics} from '../../styles';

const styles = StyleSheet.create({
  container:{
    backgroundColor:colors.colorPrimary,
    width:metrics.screenWidth,
    height:metrics.screenHeight,
    justifyContent:'space-around',
    alignItems:'center'
  },
  title: {
    fontFamily:'Poppins-Bold',
    textAlign: 'center',
    fontSize:fonts.regular,
    padding:metrics.basePadding
  },
  textCongralulations:{
    fontSize:fonts.header,
    fontFamily:'Poppins-Bold'
  },
  textContent:{
    alignItems:'center',
  },
  button:{
    alignItems:"center",
    justifyContent:'center',

  },
  starsContainer:{
    flexDirection:'row'
  },
  feedbackContent:{
    maxWidth:209,
    maxHeight:120,
    textAlign:'left',
  },
  buttonContainer:{
    justifyContent:"center",
    alignItems:'center',
    backgroundColor:colors.colorAcent,
    width:50,
    height:50,
    borderRadius:50 /2
  },
  textIcon:{
    paddingVertical:5,
  },
  WinLevel:{
    width:metrics.screenWidth * 0.90
  },
  buttonsContainer:{
    flexDirection:'row',
    width: metrics.screenWidth * 0.80,

    justifyContent:'space-around'
  },

});

export default styles;