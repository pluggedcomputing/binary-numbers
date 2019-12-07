/* eslint-disable react/prop-types */
import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';

export default props => {
  const {text, onPressButton} = props;

  return (
    <TouchableOpacity style={styles.container} onPress={onPressButton}>
      <Text style={styles.textButton}>{text}</Text>
    </TouchableOpacity>
  );
};
