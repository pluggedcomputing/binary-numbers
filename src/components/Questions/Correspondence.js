import React, {useState} from 'react';
import {View, FlatList, TextInput, Text} from 'react-native';

import {PropTypes} from 'prop-types';

import ChoiceButton from '../ChoiceButton';
import styles from './styles';

const correspondence = props => {
  const {correspondenceList, step, setSteps} = props;
  const [correspondenceAnswer, setCorrespondenceAnswer] = useState('');

  function correspondenceAnswerIsCorrect(v) {
    return v === 'valor correto';
  }
  return (
    <View style={styles.correspondenceContainer}>
      <View style={styles.correspondenceListContent}>
        <FlatList
          data={correspondenceList.firstList}
          keyExtractor={firstList => String(firstList.id)}
          renderItem={({item}) => (
            <Text style={styles.correspondenceListText}>
              {item.id}. {item.item}
            </Text>
          )}
        />
        <FlatList
          data={correspondenceList.secondList}
          keyExtractor={secondList => String(secondList.id)}
          renderItem={({item}) => (
            <View style={styles.correspondenceSecondListView}>
              <TextInput
                onChangeText={text => setCorrespondenceAnswer(text)}
                value={correspondenceAnswer}
                placeholder="..."
              />
              <Text style={styles.correspondenceListText}>{item.item}</Text>
            </View>
          )}
        />
      </View>
      <ChoiceButton
        text="Enviar"
        correct={correspondenceAnswerIsCorrect(true)}
        onPress={() => {
          if (correspondenceAnswerIsCorrect(true)) {
            setSteps(step + 1);
          }
        }}
      />
    </View>
  );
};

correspondence.propTypes = {
  correspondenceList: PropTypes.object.isRequired,
  step: PropTypes.number.isRequired,
  setSteps: PropTypes.func.isRequired,
};

export default correspondence;
