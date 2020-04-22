import React, {useState, useEffect} from 'react';
import {SafeAreaView, StatusBar, Text, View} from 'react-native';
import {ProgressBar} from 'react-native-paper';

import {MaterialCommunityIcons} from '@expo/vector-icons';
import {useRoute} from '@react-navigation/native';

import CardGroup from '../../components/CardGroup';
import CustomBackground from '../../components/CustomBackground';
import Tooltip from '../../components/HeaderOfExercises/Tooltips';
import {
  MultipleChoice,
  Numeric,
  ShortAnswer,
  TrueOrFalse,
} from '../../components/Questions';
import {general, colors} from '../../styles';
import styles from './styles';

export default function Exercises({navigation}) {
  const [state, setstate] = useState(false);

  const response = useRoute().params.data;
  const [step, setSteps] = useState(0);

  const [exercise] = useState(response);
  const [question, setQuestion] = useState(response.questions[step]);

  const handleTips = () => setstate(!state);

  const maxStep = exercise.questions.length;
  const progress = step / maxStep;
  const test = <Text>{response.tips}</Text>;
  const finishLevel = step === maxStep;

  useEffect(() => {
    if (finishLevel) {
      navigation.navigate('Congratulations', {level: response.level});
    } else {
      setQuestion(response.questions[step]);
    }
  }, [step]);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: response.title,
      headerRight: () => (
        <MaterialCommunityIcons
          name="lightbulb-on-outline"
          size={general.iconSize.bigger}
          style={styles.icon}
          onPress={() => (
            <Tooltip content={test} isVisible={state} onCancel={handleTips} />
          )}
        />
      ),
    });
  }, [navigation]);
  const viewOfContent = [
    <Text style={styles.contentText}>{exercise.introduction}</Text>,
    <CardGroup />,
    <Text style={styles.statement}>{question.statement}</Text>,
  ];

  function chooseQuestionRender() {
    switch (question.type) {
      case 'MULTIPLECHOICE':
        return (
          <MultipleChoice
            step={step}
            setSteps={setSteps}
            alternatives={question.alternatives}
          />
        );

      case 'SHORTANSWER':
        return (
          <ShortAnswer
            step={step}
            setSteps={setSteps}
            correctAnswer={question.short_answer}
          />
        );

      case 'TRUEORFALSE':
        return (
          <TrueOrFalse
            step={step}
            setSteps={setSteps}
            correctAnswer={question.true_or_false_answer}
          />
        );

      // case 'CORRESPONDENCE':
      //  return CORRESPONDENCE;

      case 'NUMERIC':
        return (
          <Numeric
            step={step}
            setSteps={setSteps}
            correctAnswer={question.numeric_answer}
          />
        );

      default:
        return null;
    }
  }

  return (
    <View>
      <ProgressBar color={colors.colorSucess} progress={progress} />
      <SafeAreaView style={styles.container}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={colors.colorPrimary}
        />
        <CustomBackground style={styles.info} content={viewOfContent} />
        {chooseQuestionRender()}
      </SafeAreaView>
    </View>
  );
}
