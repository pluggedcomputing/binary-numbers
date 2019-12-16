import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import TextInput from '../../components/TextInput/index';
import CustomButton from '../../components/CustomButton/index';
import style from './styles';

export default function Login() {
	return (
		<View style={style.containerBase}>
			<View style={style.containerBody}>
				<TextInput type="email" placeholder="Email" />
				<Text style={style.lineBottom} />
				<TextInput type="password" placeholder="Senha" />
			</View>
			<CustomButton text="ENTRAR" />
			<TouchableOpacity style={style.buttonAltenative}>
				<Text style={style.textButton}>Esqueceu sua senha?</Text>
			</TouchableOpacity>
			<View style={style.containeFooter}>
				<Text style={style.linerWriteSmall} />
				<Text style={style.text}>OU</Text>
				<Text style={style.linerWriteSmall} />
			</View>
		</View>
	);
}
