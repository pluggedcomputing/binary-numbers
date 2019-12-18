import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
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
			<View style={style.containerButtonsOptions}>
				<Icon name="facebook" type="font-awesome" color="#FFFFFF" size={32} />
				<Icon name="google" type="font-awesome" size={44} color="#FFFFFF" />
			</View>
		</View>
	);
}
