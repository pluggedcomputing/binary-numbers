import React from 'react';
import {View, SafeAreaView, Text} from 'react-native';
import {ProgressBar} from 'react-native-paper';

import Card from '../../../components/Card';
import CustomBackgruond from '../../../components/CustomBackground';
import CustomButtom from '../../../components/CustomButton';
import CustomTextInput from '../../../components/CustomTextInput';
import HeaderOfExcercises from '../../../components/HeaderOfExercises';
import {colors} from '../../../styles';
import styles from './styles';

export default function LevelTwo({navigation}) {
  const progrees = 0.5;

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
  ];

  const descriptive = (
    <View style={styles.descriptive}>
      <View style={styles.subDescriptive}>
        <CustomTextInput
          keyboardType="numeric"
          placeholder="Maior"
          secureTextEntry={false}
          icon="arrow-up-drop-circle-outline"
        />
        <CustomTextInput
          keyboardType="numeric"
          placeholder="Menor"
          secureTextEntry={false}
          icon="arrow-down-drop-circle-outline"
        />
      </View>
      <CustomButtom text="enviar" style={styles.button} />
    </View>
  );

  const multipleChoice = {};

  function changeGroupButton(type) {
    const groupButton = {
      descriptive,
      multipleChoice,
    };
    return groupButton[type];
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <HeaderOfExcercises
          title="Nível 2 - Números Binários"
          navigation={navigation}
        />
      </View>
      <View style={styles.info}>
        <CustomBackgruond content={viewOfContent} />
      </View>
      <View style={styles.containerGroup}>
        {changeGroupButton('descriptive')}
      </View>
      <ProgressBar
        style={styles.progressBar}
        color={colors.colorSucess}
        progress={progrees}
      />
    </SafeAreaView>
  );
}
