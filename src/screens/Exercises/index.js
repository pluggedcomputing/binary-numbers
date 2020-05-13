import React, {useState, useEffect, useLayoutEffect} from 'react';
import {Text, View, Image, KeyboardAvoidingView} from 'react-native';
import {ProgressBar} from 'react-native-paper';

import {MaterialCommunityIcons} from '@expo/vector-icons';
import {useRoute} from '@react-navigation/native';

import CardGroup from '../../components/CardGroup';
import CustomBackground from '../../components/CustomBackground';
import {
  Explanation,
  MultipleChoice,
  Numeric,
  ShortAnswer,
  TrueOrFalse,
} from '../../components/Questions';
import Tooltip from '../../components/Tooltip';
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

    l4q1: require('../../assets/images/level4/l4q1.png'),
    l4q2: require('../../assets/images/level4/l4q2.png'),
    l4q3_10: require('../../assets/images/level4/l4q3-10.png'),
    l4q4: require('../../assets/images/level4/l4q4.png'),
    l4q5_6_13: require('../../assets/images/level4/l4q5-6-13.png'),
    l4q7_14: require('../../assets/images/level4/l4q7-14.png'),
    l4q8: require('../../assets/images/level4/l4q8.png'),
    l4q9_15: require('../../assets/images/level4/l4q9-15.png'),
    l4q11: require('../../assets/images/level4/l4q11.png'),
    l4q12: require('../../assets/images/level4/l4q12.png'),
    l4q16: require('../../assets/images/level4/l4q16.png'),

    l5q1: require('../../assets/images/level5/l5q1.png'),
    l5q2: require('../../assets/images/level5/l5q2.png'),

    l6q3: require('../../assets/images/level6/l6q3.png'),

    l7q2: require('../../assets/images/level7/l7q2.png'),
    l7q3: require('../../assets/images/level7/l7q3.png'),

    l8q1: require('../../assets/images/level8/l8q1.png'),
    l8q2: require('../../assets/images/level8/l8q2.png'),
    l8q3: require('../../assets/images/level8/l8q3.png'),
    l8q5: require('../../assets/images/level8/l8q5.png'),
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

  const viewOfContent = () => {
    const content = [
      <Text style={styles.contentText}>{exercise.introduction}</Text>,
    ];

    let statementPage;

    if (question.image) {
      statementPage = (
        <View style={styles.statementConteiner}>
          <Text style={styles.contentText}>{question.statement}</Text>
          <Image
            style={styles.statementImage}
            source={getImagens(question.image.url)}
          />
        </View>
      );
    } else if (exercise.showCards) {
      statementPage = (
        <View style={styles.statementConteiner}>
          <Text style={styles.contentText}>{question.statement}</Text>
          <CardGroup />
        </View>
      );
    } else {
      statementPage = (
        <Text style={styles.contentText}>{question.statement}</Text>
      );
    }
    content.push(statementPage);
    return content;
  };

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

      case 'EXPLANATION':
        return <Explanation step={step} setSteps={setSteps} />;

      default:
        return null;
    }
  }

  return (
    <View>
      <Tooltip
        step={step}
        content={exercise.tips}
        isVisible={showTips}
        onCancel={handleTips}
      />
      <ProgressBar color={colors.colorSucess} progress={progress} />
      <View style={styles.container}>
        <View style={styles.halfView}>
          <CustomBackground
            style={styles.info}
            content={viewOfContent()}
            isLastPage={value => setShowAnswerOptions(value)}
          />
        </View>
        <KeyboardAvoidingView
          style={styles.halfViewKeyBoard}
          enabled
          behavior="padding"
          keyboardVerticalOffset={-60}>
          {showAnswerOptions ? (
            chooseQuestionRender()
          ) : (
            <Text style={styles.defaultText}>
              Leia atentamente todas as páginas do exercício para responder às
              questões.
            </Text>
          )}
        </KeyboardAvoidingView>
      </View>
    </View>
  );
}
