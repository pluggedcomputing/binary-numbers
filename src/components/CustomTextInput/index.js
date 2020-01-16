import React, {useState} from 'react';
import {View} from 'react-native';
import {TextInput} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {PropTypes} from 'prop-types';

import styles from './styles';

import {general} from '../../styles';

const CustomTextInput = props => {
  const {style, icon, secureTextEntry} = props;
  const [state, setState] = useState({
    iconPassword: 'eye',
    secure: secureTextEntry,
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
          size={general.iconSize.regular}
          style={styles.iconSecure}
          onPress={setSecureIconPassword}
        />
      );
    }
    return view;
  };

  return (
    <View style={[styles.container, style]}>
      <Icon name={icon} size={general.iconSize.regular} />
      <TextInput
        {...props}
        style={styles.input}
        secureTextEntry={state.secure}
      />
      {getViewIconPassword(secureTextEntry)}
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
