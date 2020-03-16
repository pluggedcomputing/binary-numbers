import React, {useState, useEffect} from 'react';
import {View, Text, KeyboardAvoidingView, ScrollView} from 'react-native';
import {ProgressBar} from 'react-native-paper';

import ChoiceButton from '../../../components/ChoiceButton';
import {
  ChristmasTreeTableStepOne,
  ChristmasTreeTableStepTwo,
  ChristmasTreeTableStepThree,
} from '../../../components/ChristmasTreeTable';
import CustomTextInput from '../../../components/CustomTextInput';
import HeaderOfExercises from '../../../components/HeaderOfExercises';
import {colors} from '../../../styles';
import styles from './styles';

export default function LevelFour({navigation}) {
  const maxStep = 4;
  const finalPage = 5;
  const [step, setSteps] = useState(1);
  const progrees = (step - 1) / maxStep;
  const finishLevel = step === finalPage;
  const messagePlaceholder = 'Digite aqui';
  const iconName = 'square-edit-outline';
  // let numberSelection = '';

  const [arrayRow, setArrayRow] = useState([
    {id: 1, value: ''},
    {id: 2, value: ''},
    {id: 3, value: ''},
    {id: 4, value: ''},
    {id: 5, value: ''},
  ]);

  useEffect(() => {
    if (finishLevel) navigation.navigate('Congratulations');
  }, [step]);

  function changeChristmasTree(acutalStep) {
    const tree = {
      1: <ChristmasTreeTableStepOne />,
      2: <ChristmasTreeTableStepTwo />,
      3: <ChristmasTreeTableStepThree />,
    };

    return tree[acutalStep];
  }

  function updateDataInput(index, text) {
    const newArray = [...arrayRow];
    const id = index - 1;
    newArray[id] = {id: index, value: text};
    setArrayRow(newArray);
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <HeaderOfExercises
          title=" Nível 4 - Enviar Mensagens Secretas"
          navigation={navigation}
        />
        <View style={styles.tree}>{changeChristmasTree(step)}</View>
        <KeyboardAvoidingView
          style={styles.subContainer}
          behavior="padding"
          enabled>
          {arrayRow.map(item => (
            <View style={styles.rowContainer}>
              <Text key={item.id}>Linha {item.id} =</Text>
              <CustomTextInput
                style={styles.input}
                keyboardType="numeric"
                placeholder={messagePlaceholder}
                icon={iconName}
                onChangeText={text => updateDataInput(item.id, text)}
                value={item.value}
              />
            </View>
          ))}
        </KeyboardAvoidingView>
        <ChoiceButton
          text="Enviar"
          correct
          onPress={() => {
            setSteps(step + 1);
            // if (item.correct) {
            //   setSteps(step + 1);
            // }
          }}
        />
        <ProgressBar
          style={styles.progressBar}
          color={colors.colorSucess}
          progress={progrees}
        />
      </View>
    </ScrollView>
  );
}
