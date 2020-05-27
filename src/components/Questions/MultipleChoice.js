import React from 'react';

import { PropTypes } from 'prop-types';

import ChoiceButton from '../ChoiceButton';

const multipleChoice = props => {
  const { alternatives, step, setSteps} = props;
  return (
    alternatives.map(item => {
      return (
        <ChoiceButton
          key={item.text}
          step={step}
          text={item.text}
          correct={item.correct}
          onPress={() => {
            if (item.correct) {
              setSteps(step + 1);
            }
          }}
        />
      )
    })
  )
};

multipleChoice.propTypes = {
  alternatives: PropTypes.arrayOf(PropTypes.object).isRequired,
  step: PropTypes.number.isRequired,
  setSteps: PropTypes.func.isRequired,
};

export default multipleChoice;
