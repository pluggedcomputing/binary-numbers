import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, ToastAndroid} from 'react-native';

import PropTypes from 'prop-types';

import {colors} from '../../styles';
import styles from './styles';

const ChoiceButton = props => {
  const {correct, onPress, text, step} = props;
  const [backgroundColor, setbackgroundColor] = useState(colors.colorAcent);

  useEffect(() => {
    setbackgroundColor(colors.colorAcent);
  }, [step]);

  function onPressButton() {
    if (correct) {
      setbackgroundColor(colors.colorSucess);
    } else {
      ToastAndroid.showWithGravityAndOffset(
        "Tente outra vez.",
        ToastAndroid.SHORT,
        ToastAndroid.CENTER,
        25,
        50
      );
      setbackgroundColor(colors.colorError);
    }
    setTimeout(() => onPress(), 350);
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
  step: PropTypes.number.isRequired,
};

ChoiceButton.defaultProps = {
  correct: false,
};

export default ChoiceButton;
