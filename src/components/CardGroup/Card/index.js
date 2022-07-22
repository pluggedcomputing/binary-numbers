import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

import PropTypes from 'prop-types';
import image from '../../../assets/images/logo_grey.png';
import styles from './styles';
import  colors  from '../../../styles/colors';

const Card = props => {
  const {number, rotate} = props;
  const [backgroundColor] = useState(colors.colorAcent)

  const [state, setState] = useState({
    rotate,
    carCenter: () => getAmountCard(rotate),
    textCard: rotate ? 0 : 1, 
  });

  const imageCard = (
    <View style={[styles.containerContent, {backgroundColor}]}>
      <Image style={styles.image} source={image} />
    </View>
  );

  const Circle = () => <View style={styles.circle} />;

  const circleOne = (
    <View style={styles.containerContent}>
      <View style={styles.containerCircles}>{Circle()}</View>
    </View>
  );

  const circlerTwo = (
    <View style={styles.containerContent}>
      <View style={styles.containerCircles}>
        {Circle()}
        {Circle()}
      </View>
    </View>
  );

  const circleFour = (
    <View style={styles.containerContent}>
      <View style={styles.containerCircles}>
        {Circle()}
        {Circle()}
      </View>
      <View style={styles.containerCircles}>
        {Circle()}
        {Circle()}
      </View>
    </View>
  );

  const circleEight = (
    <View style={styles.containerContent}>
      <View style={styles.containerCircles}>
        {Circle()}
        {Circle()}
        {Circle()}
        {Circle()}
      </View>
      <View style={styles.containerCircles}>
        {Circle()}
        {Circle()}
        {Circle()}
        {Circle()}
      </View>
    </View>
  );

  const circleSixteen = (
    <View style={styles.containerContent}>
      <View style={styles.containerCircles}>
        {Circle()}
        {Circle()}
        {Circle()}
        {Circle()}
      </View>
      <View style={styles.containerCircles}>
        {Circle()}
        {Circle()}
        {Circle()}
        {Circle()}
      </View>
      <View style={styles.containerCircles}>
        {Circle()}
        {Circle()}
        {Circle()}
        {Circle()}
      </View>
      <View style={styles.containerCircles}>
        {Circle()}
        {Circle()}
        {Circle()}
        {Circle()}
      </View>
    </View>
  );

  const getAmountCard = turn => {
    const valueNumber = turn ? 0 : number;
    const amountCircle = {
      0: imageCard,
      1: circleOne,
      2: circlerTwo,
      4: circleFour,
      8: circleEight,
      16: circleSixteen,
    };
    return amountCircle[valueNumber];
  };

  const checkNumberCard = num => {
    return num === 0 ? num : 1;
  };

  const rotateCard = () => {
    let valueNumber;
    let valueRotate;

    if (state.rotate) {
      valueNumber = number;
      valueRotate = false;
    } else {
      valueNumber = 0;
      valueRotate = true;
    }
    setState({
      rotate: valueRotate,
      carCenter: () => getAmountCard(valueRotate),
      textCard: checkNumberCard(valueNumber),
    });
  };

  return (
   <View style={styles.cardContainer}> 
      <TouchableOpacity style={styles.card} onPress={rotateCard}>
      <View style={styles.cardWhite}>
        {state.carCenter()}
      </View>
    </TouchableOpacity>
    <Text style={styles.text}>{state.textCard}</Text>
   </View>
  );
};

Card.propTypes = {
  rotate: PropTypes.bool,
  number: PropTypes.oneOf([1, 2, 4, 8, 16]).isRequired,
};

Card.defaultProps = {
  rotate: false,
};

export default Card;
