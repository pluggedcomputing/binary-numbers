import React, {useState} from 'react';
import {ScrollView, Image, StatusBar, KeyboardAvoidingView} from 'react-native';

import {LinearGradient} from 'expo-linear-gradient';

import image from '../../assets/images/logo_grey.png';
import SlidingSwitch from '../../components/SlidingSwitch';
import {colors} from '../../styles';
import Login from './Login';
import Register from './Register';
import styles from './styles';

const LoginOrRegister = props => {
  const [status, setStatus] = useState('');
  const {navigation} = props;

  return (
    <LinearGradient
      colors={[colors.colorPrimary, '#242F68']}
      style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.colorPrimary}
      />
      <ScrollView
        contentContainerStyle={styles.scrollView}
        showsVerticalScrollIndicator={false}>
        <Image style={styles.containerImage} source={image} />
        <KeyboardAvoidingView behavior="padding" enabled>
          <SlidingSwitch
            onStatusChanged={text => {
              setStatus(text);
            }}
            isParentScrollEnabled={false}
          />
          {status === 'Entrar' ? (
            <Login navigation={navigation} />
          ) : (
            <Register navigation={navigation} />
          )}
        </KeyboardAvoidingView>
      </ScrollView>
    </LinearGradient>
  );
};

export default LoginOrRegister;
