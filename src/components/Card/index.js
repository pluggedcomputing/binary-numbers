import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './styles';
import image from '../../assets/images/logo_grey.png';

const Card = props => {
  const {number, rotate} = props;

  const numberAllowerdCard = [0, 1, 2, 4, 8, 16];

  const [state, setState] = useState({
    rotate: rotate,
    carCenter: () => getAmountCard(),
    textCard: rotate ? 0 : 1,
  });

  const imageCard = (
    <View style={styles.containerContent}>
      <Image style={styles.image} source={image}></Image>
    </View>
  );

  const Circle = () => <View style={styles.circle}></View>;

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

  getAmountCard = () => {
    const valueNumber = state.rotate ? 0 : number;
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

  checkNumberCard = number => {
    if (numberAllowerdCard.indexOf(number) === -1) return;
    return number == 0 ? number : 1;
  };

  rotateCard = () => {
    let valueNumber;
    let valueRotate;

    if (state.rotate === false) {
      valueNumber = 0;
      valueRotate = true;
    } else {
      valueNumber = number;
      valueRotate = false;
    }

    setState({
      rotate: valueRotate,
      carCenter: () => getAmountCard(),
      textCard: checkNumberCard(valueNumber),
    });
  };

  return (
    <TouchableOpacity style={styles.card} onPress={this.rotateCard}>
      <View style={styles.cardWhite}>
        {state.carCenter()}
        <Text style={styles.text}>{state.textCard}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
