import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const CustomButton = props => {
  const {text} = props;

  return (
    <TouchableOpacity {...props} style={[styles.container, props.style]}>
      <Text style={styles.textButton}>{text}</Text>
    </TouchableOpacity>
  );
};

CustomButton.propTypes = {
  text: PropTypes.string.isRequired,
};

export default CustomButton;
