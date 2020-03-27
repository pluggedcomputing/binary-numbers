import React, {useState, useEffect} from 'react';
import {View, Text, KeyboardAvoidingView, ScrollView} from 'react-native';
import {ProgressBar} from 'react-native-paper';

import AlphabetTable from '../../../components/AlphabetTable';
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

  const instanceInitial = [
    {id: 1, value: ''},
    {id: 2, value: ''},
    {id: 3, value: ''},
    {id: 4, value: ''},
    {id: 5, value: ''},
  ];

  const [inputMessage, setInputMessage] = useState('');

  const [numbers, setNumbers] = useState('');

  const [arrayRow, setArrayRow] = useState(instanceInitial);

  const [componentChristmasTree, setComponentChristmasTree] = useState();

  useEffect(() => {
    if (finishLevel) {
      navigation.navigate('Congratulations');
    }

    const tree = {
      1: <ChristmasTreeTableStepOne />,
      2: <ChristmasTreeTableStepTwo />,
      3: <ChristmasTreeTableStepThree />,
    };

    setComponentChristmasTree(tree[step]);
  }, [step]);

  function updateDataInput(index, text) {
    const newArray = [...arrayRow];
    const id = index - 1;
    newArray[id] = {id: index, value: text};
    setArrayRow(newArray);
  }

  function checkEmpytInputs() {
    if (step < 4) {
      for (let index = 0; index < arrayRow.length; index += 1) {
        if (arrayRow[index].value === '') return false;
      }
    }
    return true;
  }

  function insertListNumber() {
    let numberSelection = numbers;
    arrayRow.forEach(item => {
      numberSelection += `${item.value} `;
    });
    if (step < 3) numberSelection += '- ';
    setNumbers(numberSelection);
  }

  function christmansTree() {
    return (
      <View style={styles.componetTree}>
        <View style={styles.tree}>{componentChristmasTree}</View>
        <KeyboardAvoidingView
          style={styles.subContainer}
          behavior="padding"
          enabled>
          {arrayRow.map(item => (
            <View key={item.id} style={styles.rowContainer}>
              <Text>Linha {item.id} =</Text>
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
      </View>
    );
  }

  function answerFinal() {
    return (
      <View style={styles.componentAnswer}>
        <Text style={styles.text}>
          Esses foram os números que você selecionou:
        </Text>
        <Text style={styles.textAnswer}>{numbers}</Text>
        <Text style={styles.text}>Agora vamos traduzir a mensagem de Tom?</Text>
        <AlphabetTable />
        <CustomTextInput
          style={styles.input}
          placeholder={messagePlaceholder}
          icon={iconName}
          onChangeText={text => setInputMessage(text)}
          value={inputMessage}
        />
      </View>
    );
  }

  function changeComponent(acutalStep) {
    if (acutalStep < 4) {
      return christmansTree();
    }
    return answerFinal();
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <HeaderOfExercises
          title=" Nível 4 - Enviar Mensagens Secretas"
          navigation={navigation}
        />
        {changeComponent(step)}
        <ChoiceButton
          text="Enviar"
          onPress={() => {
            if (checkEmpytInputs()) {
              insertListNumber();
              setSteps(step + 1);
              setArrayRow(instanceInitial);
            }
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
