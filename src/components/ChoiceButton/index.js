import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import PropTypes from 'prop-types';

import {colors} from '../../styles';
import styles from './styles';

const ChoiceButton = props => {
  const {correct, onPress, text} = props;
  const [backgroundColor, setbackgroundColor] = useState(colors.colorPrimary);

  function onPressButton() {
    if (correct) {
      setbackgroundColor(colors.colorSucess);
    } else {
      setbackgroundColor(colors.colorError);
    }
    onPress();
  }
  return (
    <View {...props} style={styles.container}>
      <TouchableOpacity
        style={[styles.button, {backgroundColor}]}
        onPress={onPressButton}>
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

ChoiceButton.propTypes = {
  correct: PropTypes.bool,
  onPress: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

ChoiceButton.defaultProps = {
  correct: false,
};

export default ChoiceButton;
