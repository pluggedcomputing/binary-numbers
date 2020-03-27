import React, {useState, useEffect} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {ProgressBar} from 'react-native-paper';

import ChoiceButton from '../../../components/ChoiceButton';
import CustomBackground from '../../../components/CustomBackground';
import HeaderOfExercises from '../../../components/HeaderOfExercises';
import {colors} from '../../../styles';
import styles from './styles';

export default function LevelSeven({navigation}) {
  const maxStep = 3;
  const [step, setSteps] = useState(1);
  const progrees = (step - 1) / maxStep;
  const finishLevel = step === 4;

  const [question, setQuestion] = useState({
    statement: `${step}. O que você percebeu sobre o número de pontos nos cartões?`,
    alternatives: [
      {
        text: 'OP1',
        correct: false,
      },
      {
        text: 'OP2',
        correct: false,
      },
      {
        text: 'OP3',
        correct: false,
      },
      {
        text: 'OP4',
        correct: true,
      },
    ],
  });

  useEffect(() => {
    if (finishLevel) {
      navigation.navigate('Congratulations');
    } else {
      setQuestion({
        statement: `${step}. O que você percebeu sobre o número de pontos nos cartões?`,
        alternatives: [
          {
            text: 'São duas vezes maior que o próximo',
            correct: true,
          },
          {
            text: 'São valores aleatórios',
            correct: false,
          },
          {
            text: 'São a soma do próximo com o anterior',
            correct: false,
          },
          {
            text: 'Estão em ordem crescente',
            correct: true,
          },
        ],
      });
    }
  }, [step]);

  const viewOfContent = [
    <Text style={styles.contentText}>
      Então, você achava que sabia contar? Bem, aqui está uma nova forma de
      fazer isso! Sabia que os computadores utilizam apenas zeros e uns?
    </Text>,
    <Text style={styles.contentText}>
      Tudo o que você vê ou ouve no computador - palavras, imagens, números,
      filmes e até mesmo o som - são armazenados usando apenas estes dois
      numerais! Estas atividades ensinarão como enviar mensagens secretas aos
      seus amigos usando exatamente o mesmo método que um computador.
    </Text>,
  ];

  return (
    <SafeAreaView style={styles.contianer}>
      <HeaderOfExercises
        title="Nível 7 - Mais Sobre Números Binários"
        navigation={navigation}
      />
      <CustomBackground content={viewOfContent} />
      <View style={styles.buttonGroup}>
        {question.alternatives.map(item => {
          return (
            <ChoiceButton
              key={item.text}
              text={item.text}
              correct={item.correct}
              onPress={() => {
                if (item.correct) {
                  setSteps(step + 1);
                }
              }}
            />
          );
        })}
      </View>
      <ProgressBar
        style={styles.progressBar}
        color={colors.colorSucess}
        progress={progrees}
      />
    </SafeAreaView>
  );
}
