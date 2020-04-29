import React from 'react';
import {View} from 'react-native';

import {PropTypes} from 'prop-types';

import ChoiceButton from '../ChoiceButton';
import styles from './styles';

const explanation = props => {
  const {step, setSteps} = props;

  return (
    <View style={styles.descriptive}>
      <ChoiceButton correct text="Próximo" onPress={() => setSteps(step + 1)} />
    </View>
  );
};

explanation.propTypes = {
  step: PropTypes.number.isRequired,
  setSteps: PropTypes.func.isRequired,
};

export default explanation;
