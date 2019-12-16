import React from 'react';
import { View, Image, Text } from 'react-native';
import TextInput from '../../components/TextInput/index';
import CustomButton from '../../components/CustomButton/index';
import style from './styles';

export default function Login() {
	return (
		<View style={style.containerBase}>
			<View style={style.container}>
				<TextInput type="email" placeholder="Email" />
				<Text style={style.lineBottom} />
				<TextInput type="password" placeholder="Senha" />
			</View>
			<CustomButton text="ENTRAR" />
		</View>
	);
}
