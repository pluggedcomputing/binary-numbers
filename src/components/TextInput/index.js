import React from 'react';
import { View, TextInput, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import style from './styles';

export default (props) => {
	const { iconName, secureInput, holder, sizeIcon, secondIcon } = props;

	return (
		<View style={style.containerBase}>
			<View style={style.container}>
				<Icon name={iconName} size={sizeIcon} style={{ paddingBottom: 10 }} />
				<TextInput
					secureTextEntry={secureInput}
					style={style.containerInput}
					placeholder={holder}
					onChangeText={() => console.log('sera')}
					value={null}
				/>
				<Icon name={secondIcon} size={sizeIcon} />
			</View>
			<Text style={style.lineBottom} />
		</View>
	);
};
