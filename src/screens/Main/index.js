import React from 'react';
import {SafeAreaView, Image, Text} from 'react-native';

import CustomButton from '../../components/CustomButton';
import logo from '../../assets/logo_blue.png';
import styles from './styles';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.title}>Computação Plugada</Text>
      <Text style={styles.subTitle}>Contanto os Pontos</Text>
      <CustomButton style={styles.buttons} text="Iniciar" />
      <CustomButton style={styles.buttons} text="Sobre" />
    </SafeAreaView>
  );
};

export default App;
