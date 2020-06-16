import React from 'react';
import {View} from 'react-native';

import {PropTypes} from 'prop-types';

import ChoiceButton from '../ChoiceButton';
import styles from './styles';

const trueOrFalse = props => {
  const {correctAnswer, step, setSteps} = props;

  function trueOrFalseAnswerIsCorrect(v) {
    return v === correctAnswer;
  }

  return (
    <View style={styles.trueOrFalseButtons}>
      <ChoiceButton
        step={step}
        text="Verdadeiro"
        correct={trueOrFalseAnswerIsCorrect(true)}
        onPress={() => {
          if (trueOrFalseAnswerIsCorrect(true)) {
            setSteps(step + 1);
          }
        }}
      />
      <ChoiceButton
        step={step}
        text="Falso"
        correct={trueOrFalseAnswerIsCorrect(false)}
        onPress={() => {
          if (trueOrFalseAnswerIsCorrect(false)) {
            setSteps(step + 1);
          }
        }}
      />
    </View>
  );
};

trueOrFalse.propTypes = {
  correctAnswer: PropTypes.bool.isRequired,
  step: PropTypes.number.isRequired,
  setSteps: PropTypes.func.isRequired,
};

export default trueOrFalse;
