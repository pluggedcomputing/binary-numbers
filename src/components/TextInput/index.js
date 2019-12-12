import React, { Component } from 'react';
import { View, TextInput, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import style from './styles';

export default class index extends Component {
	constructor(props) {
		super(props);
		const sizeIcon = this.props;
		const type = this.props;
		this.state = {
			sizeIcon: sizeIcon ? sizeIcon : 32,
			secondIcon: 'eye',
			sizeIconPassword: type === 'password' ? sizeIcon : 0,
			secureInput: false
		};
	}

	getIconByType = (type) => {
		if (type === 'password') {
			// this.setState({ secureInput: true });
			return 'lock';
		} else if (type == 'email') {
			return 'email';
		} else {
			return 'glass';
		}
	};

	getViewIconPassword = (type) => {
		let view = null;
		if (type === 'password') {
			view = <Icon name={this.state.secondIcon} size={this.state.sizeIconPassword} />;
		} else {
			view = <Icon />;
		}
		return view;
	};

	render() {
		const { type, placeholder, sizeIcon } = this.props;

		return (
			<View style={style.containerBase}>
				<View style={style.container}>
					<Icon
						name={this.getIconByType(type)}
						size={sizeIcon}
						style={{ paddingBottom: 10, alignItems: 'flex-start' }}
					/>
					<TextInput
						secureTextEntry={this.state.secureInput}
						style={style.containerInput}
						placeholder={placeholder}
						onChangeText={(type) => console.log(type)}
						value={null}
					/>
					{this.getViewIconPassword(type)}
				</View>
				<Text style={style.lineBottom} />
			</View>
		);
	}
}
