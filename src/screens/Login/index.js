import React from 'react';
import { View, Image, Text } from 'react-native';
import TextInput from '../../components/TextInput/index';
import style from './styles';
import styles from '../../components/TextInput/styles';

export default function Login() {
	return (
		<View style={style.container}>
			<TextInput type="email" placeholder="email" />
			<Text style={styles.lineBottom} />
			<TextInput type="password" placeholder="email" />
		</View>
	);
}
