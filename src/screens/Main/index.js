import React from 'react';
import {SafeAreaView, Image, Text, StatusBar, View} from 'react-native';

import cover from '../../assets/images/cover/cover.png';
import CustomButton from '../../components/CustomButton';
import styles from './styles';

function Main({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle='light-content' backgroundColor='#90CCFF' />

      <View style={styles.box}>
        <Image source={cover} style={styles.logo} />
        <Text style={styles.textPrimary}>CONTANDO OS PONTOS</Text>
        <Text style={styles.textSecondary}>Números binários</Text>
      </View>

      <View style={styles.box}>
        <CustomButton
          style={styles.buttons}
          text="Iniciar"
          onPress={() => navigation.navigate('LevelSelection')}
        />
        
      </View>
      
    </SafeAreaView>
  );
}

export default Main;
