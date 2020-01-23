import React from 'react';
import { ProgressBar,SafeAreaView, Text } from 'react-native';

import Lottie from 'lottie-react-native';
import {PropTypes} from 'prop-types';

import animation from '../../assets/animations/CheckedDone.json'
import {colors} from '../../styles';
import styles from './styles';

const Congratulations = props => {
  const { level } = props
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Parabéns</Text>
      <Lottie source={animation} autoPlay loop />
      <Text style={styles.text}>Você completou o nível X{level}</Text>
      <ProgressBar progress={1} color={colors.colorSucess} />
    </SafeAreaView>
  );
}

Congratulations.propTypes = {
  level: PropTypes.string.isRequired,
}

export default Congratulations;