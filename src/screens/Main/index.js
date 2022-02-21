import React from 'react';
import {SafeAreaView, Image, Text, StatusBar, View} from 'react-native';

import cover from '../../assets/images/cover.png';
import CustomButton from '../../components/CustomButton';
import styles from './styles';

function Main({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle='light-content' backgroundColor='#90CCFF' />

      <View style={styles.box}>
        <Image source={cover} style={styles.logo} />
        <Text style={styles.textPrimary}>CONTANDO OS PONTOS</Text>
        <Text style={styles.textSecondary}>Numeros binários</Text>
      </View>

      <View style={styles.box}>
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
      </View>
      
    </SafeAreaView>
  );
}

export default Main;
