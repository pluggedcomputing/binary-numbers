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

  const instanceInitial = [
    {id: 1, value: ''},
    {id: 2, value: ''},
    {id: 3, value: ''},
    {id: 4, value: ''},
    {id: 5, value: ''},
  ];

  const [numbers, setNumbers] = useState('');

  const [arrayRow, setArrayRow] = useState(instanceInitial);

  const [componentChristmasTree, setComponentChristmasTree] = useState(
    <ChristmasTreeTableStepOne />,
  );

  useEffect(() => {
    if (finishLevel) {
      navigation.navigate('Congratulations');
    } else if (step === 2) {
      setComponentChristmasTree(<ChristmasTreeTableStepTwo />);
    } else if (step === 3) {
      setComponentChristmasTree(<ChristmasTreeTableStepThree />);
    }
    // else if (step === 4) {
    //   setComponentChristmasTree(
    //     <Text style={{flex: 1, backgroundColor: colors.colorBackground}}>
    //       teasdfxto{numbers}
    //     </Text>,
    //   );
    // }
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
    if (step < 3) numberSelection += '-';
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

  function changeComponent(acutalStep) {
    if (acutalStep < 4) {
      return christmansTree();
    }
    return (
      <Text style={{flex: 1, backgroundColor: colors.colorBackground}}>
        {numbers}
      </Text>
    );
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
            if (checkEmpytInputs() || step > 3) {
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
