import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import styles from './style';

const Button = (props) => {
	return (
		<View>
			<TouchableOpacity style={styles.Button}>
				<Text>{props.name}</Text>
			</TouchableOpacity>
		</View>
	);
};

export default Button;
