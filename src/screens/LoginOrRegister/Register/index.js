import React from 'react';
import {View, Text} from 'react-native';

import CustomButton from '../../../components/CustomButton';
import CustomTextInput from '../../../components/CustomTextInput';
import style from './styles';

function Register({navigation}) {
  return (
    <View style={style.containerBase}>
      <View style={style.containerBody}>
        <CustomTextInput icon="account" placeholder="Nome" />
        <Text style={style.lineBottom} />
        <CustomTextInput
          icon="email"
          placeholder="Email"
          keyboardType="email-address"
        />
        <Text style={style.lineBottom} />
        <CustomTextInput icon="lock" placeholder="Senha" secureTextEntry />
        <Text style={style.lineBottom} />
        <CustomTextInput
          icon="lock"
          placeholder="Confirmação"
          secureTextEntry
        />
      </View>
      <CustomButton
        text="CADASTRAR"
        onPress={() => navigation.navigate('Main')}
      />
    </View>
  );
}
export default Register;
