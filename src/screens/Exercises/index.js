import React, {useState, useEffect, useLayoutEffect} from 'react';
import {Text, View, Image} from 'react-native';
import {ProgressBar} from 'react-native-paper';

import {MaterialCommunityIcons} from '@expo/vector-icons';
import {useRoute} from '@react-navigation/native';

import CardGroup from '../../components/CardGroup';
import CustomBackground from '../../components/CustomBackground';
import {
  MultipleChoice,
  Numeric,
  ShortAnswer,
  TrueOrFalse,
} from '../../components/Questions';
import Tooltip from '../../components/Tooltips';
import {general, colors} from '../../styles';
import styles from './styles';

export default function Exercises({navigation}) {
  const [showTips, setShowTips] = useState(false);
  const [showAnswerOptions, setShowAnswerOptions] = useState(false);

  const response = useRoute().params.data;
  const [step, setSteps] = useState(0);

  const [exercise] = useState(response);
  const [question, setQuestion] = useState(response.questions[step]);

  const maxStep = exercise.questions.length;
  const progress = step / maxStep;
  const finishLevel = step === maxStep;

  const imagens = {
    l3q1: require('../../assets/images/level3/l3q1.png'),
    l3q2: require('../../assets/images/level3/l3q2.png'),
    l3q3: require('../../assets/images/level3/l3q3.png'),
    l3q4: require('../../assets/images/level3/l3q4.png'),
    l3q5: require('../../assets/images/level3/l3q5.png'),
    l3q6: require('../../assets/images/level3/l3q6.png'),
    l3q7: require('../../assets/images/level3/l3q7.png'),
    l3q8: require('../../assets/images/level3/l3q8.png'),
    l3q9: require('../../assets/images/level3/l3q9.png'),
    l3q10: require('../../assets/images/level3/l3q10.png'),
  };

  const handleTips = () => setShowTips(!showTips);

  const getImagens = type => imagens[type] || null;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: response.title,
      headerRight: () => (
        <MaterialCommunityIcons
          name="lightbulb-on-outline"
          size={general.iconSize.bigger}
          style={styles.icon}
          onPress={handleTips}
        />
      ),
    });
  }, [navigation]);

  useEffect(() => {
    if (finishLevel) {
      navigation.navigate('Congratulations', {level: exercise.level});
    } else {
      setQuestion(response.questions[step]);
    }
  }, [step]);

  const viewOfContent = [
    <Text style={styles.contentText}>{exercise.introduction}</Text>,
    exercise.showCards ? <CardGroup /> : null,
    question.image ? (
      <View style={styles.statementImageConteiner}>
        <Text style={styles.statement}>{question.statement}</Text>
        <Image
          style={styles.statementImage}
          source={getImagens(question.image.url)}
        />
      </View>
    ) : (
      <Text style={styles.statement}>{question.statement}</Text>
    ),
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
      <Tooltip
        content={exercise.tips}
        isVisible={showTips}
        onCancel={handleTips}
      />
      <ProgressBar color={colors.colorSucess} progress={progress} />
      <View style={styles.container}>
        <View style={styles.halfView}>
          <CustomBackground
            style={styles.info}
            content={viewOfContent}
            isLastPage={value => setShowAnswerOptions(value)}
          />
        </View>
        <View style={styles.halfView}>
          {showAnswerOptions ? (
            chooseQuestionRender()
          ) : (
            <Text style={styles.defaultText}>
              Leia atentamente todas as páginas do exercício para responder às
              questões.
            </Text>
          )}
        </View>
      </View>
    </View>
  );
}
