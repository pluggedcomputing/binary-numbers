import React, {useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  StatusBar,
  TouchableOpacity,
  AsyncStorage,
} from 'react-native';
import {ProgressBar} from 'react-native-paper';

import Lottie from 'lottie-react-native';

import animation from '../../assets/animations/CheckedDone.json';
import {colors} from '../../styles';
import styles from './styles';

const Congratulations = props => {
  const {navigation} = props;
  const level = navigation.getParam('level', 'X');

  const navigateScreen = async () => {
    await AsyncStorage.setItem(`level${level + 1}`, 'true');
    navigation.navigate('LevelSelection');
  };
  useEffect(() => {
    setTimeout(navigateScreen, 3000);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="rgba(0, 0, 0, 0.8)"
      />
      <Text style={styles.textTop}>Parabéns!!!</Text>
      <Lottie source={animation} autoPlay loop />
      <Text style={styles.textEnd}>Você completou o nível {level}</Text>
      <TouchableOpacity
        style={styles.buttonAltenative}
        onPress={navigateScreen}>
        <Text style={styles.textButton}>Continuar </Text>
      </TouchableOpacity>
      <ProgressBar color={colors.colorSucess} progress={1} />
    </SafeAreaView>
  );
};

export default Congratulations;
