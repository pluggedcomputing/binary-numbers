import React, {useState, useEffect} from 'react';
import {Text, View, KeyboardAvoidingView, ScrollView} from 'react-native';
import {ProgressBar} from 'react-native-paper';

import AlphabetTable from '../../../components/AlphabetTable';
import ChoiceButton from '../../../components/ChoiceButton';
import CustomBackground from '../../../components/CustomBackground';
import CustomTextInput from '../../../components/CustomTextInput';
import HeaderOfExercises from '../../../components/HeaderOfExercises';
import {colors} from '../../../styles';
import styles from './styles';

export default function LevelFive({navigation}) {
  const [step, setSteps] = useState(1);
  const maxStep = 2;
  const finalStep = 3;
  const finishLevel = step === finalStep;
  const [message, setMessage] = useState('');
  const progrees = (step - 1) / maxStep;

  useEffect(() => {
    if (finishLevel) {
      navigation.navigate('Congratulations');
    }
  }, [step]);

  const viewOfContent = [
    <Text style={styles.contentText}>
      Usando o mesmo código que Tom utilizou na loja, tente enviar uma mensagem
      de correio eletrônico ao seu amigo.
    </Text>,
    <Text style={styles.contentText}>
      Mas facilite as coisas para você e seu amigo, pois vocês não precisam ser
      tão rápidos quanto um modem de verdade !
    </Text>,
  ];

  function contianerMenu() {
    const menu = {
      1: (
        <View style={styles.containerText}>
          <Text style={styles.textQuestion}>
            PRIMEIRO ENVIE SEU NOME PARA OBTER UMA RESPOSTA
          </Text>
        </View>
      ),
      2: (
        <View style={styles.containerTable}>
          <AlphabetTable />
          <Text>O tom te enviou uma mensagem, vamos traduzir?</Text>
        </View>
      ),
    };
    return menu[step];
  }

  return (
    <ScrollView style={styles.containerScrollView}>
      <KeyboardAvoidingView enabled style={styles.container}>
        <HeaderOfExercises
          title="Nivel 5 - Correio Eletrônico"
          navigation={navigation}
        />
        <CustomBackground content={viewOfContent} />
        {contianerMenu()}

        <CustomTextInput
          style={styles.input}
          placeholder="Digite seu nome"
          icon="square-edit-outline"
          onChangeText={text => setMessage(text)}
          value={message}
        />
        <ChoiceButton
          text="Enviar"
          style={styles.button}
          onPress={() => {
            setSteps(step + 1);
            setMessage('');
          }}
        />
        <ProgressBar
          style={styles.progressBar}
          color={colors.colorSucess}
          progress={progrees}
        />
      </KeyboardAvoidingView>
    </ScrollView>
  );
}
