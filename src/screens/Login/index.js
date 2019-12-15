import React from 'react';
import { View, Image, Text } from 'react-native';
import TextInput from '../../components/TextInput/index';
import style from './styles';

export default function Login() {
	return (
		<View style={style.container}>
			<TextInput type="email" placeholder="email" />
			<TextInput type="password" placeholder="email" />
		</View>
	);
}
