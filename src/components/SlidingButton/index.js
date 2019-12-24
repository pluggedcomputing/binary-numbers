import React from 'react';
import PropTypes from 'prop-types';
import {View, TouchableOpacity, Text} from 'react-native';
import styles from './style';

const SlidingButton = props => {
  const {name} = props;

  return (
    <View>
      <TouchableOpacity {...props} style={styles.button}>
        <Text style={styles.text}>{name}</Text>
      </TouchableOpacity>
    </View>
  );
};

SlidingButton.propTypes = {
  name: PropTypes.string.isRequired,
};

export default SlidingButton;
