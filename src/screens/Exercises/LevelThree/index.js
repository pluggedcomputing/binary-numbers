import React, {useState, useEffect} from 'react';
import {View, Text, Image, KeyboardAvoidingView} from 'react-native';
import {ProgressBar} from 'react-native-paper';

import question1 from '../../../assets/images/challenges/exec1.png';
import question10 from '../../../assets/images/challenges/exec10.png';
import question2 from '../../../assets/images/challenges/exec2.png';
import question3 from '../../../assets/images/challenges/exec3.png';
import question4 from '../../../assets/images/challenges/exec4.png';
import question5 from '../../../assets/images/challenges/exec5.png';
import question6 from '../../../assets/images/challenges/exec6.png';
import question7 from '../../../assets/images/challenges/exec7.png';
import question8 from '../../../assets/images/challenges/exec8.png';
import question9 from '../../../assets/images/challenges/exec9.png';
import Card from '../../../components/Card';
import ChoiceButton from '../../../components/ChoiceButton';
import CustomBackground from '../../../components/CustomBackground';
import CustomTextInput from '../../../components/CustomTextInput';
import HeaderOfExcercicos from '../../../components/HeaderOfExercises';
import {colors} from '../../../styles';
import styles from './styles';

export default function LevelThree({navigation}) {
  const maxStep = 10;
  const [step, setSteps] = useState(1);
  const [indexImage, setIndexImage] = useState(0);
  const [value, setValue] = useState();

  const progrees = (step - 1) / maxStep;
  const finishLevel = step === 11;
  const arrayImage = [
    question1,
    question2,
    question3,
    question4,
    question5,
    question6,
    question7,
    question8,
    question9,
    question10,
  ];

  useEffect(() => {
    if (finishLevel) {
      navigation.navigate('Congratulations');
    }
  }, [step]);

  const viewOfContent = [
    <Text style={styles.contentText}>Decifre a imagem abaixo</Text>,
    <View>
      <Text style={[styles.contentText, {marginTop: 10}]}>
        Presione o cartão para vira-lo
      </Text>
      <View style={styles.cardGroup}>
        <Card number={16} />
        <Card number={8} />
        <Card number={4} />
        <Card number={2} />
        <Card number={1} />
      </View>
    </View>,
  ];

  return (
    <KeyboardAvoidingView behavior="padding" enabled style={styles.container}>
      <HeaderOfExcercicos
        style={styles.header}
        title="Nível 3 -  Trabalhar com Números Binários "
        navigation={navigation}
      />
      <CustomBackground content={viewOfContent} />
      <Image style={styles.image} source={arrayImage[indexImage]} />
      <CustomTextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Digite aqui"
        icon="square-edit-outline"
        onChangeText={text => setValue(text)}
        value={value}
      />
      <ChoiceButton
        text="Enviar"
        style={styles.button}
        onPress={() => {
          setSteps(step + 1);
          setValue('');
          setIndexImage(indexImage + 1);
        }}
      />
      <ProgressBar
        style={styles.progressBar}
        color={colors.colorSucess}
        progress={progrees}
      />
    </KeyboardAvoidingView>
  );
}
