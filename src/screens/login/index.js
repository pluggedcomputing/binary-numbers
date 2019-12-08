import React, { Component } from 'react';
import { View } from 'react-native';
import SlidingSwitch from '../../components/slidingSwitch/index';
import style from './styles';

export default class index extends Component {
	render() {
		return (
			<View style={style.container}>
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
			</View>
		);
	}
}
