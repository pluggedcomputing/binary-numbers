import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import SlidingSwitch from '../../components/SlidingSwitch/index';
import Login from '../Login';
import style from './styles';
import { colors } from '../../styles';

export default class index extends Component {
	constructor(props) {
		super(props);
		this.state = {
			status: ''
		};
	}

	get = (status) => {
		return status === 'login' ? <Login /> : <Text>Criar</Text>;
	};

	render() {
		return (
			<View>
				<LinearGradient colors={[ '#757de8', colors.colorPrimary, '#002984' ]} style={style.container}>
					<Image style={style.containerImage} source={require('../../assets/logo/icon.png')} />
					<SlidingSwitch
						currentStatus="login"
						disableScroll={(value) => {
							console.log('scrollEnabled', value);
						}}
						onStatusChanged={(text) => {
							this.setState({ status: text });
							console.log('Change Status ', this.state.status, 'text ', text);
						}}
						isParentScrollEnabled={false}
					/>
					{this.get(this.state.status)}
				</LinearGradient>
			</View>
		);
	}
}
