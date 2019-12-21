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

    return (
      <LinearGradient
        colors={['#757de8', colors.colorPrimary, '#002984']}
        style={style.container}>
        <ScrollView
          contentContainerStyle={{
            justifyContent: 'center',
            alignItems: 'center',
          }}
          style={{width: '100%', marginBottom: 30}}
          showsVerticalScrollIndicator={false}>
          <Image
            style={style.containerImage}
            source={require('../../assets/logo/icon.png')}
          />
          <SlidingSwitch
            onStatusChanged={text => {
              this.setState({status: text});
              console.log('Change Status ', status, 'text ', text);
            }}
            isParentScrollEnabled={false}
          />
          {this.getContainerLoginOrRegister(status)}
        </ScrollView>
      </LinearGradient>
    );
  }
}
