import React, {useState, useEffect} from 'react';
import {SafeAreaView, StatusBar, Text} from 'react-native';

import CardGroup from '../../components/CardGroup';
import CustomBackground from '../../components/CustomBackground';
import HeaderOfExercises from '../../components/HeaderOfExercises';
import {
  MultipleChoice,
  Numeric,
  ShortAnswer,
  TrueOrFalse,
} from '../../components/Questions';
import {colors} from '../../styles';
import styles from './styles';

export default function Exercises({navigation}) {
  const response = navigation.getParam('data');
  const [step, setSteps] = useState(0);

  const [exercise] = useState(response);
  const [question, setQuestion] = useState(response.questions[step]);

  const maxStep = exercise.questions.length;
  const progress = step / maxStep;
  const finishLevel = step === maxStep;

  useEffect(() => {
    if (finishLevel) {
      navigation.navigate('Congratulations');
    } else {
      setQuestion(response.questions[step]);
    }
  }, [step]);

  const viewOfContent = [
    <Text style={styles.contentText}>{exercise.introduction}</Text>,
    exercise.showCards ? <CardGroup />:null ,
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
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.colorPrimary}
      />
      <HeaderOfExercises
        tips={<Text>{exercise.tips}</Text>}
        title={exercise.title}
        progress={progress}
        navigation={navigation}
      />
      <CustomBackground style={styles.info} content={viewOfContent} />
      {chooseQuestionRender()}
    </SafeAreaView>
  );
}
