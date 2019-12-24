import React from 'react';
import { Image, Text, SafeAreaView, StatusBar, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import CustomBackground from "../../components/CustomBackground";

import logo from '../../assets/logo.png';
import { colors } from '../../styles';

export default function ScreenOn() {
  const jsx = [<Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. </Text>,<Text>ola</Text>,<Text>turn down for whatch</Text>, <Text>oiiii</Text>]
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={[colors.colorPrimary, '#242F68']} style={styles.container}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={styles.container.backgroundColor}
        />
        <Image source={logo} style={styles.logo} />
        <CustomBackground content={jsx} />
        <View style={styles.loadText}>
          <Text style={styles.text}>
            Desenvolvido e mantido pela equipe do
            projeto Computação Desplugada da UFPB
                        campus iV
              Todos os Direitos Reservados
                         ©2019
          </Text>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
}