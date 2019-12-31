import React, {useState} from 'react';
import {View, ViewPropTypes} from 'react-native';
import {TextInput} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';

import styles from './styles';

const CustomTextInput = props => {
  const {style, icon, secure} = props;
  const [state, setState] = useState({
    iconPassword: 'eye',
    secure,
  });

  const setSecureIconPassword = () => {
    if (state.secure) {
      setState({
        iconPassword: 'eye-off',
        secure: false,
      });
    } else {
      setState({
        iconPassword: 'eye',
        secure: true,
      });
    }
  };

  const getViewIconPassword = secureEnty => {
    let view = <Icon />;
    if (secureEnty) {
      view = (
        <Icon
          name={state.iconPassword}
          size={20}
          style={styles.icon}
          onPress={setSecureIconPassword}
        />
      );
    }
    return view;
  };

  return (
    <View style={[styles.container, style]}>
      <Icon name={icon} size={20} />
      <TextInput
        {...props}
        style={styles.input}
        secureTextEntry={state.secure}
      />
      {getViewIconPassword(secure)}
    </View>
  );
};

CustomTextInput.propTypes = {
  icon: PropTypes.string.isRequired,
  style: ViewPropTypes.style,
  secure: PropTypes.bool,
};

CustomTextInput.defaultProps = {
  secure: false,
  style: null,
};

export default CustomTextInput;
