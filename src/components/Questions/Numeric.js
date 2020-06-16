import React, {useState} from 'react';
import {View} from 'react-native';

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
      <View style={styles.subDescriptive}>
        <CustomTextInput
          keyboardType="numeric"
          placeholder="Digite aqui.."
          icon="numeric"
          onChangeText={text => setNumericAnswer(text)}
          value={numericAnswer}
        />
      </View>
      <View style={{flex: 1}}>
        <ChoiceButton
          step={step}
          text="Enviar"
          correct={numericAnswerIsCorrect()}
          onPress={() => {
            setNumericAnswer('');
            if (numericAnswerIsCorrect()) {
              setSteps(step + 1);
            }
          }}
        />
      </View>
    </View>
  );
};

numeric.propTypes = {
  correctAnswer: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired,
  setSteps: PropTypes.func.isRequired,
};

export default numeric;
