import React from 'react';
import { Image, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import CustomBackground from "../../components/CustomBackground";

import logo from './assets/logo.png';
import { colors } from '../../styles';

export default function ScreenOn() {
  const jsx = [<Text>ola</Text>]
  return (
    <LinearGradient colors={['#757de8', colors.colorPrimary, '#002984']} styles={styles.container}>
      <Image style={styles.logo} source={logo} />
      <CustomBackground content={jsx} />
    </LinearGradient>
  );
}