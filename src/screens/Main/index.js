import React from 'react';
import {SafeAreaView, Image, Text} from 'react-native';

import CustomButton from '../../components/CustomButton';

import logo from '../../assets/images/logo_blue.png';

import styles from './styles';

function Main({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.title}>Computação Plugada</Text>
      <Text style={styles.subTitle}>Contanto os Pontos</Text>
      <CustomButton
        style={styles.buttons}
        text="Iniciar"
        onPress={() => navigation.navigate('LevelSelection')}
      />
      <CustomButton
        style={styles.buttons}
        text="Sobre"
        onPress={() => navigation.navigate('ScreenAbout')}
      />
    </SafeAreaView>
  );
}

export default Main;
