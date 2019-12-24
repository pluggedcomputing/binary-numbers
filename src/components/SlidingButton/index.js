import React from 'react';
import PropTypes from 'prop-types';
import {View, TouchableOpacity, Text} from 'react-native';
import styles from './style';

const SlidingButton = props => {
  const {text} = props;

  return (
    <View>
      <TouchableOpacity {...props} style={styles.button}>
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

SlidingButton.propTypes = {
  text: PropTypes.string.isRequired,
};

export default SlidingButton;
