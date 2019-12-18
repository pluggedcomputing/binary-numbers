import React from 'react';
import { View, Text } from 'react-native';
import TextInput from '../../components/TextInput';
import CustomButton from '../../components/CustomButton';
import style from './styles';

export default function Register() {
	return (
		<View style={style.containerBase}>
			<View style={style.containerBody}>
				<TextInput type="account" placeholder="Nome" />
				<Text style={style.lineBottom} />
				<TextInput type="email" placeholder="Email" />
				<Text style={style.lineBottom} />
				<TextInput type="password" placeholder="Senha" />
				<Text style={style.lineBottom} />
				<TextInput type="password" placeholder="Confirmação" />
			</View>
			<CustomButton text="CADASTRAR" />
		</View>
	);
}
