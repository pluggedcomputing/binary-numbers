import React, {useState} from 'react';
import {View, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {PropTypes} from 'prop-types';

import {general} from '../../styles';
import styles from './styles';

const CustomTextInput = props => {
  const {style, icon, secureTextEntry} = props;

  const [state, setState] = useState({
    showPassword: secureTextEntry,
  });

  const handleSecureIconPassword = () => {
    setState({
      showPassword: !state.showPassword,
    });
  };

  const secureIconPassword = state.showPassword ? (
    <Icon
      name="eye-off"
      size={general.iconSize.regular}
      style={styles.iconSecure}
      onPress={handleSecureIconPassword}
    />
  ) : (
    <Icon
      name="eye"
      size={general.iconSize.regular}
      style={styles.iconSecure}
      onPress={handleSecureIconPassword}
    />
  );

  return (
    <View style={[styles.container, style]}>
      <Icon name={icon} size={general.iconSize.regular} />
      <TextInput
        {...props}
        style={styles.input}
        secureTextEntry={state.showPassword}
        autoCapitalize="none"
      />
      {secureTextEntry ? secureIconPassword : null}
    </View>
  );
};

CustomTextInput.propTypes = {
  icon: PropTypes.string.isRequired,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  secureTextEntry: PropTypes.bool,
};

CustomTextInput.defaultProps = {
  secureTextEntry: false,
  style: null,
};

export default CustomTextInput;
