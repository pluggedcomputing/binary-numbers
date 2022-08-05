import { StyleSheet } from 'react-native';

import {colors, fonts, metrics} from '../../styles';

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:colors.colorPrimary,
    padding: metrics.basePadding,
    justifyContent:'space-around',
    alignItems:'center'
  },
  title: {
    fontFamily:'Poppins-Bold',
    textAlign: 'center',
    fontSize:fonts.regular,
    padding:metrics.basePadding
  },
  textCongratulations:{
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
    textAlign:'center',
    width: metrics.screenWidth * 0.40,
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
    resizeMode:'contain',
    height: metrics.screenHeight * 0.50,
    width:metrics.screenWidth * 0.90
  },
  buttonsContainer:{
    flexDirection:'row',
    width: metrics.screenWidth * 0.80,

    justifyContent:'space-around'
  },
  headerContainer:{
    flexDirection:'row',
    alignItems:"center",
    justifyContent:"center",
    width:"100%",
    position:'relative'
  },
  closeButton:{
    position:'absolute',
    right:10
  }


});

export default styles;