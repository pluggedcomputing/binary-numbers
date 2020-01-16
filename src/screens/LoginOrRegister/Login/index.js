import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';

import CustomButton from '../../../components/CustomButton/index';
import CustomTextInput from '../../../components/CustomTextInput/index';
import style from './styles';

function Login({navigation}) {
  return (
    <View style={style.containerBase}>
      <View style={style.containerBody}>
        <CustomTextInput icon="email" placeholder="Email" />
        <Text style={style.lineBottom} />
        <CustomTextInput icon="lock" placeholder="Senha" secureTextEntry />
      </View>
      <CustomButton text="ENTRAR" onPress={() => navigation.navigate('Main')} />
      <TouchableOpacity style={style.buttonAltenative}>
        <Text style={style.textButton}>Esqueceu sua senha?</Text>
      </TouchableOpacity>
      <View style={style.containeFooter}>
        <Text style={style.linerWriteSmall} />
        <Text style={style.text}>OU</Text>
        <Text style={style.linerWriteSmall} />
      </View>
      <View style={style.containerButtonsOptions}>
        <Icon name="facebook" type="font-awesome" color="#FFFFFF" size={32} />
        <Icon name="google" type="font-awesome" size={36} color="#FFFFFF" />
      </View>
    </View>
  );
}
export default Login;
