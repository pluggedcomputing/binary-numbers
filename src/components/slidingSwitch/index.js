import React, { Component } from 'react';
import { View } from 'react-native';
import styles from './styles';
import Button from './Button/index';

export default class index extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Button name="Login" />
				<Button name="Criar" />
			</View>
		);
	}
}
