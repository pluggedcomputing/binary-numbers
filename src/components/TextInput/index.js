import React, {Component} from 'react';
import {View, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';
import styles from './styles';

export default class index extends Component {
  constructor(props) {
    super(props);
    const {type} = this.props;
    const password = type === 'password';
    this.state = {
      secondIcon: 'eye',
      sizeIcon: 32,
      secureInput: password,
      eye: 'eye',
      eyeOff: 'eye-off',
    };
  }

  getIconByType = type => {
    if (type === 'password') {
      return 'lock';
    }
    return type;
  };

  changeStatusSecureText = () => {
    const {secureInput, eye, eyeOff} = this.state;
    if (secureInput) {
      this.setState({secureInput: false, secondIcon: eyeOff});
    } else {
      this.setState({secureInput: true, secondIcon: eye});
    }
  };

  getViewIconPassword = type => {
    const {secondIcon, sizeIcon} = this.state;
    let view = <Icon />;
    if (type === 'password') {
      view = (
        <Icon
          name={secondIcon}
          size={sizeIcon}
          style={styles.icon}
          onPress={secureInput => this.changeStatusSecureText(secureInput)}
        />
      );
    }
    return view;
  };

  render() {
    const {type, placeholder} = this.props;
    const {sizeIcon, secureInput} = this.state;

    return (
      <View style={styles.containerBase}>
        <View style={styles.container}>
          <Icon
            name={this.getIconByType(type)}
            size={sizeIcon}
            style={styles.icon}
          />
          <TextInput
            {...this.props}
            secureTextEntry={secureInput}
            style={styles.containerInput}
            placeholder={placeholder}
            onChangeText={text => console.log('pegar input ', text)}
            value={null}
          />
          {this.getViewIconPassword(type)}
        </View>
      </View>
    );
  }
}

index.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};
