import React, {useState} from 'react';
import {View} from 'react-native';
import {TextInput} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';
import styles from './styles';

const CusttomTextInput = props => {
  const {style, icon, secure} = props;
  const [secureText, setSecureText] = useState(false);
  const [iconPassword, setIconPassword] = useState('eye');

  const setSecureTextEnty = () => {
    const [iconEye, iconEyeOff] = ['eye', 'eye-off'];
    let [valueSecure, valueIcon] = ['', ''];
    if (secureText) {
      valueIcon = iconEye;
      valueSecure = false;
    } else {
      valueIcon = iconEyeOff;
      valueSecure = true;
    }
    setSecureText(valueSecure);
    setIconPassword(valueIcon);
  };

  const getIconPassword = secureEnty => {
    return secureEnty ? iconPassword : '';
  };

  return (
    <View style={[styles.container, style]}>
      <Icon name={icon} size={20} />
      <TextInput {...props} style={styles.input} secureTextEntry={secureText} />
      <Icon
        name={getIconPassword(secure)}
        size={20}
        onPress={() => setSecureTextEnty()}
      />
    </View>
  );
};

CusttomTextInput.propTypes = {
  icon: PropTypes.string.isRequired,
  style: PropTypes.shape,
  secure: PropTypes.bool,
};

CusttomTextInput.defaultProps = {
  secure: false,
  style: null,
};

export default CusttomTextInput;
