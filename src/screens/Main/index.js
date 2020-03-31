import React from 'react';
import {SafeAreaView, Image, Text} from 'react-native';

import logo from '../../assets/images/logo_blue.png';
import CustomButton from '../../components/CustomButton';
import styles from './styles';

function Main({navigation}) {
  const data = {
    title: 'Titulo',
    description: 'Lorem Ipsum',
    introduction:
      'Tudo o que você vê ou ouve no computador - palavras, imagens, números, filmes e até mesmo o som - são armazenados usando apenas estes dois numerais! Então, você achava que sabia contar? Bem, aqui está uma nova forma de fazer isso! Sabia que os computadores utilizam apenas zeros e uns?',
    showCards: true,
    tips: 'tips',
    level: 1,
    module: {
      id: 1,
      name: 'Binary numbers',
    },
    questions: [
      {
        statement: 'statement',
        type: 'TRUEORFALSE',
        level: 1,
        image: '__tests__/assets/logo.png',

        alternatives: [
          {id: 9, text: 'text9', correct: true},
          {id: 10, text: 'text10', correct: false},
          {id: 11, text: 'text11', correct: false},
          {id: 12, text: 'text12', correct: false},
        ],
        correspondence_list: {
          firstList: [{id: 1, item: 'item'}],
          secondList: [{id: 1, item: 'item'}],
        },
        short_answer: 'short_answer',
        true_or_false_answer: true,
        numeric_answer: 1,
      },
      {
        statement: 'statement',
        type: 'SHORTANSWER',
        level: 1,
        image: '__tests__/assets/logo.png',

        alternatives: [
          {id: 9, text: 'text9', correct: true},
          {id: 10, text: 'text10', correct: false},
          {id: 11, text: 'text11', correct: false},
          {id: 12, text: 'text12', correct: false},
        ],
        correspondence_list: {
          firstList: [{id: 1, item: 'item'}],
          secondList: [{id: 1, item: 'item'}],
        },
        short_answer: 'short_answer',
        true_or_false_answer: true,
        numeric_answer: 1,
      },
      {
        statement: 'statement',
        type: 'NUMERIC',
        level: 1,
        image: '__tests__/assets/logo.png',

        alternatives: [
          {id: 1, text: 'text1', correct: true},
          {id: 2, text: 'text2', correct: false},
          {id: 3, text: 'text3', correct: false},
          {id: 4, text: 'text4', correct: false},
        ],
        correspondence_list: {
          firstList: [{id: 1, item: 'item'}],
          secondList: [{id: 1, item: 'item'}],
        },
        short_answer: 'short_answer',
        true_or_false_answer: true,
        numeric_answer: 1,
      },
      {
        statement: 'statement',
        type: 'MULTIPLECHOICE',
        level: 1,
        image: '__tests__/assets/logo.png',

        alternatives: [
          {id: 5, text: 'text5', correct: true},
          {id: 6, text: 'text6', correct: false},
          {id: 7, text: 'text7', correct: false},
          {id: 8, text: 'text8', correct: false},
        ],
        correspondence_list: {
          firstList: [{id: 1, item: 'item'}],
          secondList: [{id: 1, item: 'item'}],
        },
        short_answer: 'short_answer',
        true_or_false_answer: true,
        numeric_answer: 1,
      },
    ],
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.title}>Computação Plugada</Text>
      <Text style={styles.subTitle}>Contanto os Pontos</Text>
      <CustomButton
        style={styles.buttons}
        text="Iniciar"
        onPress={() => navigation.navigate('LevelSelection', {data})}
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
