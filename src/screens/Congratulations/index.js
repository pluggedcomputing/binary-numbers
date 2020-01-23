import React from 'react';
import { SafeAreaView, Text } from 'react-native';

import Lottie from 'lottie-react-native';
import {PropTypes} from 'prop-types';

import animation from '../../assets/animations/CheckedDone.json'
import styles from './styles';

function Congratulations(props) {
  const { level } = props
  return (
    <SafeAreaView style={styles.container}>
      <Text> </Text>
      <Lottie source={animation} autoPlay loop />
      <Text>{level}</Text>
    </SafeAreaView>
  );
}

Congratulations.propTypes = {
  level: PropTypes.string.isRequired,
}

export default Congratulations;