import React, {useState} from 'react';
import {View, Image, Text, TouchableWithoutFeedback} from 'react-native';

import PropTypes from 'prop-types';

import rightArrow from "../../assets/images/icons/right_arrow/right_arrow.png";
import ModalAlert from '../ModalAlert';
import styles from './styles';


const CardLevel = props => {
  const {image, level, onPress, available} = props;
  const [showModal, setShowModal] = useState(false);
  
  const handleModal = () => setShowModal(!showModal);

  const viewOfContent = [
    'Introdução ao sistema binário',
    'Aprendendo a contar',
    'Trabalhando com números binários',
    'Mensagem secreta com binários',
    'Correio eletrônico e modens',
    'Contar acima de 31',
    'Mais sobre números binários',
    'De que se trata tudo isso?',
  
  ];
  function onPressCardLevel() {
    if (onPress && available) {
      return onPress;
    }

    return () =>{
      handleModal();
    }

      
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
      <ModalAlert
        isVisible={showModal}
        onCancel={handleModal}
        level={level}
      />
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