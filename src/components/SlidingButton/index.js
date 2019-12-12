import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, Text } from 'react-native';
import styles from './style';

const Button = (props) => {
	const { name } = props;

	return (
		<View>
			<TouchableOpacity style={styles.button}>
				<Text style={styles.text}>{name}</Text>
			</TouchableOpacity>
		</View>
	);
};

Button.propTypes = {
	name: PropTypes.string,
	onPress: PropTypes.func
};

export default Button;
