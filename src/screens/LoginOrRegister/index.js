import React, {Component} from 'react';
import {
  ScrollView,
  Image,
  StatusBar,
  SafeAreaView,
  KeyboardAvoidingView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import SlidingSwitch from '../../components/SlidingSwitch';
import {colors} from '../../styles';
import Login from './Login';
import Register from './Register';
import styles from './styles';

const textLogin = 'Entrar';

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: '',
    };
  }

  getContainerLoginOrRegister = status => {
    const {navigation} = this.props;
    return status === textLogin ? (
      <Login navigation={navigation} />
    ) : (
      <Register navigation={navigation} />
    );
  };

  render() {
    const {status} = this.state;
    const image = require('../../assets/images/logo_grey.png');

    return (
      <ScrollView
        contentContainerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
        showsVerticalScrollIndicator={false}>
        <SafeAreaView>
          <LinearGradient
            style={styles.container}
            colors={[colors.colorPrimary, '#242F68']}>
            <StatusBar
              barStyle="light-content"
              backgroundColor={colors.colorPrimary}
            />
            <Image style={styles.containerImage} source={image} />
            <KeyboardAvoidingView behavior="padding" enabled>
              <SlidingSwitch
                onStatusChanged={text => {
                  this.setState({status: text});
                }}
                isParentScrollEnabled={false}
              />
              {this.getContainerLoginOrRegister(status)}
            </KeyboardAvoidingView>
          </LinearGradient>
        </SafeAreaView>
      </ScrollView>
    );
  }
}
