import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const CustomButton = props => {
  const {text, onPressButton} = props;

  return (
    <TouchableOpacity style={styles.container} onPress={onPressButton}>
      <Text style={styles.textButton}>{text}</Text>
    </TouchableOpacity>
  );
};

CustomButton.propTypes = {
  text: PropTypes.string.isRequired,
  onPressButton: PropTypes.func.isRequired,
};

export default CustomButton;
