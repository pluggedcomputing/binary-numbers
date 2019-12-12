import React, { Component } from 'react';
import { View, Image } from 'react-native';
import SlidingSwitch from '../../components/SlidingSwitch/index';
import TextInput from '../../components/TextInput/index';
import style from './styles';

export default class index extends Component {
	render() {
		return (
			<View style={style.container}>
				<Image style={style.containerImage} source={require('../../assets/logo/icon.png')} />
				<SlidingSwitch
					currentStatus={'login'}
					disableScroll={(value) => {
						console.log('scrollEnabled', value);
					}}
					onStatusChanged={(text) => {
						console.log('Change Status ', text);
					}}
					isParentScrollEnabled={false}
				/>
				<TextInput type="email" placeholder="chico" sizeIcon={32} />
				<TextInput type="password" placeholder="chico" sizeIcon={32} />
			</View>
		);
	}
}
