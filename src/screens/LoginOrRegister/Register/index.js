import React from 'react';
import {View, Text} from 'react-native';
import {PropTypes} from 'prop-types';

import CustomTextInput from '../../../components/CustomTextInput/index';
import CustomButton from '../../../components/CustomButton';

import style from './styles';

function Register({navigation}) {
  return (
    <View style={style.containerBase}>
      <View style={style.containerBody}>
        <CustomTextInput icon="account" placeholder="Nome" />
        <Text style={style.lineBottom} />
        <CustomTextInput icon="email" placeholder="Email" />
        <Text style={style.lineBottom} />
        <CustomTextInput icon="lock" placeholder="Senha" secureTextEntry />
        <Text style={style.lineBottom} />
        <CustomTextInput
          icon="lock"
          placeholder="Confirmação"
          secureTextEntry
        />
      </View>
      <CustomButton text="CADASTRAR" />
    </View>
  );
}

Register.propTypes = {
  navigation: PropTypes.string.isRequired,
};

export default Register;
