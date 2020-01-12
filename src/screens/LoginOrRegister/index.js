import React, {Component} from 'react';
import {ScrollView, Image, StatusBar, KeyboardAvoidingView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import SlidingSwitch from '../../components/SlidingSwitch/index';
import Login from '../Login';
import Register from '../Register';
import style from './styles';
import {colors} from '../../styles';

const textLogin = 'Entrar';
export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: '',
    };
  }

  getContainerLoginOrRegister = status => {
    return status === textLogin ? (
      <Login navigation={this.props.navigation} />
    ) : (
      <Register />
    );
  };

  render() {
    const {status} = this.state;
    const image = require('../../assets/images/logo_grey.png');

    return (
      <LinearGradient
        colors={[colors.colorPrimary, '#242F68']}
        style={style.container}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={colors.colorPrimary}
        />
        <KeyboardAvoidingView behavior="padding" enabled>
          <ScrollView
            contentContainerStyle={{
              justifyContent: 'center',
              alignItems: 'center',
            }}
            showsVerticalScrollIndicator={false}>
            <Image style={style.containerImage} source={image} />
            <SlidingSwitch
              onStatusChanged={text => {
                this.setState({status: text});
              }}
              isParentScrollEnabled={false}
            />
            {this.getContainerLoginOrRegister(status)}
          </ScrollView>
        </KeyboardAvoidingView>
      </LinearGradient>
    );
  }
}
