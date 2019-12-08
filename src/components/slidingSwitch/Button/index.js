import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';

import styles from './style';

const Button = (props) => {
	return (
		<View>
			<TouchableOpacity style={styles.button}>
				<Text style={styles.text}>{props.name}</Text>
			</TouchableOpacity>
		</View>
	);
};

Button.propTypes = {
	name: PropTypes.string,
	onPress: PropTypes.func
};

export default Button;
