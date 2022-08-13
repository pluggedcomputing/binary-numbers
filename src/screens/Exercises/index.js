import React, {useState, useEffect, useLayoutEffect} from 'react';
import {
  Text,
  View,
  Image,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  Alert,
  StatusBar
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {useRoute, CommonActions} from '@react-navigation/native';


import Close from '../../assets/images/close_icon/close.png';
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
  

  const [backgroundColor, setBackgroundColor] = useState(colors.colorBackground);
  const maxStep = exercise.questions.length;
  
  const finishLevel = step === maxStep;
  const imagens = {
    l1q1_a: require('../../assets/images/level1/l1q1_a.png'),
    l1q1_b: require('../../assets/images/level1/l1q1_b.png'),

    l2q1_a: require('../../assets/images/level2/l2q1_a.png'),
    l2q1_b: require('../../assets/images/level2/l2q1_b.png'),

    l3q1_a: require('../../assets/images/level3/l3q1_a.png'),
    l3q1_b: require('../../assets/images/level3/l3q1_b.png'),
    l3q1: require('../../assets/images/level3/l3q1_00.png'),
    l3q2: require('../../assets/images/level3/l3q2.png'),
    l3q3: require('../../assets/images/level3/l3q3.png'),
    l3q4: require('../../assets/images/level3/l3q4.png'),
    l3q5: require('../../assets/images/level3/l3q5.png'),
    l3q6: require('../../assets/images/level3/l3q6.png'),
    l3q7: require('../../assets/images/level3/l3q7.png'),
    l3q8: require('../../assets/images/level3/l3q8.png'),
    l3q9: require('../../assets/images/level3/l3q9.png'),
    l3q10: require('../../assets/images/level3/l3q10.png'),

    l4q00: require('../../assets/images/level4/l4q00.png'),

    l4q1_a: require('../../assets/images/level4/l4q1_a.png'),
    l4q1_b: require('../../assets/images/level4/l4q1_b.png'),
    l4q1: require('../../assets/images/level4/l4q1.png'),
    l4q2: require('../../assets/images/level4/l4q2.png'),
    
    l4q3_10: require('../../assets/images/level4/l4q3_10.png'),
    l4q4: require('../../assets/images/level4/l4q4.png'),
    l4q5_6_13: require('../../assets/images/level4/l4q5_6_13.png'),
    l4q7_14: require('../../assets/images/level4/l4q7_14.png'),
    l4q8: require('../../assets/images/level4/l4q8.png'),
    l4q9_15: require('../../assets/images/level4/l4q9_15.png'),
    l4q11: require('../../assets/images/level4/l4q11.png'),
    l4q12: require('../../assets/images/level4/l4q12.png'),
    l4q16: require('../../assets/images/level4/l4q16.png'),

    l5q1_a :require('../../assets/images/level5/l5q1_a.png'),
    l5q1_b :require('../../assets/images/level5/l5q1_b.png'),
    l5q1: require('../../assets/images/level5/l5q1.png'),
    l5q2: require('../../assets/images/level5/l5q2.png'),

    l6q1_a: require('../../assets/images/level6/l6q1_a.png'),
    l6q1_b: require('../../assets/images/level6/l6q1_b.png'),
    l6q1: require('../../assets/images/level6/l6q1.png'),
    l6q2: require('../../assets/images/level6/l6q2.png'),
    l6q3: require('../../assets/images/level6/l6q3.png'),

    l7q1_a: require('../../assets/images/level7/l7q1_a.png'),
    l7q1_b: require('../../assets/images/level7/l7q1_b.png'),
    l7q2: require('../../assets/images/level7/l7q2.png'),
    l7q3: require('../../assets/images/level7/l7q3.png'),
    
    l8q1: require('../../assets/images/level8/l8q1.png'),
    l8q2: require('../../assets/images/level8/l8q2.png'),
    l8q3: require('../../assets/images/level8/l8q3.png'),
    l8q4: require('../../assets/images/level8/l8q4.png'),
    l8q5: require('../../assets/images/level8/l8q5.png'),
    l8q6: require('../../assets/images/level8/l8q6.png'),
    l8q7: require('../../assets/images/finishApp/finishApp.png')
  };


  const handleTips = () => setShowTips(!showTips);

  const getImagens = type => imagens[type] || null;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: response.title,
      headerRight: () => (
        <Icon
          name="lightbulb-on-outline"
          size={general.iconSize.bigger}
          style={styles.icon}
          onPress={handleTips}
        />
      ),
    });
  }, [navigation]);

  const navigateScreen = async () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [
          {
            name: 'LevelSelection',
          },
          
        ],
      })
    )
  };

  useEffect(() => {
    if (finishLevel) {
      navigation.navigate('Congratulations', {level: exercise.level});
    } else {
      setQuestion(response.questions[step]);
    }
  }, [step]);

  const showImage = url => {
    if (url) {
      return <Image style={styles.statementImage} source={getImagens(url)} />;
    }
    return null;
  };

  const showImageOurCardGroup = () => {
    if (question.image) {
      return showImage(question.image.url);
    }
    if (exercise.showCards) {
      return <CardGroup />;
    }
    return null;
  };

  const viewOfContent = () => {
    const content = exercise.introduction.map(item => (
      <View style={styles.statementImageConteiner}>
        {showImage(item.image.url)}

        <View>
          <Text style={styles.contentText}>{item.text}</Text>
        </View>
      </View>
    ));

    content.push(
      <View style={styles.statementImageConteiner}>
        {showImageOurCardGroup()}
        <Text style={styles.contentText}>{question.statement}</Text>
      </View>,
    );

    return content;
  };
  
  useEffect(() => {
    if(showAnswerOptions && exercise.level !==8){
      setBackgroundColor(colors.colorPrimary)
    }else{
      setBackgroundColor(colors.colorBackground)
    }
    }, [showAnswerOptions])

    
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
      <StatusBar barStyle='dark-content' backgroundColor={backgroundColor} />
      <View style={[styles.container, {backgroundColor}]}>
        <View style={styles.header}>
          <Text style={styles.title}>FASE {exercise.level}</Text>
          <TouchableOpacity
            onPress={() => Alert.alert('Aviso','O progresso atual será perdido, deseja sair?',
             [
              {
                text: "Sair",
                onPress: navigateScreen
              },
            {
              text:'Cancelar',
              onPress: () => null
            }
            ]
            )}
            style={styles.closeButton}>
            <Image source={Close} style={styles.closeImage} />
          </TouchableOpacity>
        </View>
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
          behavior={Platform.select({
              ios: 'padding',
              android: null,
              })}
          keyboardVerticalOffset={-125}>
          {showAnswerOptions ? chooseQuestionRender(): null}
        </KeyboardAvoidingView>    
      </View>
    </View>
  );
}
