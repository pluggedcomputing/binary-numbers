import React, {Component} from 'react';
import {ScrollView, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import SlidingSwitch from '../../components/SlidingSwitch/index';
import Login from '../Login';
import Register from '../Register';
import style from './styles';
import {colors} from '../../styles';

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: '',
    };
  }

  getContainerLoginOrRegister = status => {
    return status === 'login' ? <Login /> : <Register />;
  };

  render() {
    const {status} = this.state;
    const image = require('../../assets/logo/icon.png');

    return (
      <LinearGradient
        colors={[colors.colorPrimary, '#242F68']}
        style={style.container}>
        <ScrollView
          contentContainerStyle={{
            justifyContent: 'center',
            alignItems: 'center',
          }}
          style={style.containerScrollView}
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
      </LinearGradient>
    );
  }
}
