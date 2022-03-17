import React from 'react';
import {View, Image, Text, Alert, TouchableWithoutFeedback} from 'react-native';

import PropTypes from 'prop-types';

import rightArrow from "../../assets/images/icons/right_arrow/right_arrow.png";
import styles from './styles';



const CardLevel = props => {
  const {image, level, onPress, available} = props;

  const viewOfContent = [
    'Introdução ao sistema binário.',
    'Números Binários.',
    'Trabalhando com Números Binários.',
    'Mensagem secreta com Binários.',
    'Correio Eletrônico e Modens.',
    'Contar acima de 31.',
    'Mais Sobre Números Binários.',
    'De que se trata tudo isso?',
  
  ];
  function onPressCardLevel() {
    if (onPress && available) {
      return onPress;
    }
    return () =>
      Alert.alert(
        'Que Pena :(',
        `Você não pode acessar a FASE ${level} ainda. Ela só estará disponível após você passar pelas fases anteriores. `,
      );

      
  }
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={onPressCardLevel()}>
        <View style={styles.subContainer}>
          <View> 
            <Image source={image} style={styles.imageLevel} />
          </View>
          <View>
            <Text style={styles.textLevel}>Fase {level}</Text>
            <Text style={styles.bio}>{viewOfContent[level-1]}</Text>
          </View>
          <View>
            <Image source={rightArrow} />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

CardLevel.propTypes = {
  image: PropTypes.number.isRequired,
  level: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  available: PropTypes.bool,
};

CardLevel.defaultProps = {
  available: false,
};

export default CardLevel;
