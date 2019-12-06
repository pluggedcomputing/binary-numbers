import React, { Component } from 'react';
import { View, Text } from 'react-native';
import SlidingSwitch from '../../components/slidingSwitch/index';
import style from './styles';

export default class index extends Component {
	render() {
		return (
			<View style={style.container}>
				<SlidingSwitch />
			</View>
		);
	}
}
