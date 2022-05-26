import React from 'react';
import {
  SafeAreaView,
  Text,
  StatusBar,
  TouchableOpacity,
  View,
  Image,
  Alert
} from 'react-native';
import Share from 'react-native-share';

import AsyncStorage from '@react-native-community/async-storage';
import {useRoute} from '@react-navigation/native';

import data from '../../assets/data.json';
import Home from '../../assets/images/buttons/home.png';
import Remake from '../../assets/images/buttons/reload.png';
import ShareImg from '../../assets/images/buttons/share.png';
import Star from '../../assets/images/stars/star.png';
import WinLevel from '../../assets/images/win_level/win.png';
import files from '../../filesBase64';
import styles from './styles';



const Congratulations = props => {
  const {navigation} = props;
  const {level} = useRoute().params;

  const navigateScreen = async () => {
    await AsyncStorage.setItem(`level${level + 1}`, 'true');
    navigation.navigate('LevelSelection');
  };

  const customShare = async() =>{
    const ShareOptions={
      message:'Saiba mais sobre o projeto em: https://sites.google.com/view/computacaoplugada',
      url: files.bannerShare
    }
    try{
      // eslint-disable-next-line no-unused-vars
      const ShareResponse = await Share.open(ShareOptions);
    }catch(error){
      Alert.alert(
        'oops',
        'Houve um problema ao compartilhar.'
        );
    }
  };



  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#90CCFF"
      />
      <Text style={styles.title}>FASE {level}</Text>
      <Image source={WinLevel} style={styles.WinLevel} />
      <View style={styles.textContent}> 
        <Text style={styles.textCongralulations}>PARABÉNS</Text>
        <Text style={styles.textCongralulations}>Você concluiu a FASE {level}</Text>
      </View>
      <View style={styles.starsContainer}>
        <Image source={Star} />
        <Image source={Star} />
        <Image source={Star} />
        <Image source={Star} />
        <Image source={Star} />
      </View>
      <View>
        <Text style={styles.feedbackContent}>Você concluiu a fase inteira sem nenhum erro. Seu aprendizado foi muito bom. </Text>
      </View>

      <View style={styles.buttonsContainer}>
        <View style={styles.button}>
          <TouchableOpacity 
            style={styles.buttonContainer}
            onPress={customShare}
            
            >
            <Image source={ShareImg} />
          </TouchableOpacity>
          <Text>Compartilhar</Text>
        </View>

        <View style={styles.button}>
          <TouchableOpacity
            style={styles.buttonContainer}
            disabled// desabilitado temporariamente 
            onPress={() => navigation.navigate('Exercises', data[level-1])}
            >
            <Image source={Remake} />
          </TouchableOpacity>
          <Text>Refazer</Text>
        </View>

        <View style={styles.button}>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={navigateScreen}
        >
            <Image source={Home} />
          </TouchableOpacity>
          <Text>Ir para fases</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Congratulations;