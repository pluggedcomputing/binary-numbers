import React from 'react';
import PropTypes from 'prop-types';
import {View, TouchableOpacity, Text} from 'react-native';
import styles from './style';

const SlidingButton = props => {
  const {text, style} = props;

  return (
    <View>
      <TouchableOpacity {...props} style={styles.button}>
        <Text style={[styles.text, style]}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

SlidingButton.propTypes = {
  text: PropTypes.string.isRequired,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

SlidingButton.defaultProps = {
  style: null,
};

export default SlidingButton;
