import React, {useState, useEffect} from 'react';
import {View, Text, KeyboardAvoidingView} from 'react-native';
import {ProgressBar} from 'react-native-paper';

import Card from '../../../components/Card';
import ChoiceButton from '../../../components/ChoiceButton';
import CustomBackgruond from '../../../components/CustomBackground';
import CustomTextInput from '../../../components/CustomTextInput';
import HeaderOfExcercises from '../../../components/HeaderOfExercises';
import {colors} from '../../../styles';
import styles from './styles';

export default function LevelTwo({navigation}) {
  const maxStep = 3;
  const [step, setSteps] = useState(1);
  const [state, setState] = useState({
    bigger: '',
    smaller: '',
    isCorrect: false,
  });

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

  const progrees = (step - 1) / maxStep;
  const finishLevel = step === 4;

  useEffect(() => {
    if (finishLevel) {
      navigation.navigate('Congratulations');
    } else if (step === 2) {
      setState({...state, isCorrect: true});
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
    <View>
      <Text style={[styles.contentText, {marginTop: 10}]}>
        Presione o cartão para vira-lo
      </Text>
      <View style={styles.cardGroup}>
        <Card number={16} rotate />
        <Card number={8} />
        <Card number={4} rotate />
        <Card number={2} rotate />
        <Card number={1} />
      </View>
      <Text style={styles.contentText}>
        As cartas acima estão representando o número 9.
      </Text>
    </View>,
    <Text style={styles.statement}>{question.statement}</Text>,
  ];

  const descriptive = (
    <View style={styles.descriptive}>
      <View style={styles.subDescriptive}>
        <CustomTextInput
          keyboardType="numeric"
          placeholder="Maior"
          icon="arrow-up-drop-circle-outline"
          onChangeText={text => setState({...state, bigger: text})}
          value={state.bigger}
        />
        <CustomTextInput
          keyboardType="numeric"
          placeholder="Menor"
          icon="arrow-down-drop-circle-outline"
          onChangeText={text => setState({...state, smaller: text})}
          value={state.smaller}
        />
      </View>
      <ChoiceButton
        text="enviar"
        correct={state.isCorrect}
        onPress={() => {
          // trocar valores default por resposta da api
          if (state.bigger === '31' && state.smaller === '1') {
            setSteps(step + 1);
          }
        }}
      />
    </View>
  );

  const multipleChoice = (
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
  );

  function changeGroupButton() {
    if (step === 1) {
      return descriptive;
    }
    return multipleChoice;
  }
  return (
    <KeyboardAvoidingView style={styles.container}>
      <HeaderOfExcercises
        style={styles.header}
        title="Nível 2 - Números Binários"
        navigation={navigation}
      />
      <CustomBackgruond content={viewOfContent} style={styles.info} />
      {changeGroupButton()}
      <ProgressBar
        style={styles.progressBar}
        color={colors.colorSucess}
        progress={progrees}
      />
    </KeyboardAvoidingView>
  );
}
