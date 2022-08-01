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
import {useRoute, CommonActions} from '@react-navigation/native';

import data from '../../assets/data.json';
import Close from '../../assets/images/close_icon/close.png'
import Next from '../../assets/images/next_icon/next.png';
import Remake from "../../assets/images/reload_icon/reload.png";
import ShareImg from '../../assets/images/share_icon/share.png';
import Star from '../../assets/images/stars/star.png';
import WinLevel from '../../assets/images/win_level/win.png';
import files from '../../filesBase64';
import { colors } from '../../styles';
import styles from './styles';




const Congratulations = props => {
  const {navigation} = props;
  const {level} = useRoute().params;

  const navigateScreen = async () => {
    await AsyncStorage.setItem(`level${level + 1}`, 'true');
    navigation.navigate('LevelSelection');
  };

  const nextLevel = async () =>{
    if(level < 8){
      await AsyncStorage.setItem(`level${level + 1}`, 'true');
      navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [
          {
            name: 'Exercises',
            params: {data:data[level] },
          },
          
        ],
      })
    )
    }
  }

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
        backgroundColor={colors.colorPrimary}
      />
      <View style={styles.headerContainer}>
        <Text style={styles.title}>FASE {level}</Text>
        <TouchableOpacity 
          style={styles.closeButton}
          onPress={navigateScreen}
            
            >
          <Image source={Close} />
        </TouchableOpacity>
      </View>
      <Image source={WinLevel} style={styles.WinLevel} />
      <View style={styles.textContent}> 
        <Text style={styles.textCongralulations}>PARABÉNS</Text>
        <Text style={styles.textCongralulations}>Você concluiu a 
          FASE {level}
        </Text>
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
            onPress={() => navigation.dispatch(
              CommonActions.reset({
                index: 1,
                routes: [
                  {
                    name: 'Exercises',
                    params: {data:data[level-1] },
                  },
                  
                ],
              })
            )}
            >
            <Image source={Remake} />
          </TouchableOpacity>
          <Text>Refazer</Text>
        </View>

        <View style={styles.button}>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => nextLevel()}
                
        >
            <Image source={Next} />
          </TouchableOpacity>
          <Text>Próxima fase</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Congratulations;