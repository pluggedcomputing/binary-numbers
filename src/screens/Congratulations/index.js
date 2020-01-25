import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { ProgressBar } from 'react-native-paper';

import Lottie from 'lottie-react-native';
import { PropTypes } from 'prop-types';

import animation from '../../assets/animations/CheckedDone.json'
import { colors } from '../../styles';
import styles from './styles';


const Congratulations = props => {
  const { level } = props

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text1}>Parabéns!!!</Text>
      <Lottie source={animation} autoPlay loop />
      <Text style={styles.text2}>Você completou o nivel {level}</Text>
      <ProgressBar color={colors.colorSucess} progress={1} />
    </SafeAreaView>
  );
}

Congratulations.propTypes = {
  level: PropTypes.number.isRequired,
}

export default Congratulations;