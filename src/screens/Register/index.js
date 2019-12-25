import React from 'react';
import {View, Text} from 'react-native';
import CustomTextInput from '../../components/CustomTextInput/index';
import CustomButton from '../../components/CustomButton';
import style from './styles';

export default function Register() {
  return (
    <View style={style.containerBase}>
      <View style={style.containerBody}>
        <CustomTextInput icon="account" placeholder="Nome" />
        <Text style={style.lineBottom} />
        <CustomTextInput icon="email" placeholder="Email" />
        <Text style={style.lineBottom} />
        <CustomTextInput icon="lock" placeholder="Senha" secure />
        <Text style={style.lineBottom} />
        <CustomTextInput icon="lock" placeholder="Confirmação" secure />
      </View>
      <CustomButton text="CADASTRAR" />
    </View>
  );
}
