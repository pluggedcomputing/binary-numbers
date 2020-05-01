import React, {useState} from 'react';
import {View} from 'react-native';

import {PropTypes} from 'prop-types';

import ChoiceButton from '../ChoiceButton';
import CustomTextInput from '../CustomTextInput';
import styles from './styles';

const shortAnswer = props => {
  const {correctAnswer, step, setSteps} = props;

  const [answer, setAnswer] = useState('');

  function textAnswerIsCorrect() {
    return String(answer) === String(correctAnswer);
  }
  return (
    <View style={styles.descriptive}>
      <View style={styles.subDescriptive}>
        <CustomTextInput
          maxLength={255}
          multiline
          placeholder="Digite aqui.."
          icon="comment-text-outline"
          onChangeText={text => setAnswer(text)}
          value={answer}
        />
      </View>
      <ChoiceButton
        step={step}
        text="Enviar"
        correct={textAnswerIsCorrect()}
        onPress={() => {
          setAnswer('');
          if (textAnswerIsCorrect()) {
            setSteps(step + 1);
          }
        }}
      />
    </View>
  );
};

shortAnswer.propTypes = {
  correctAnswer: PropTypes.string.isRequired,
  step: PropTypes.number.isRequired,
  setSteps: PropTypes.func.isRequired,
};

export default shortAnswer;
