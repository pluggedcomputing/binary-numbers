import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {PropTypes} from 'prop-types';
import styles from './styles';

const CustomButton = props => {
  const {text, style} = props;

  return (
    <TouchableOpacity {...props} style={[styles.container, style]}>
      <Text style={styles.textButton}>{text}</Text>
    </TouchableOpacity>
  );
};

CustomButton.propTypes = {
  text: PropTypes.string.isRequired,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

CustomButton.defaultProps = {
  style: null,
};
export default CustomButton;
