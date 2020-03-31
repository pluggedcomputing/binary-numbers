import React from 'react';
import {FlatList} from 'react-native';

import {PropTypes} from 'prop-types';

import ChoiceButton from '../ChoiceButton';
import styles from './styles';

const multipleChoice = props => {
  const {alternatives, step, setSteps} = props;

  return (
    <FlatList
      style={styles.alternative}
      data={alternatives}
      keyExtractor={alternative => String(alternative.id)}
      renderItem={({item}) => (
        <ChoiceButton
          text={item.text}
          correct={item.correct}
          onPress={() => {
            if (item.correct) {
              setSteps(step + 1);
            }
          }}
        />
      )}
    />
  );
};

multipleChoice.propTypes = {
  alternatives: PropTypes.array.isRequired,
  step: PropTypes.number.isRequired,
  setSteps: PropTypes.func.isRequired,
};

export default multipleChoice;
