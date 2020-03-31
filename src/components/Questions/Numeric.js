import React, {useState} from 'react';
import {View, KeyboardAvoidingView} from 'react-native';

import {PropTypes} from 'prop-types';

import ChoiceButton from '../ChoiceButton';
import CustomTextInput from '../CustomTextInput';
import styles from './styles';

const numeric = props => {
  const {correctAnswer, step, setSteps} = props;

  const [numericAnswer, setNumericAnswer] = useState();

  function numericAnswerIsCorrect() {
    return String(numericAnswer) === String(correctAnswer);
  }
  return (
    <View style={styles.descriptive}>
      <KeyboardAvoidingView
        style={styles.subDescriptive}
        behavior="padding"
        enabled>
        <CustomTextInput
          keyboardType="numeric"
          placeholder="Digite aqui.."
          icon="numeric"
          onChangeText={text => setNumericAnswer(text)}
          value={numericAnswer}
        />
      </KeyboardAvoidingView>
      <ChoiceButton
        text="Enviar"
        correct={numericAnswerIsCorrect()}
        onPress={() => {
          if (numericAnswerIsCorrect()) {
            setSteps(step + 1);
          }
        }}
      />
    </View>
  );
};

numeric.propTypes = {
  correctAnswer: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired,
  setSteps: PropTypes.func.isRequired,
};

export default numeric;
