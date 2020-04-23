import React, {useState, useEffect} from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  AsyncStorage,
  Alert,
} from 'react-native';

import data from '../../assets/data.json';
import level1 from '../../assets/images/levels/level1.png';
import level2 from '../../assets/images/levels/level2.png';
import level3 from '../../assets/images/levels/level3.png';
import level4 from '../../assets/images/levels/level4.png';
import level5 from '../../assets/images/levels/level5.png';
import level6 from '../../assets/images/levels/level6.png';
import level7 from '../../assets/images/levels/level7.png';
import level8 from '../../assets/images/levels/level8.png';
import CardLevel from '../../components/CardLevel';
import styles from './styles';

function LevelSelection({navigation}) {
  const [levelsAvailable, setlevelsAvailable] = useState({});

  const getData = async () => {
    try {
      const levels = {
        level1: JSON.parse(await AsyncStorage.getItem('level1')),
        level2: JSON.parse(await AsyncStorage.getItem('level2')),
        level3: JSON.parse(await AsyncStorage.getItem('level3')),
        level4: JSON.parse(await AsyncStorage.getItem('level4')),
        level5: JSON.parse(await AsyncStorage.getItem('level5')),
        level6: JSON.parse(await AsyncStorage.getItem('level6')),
        level7: JSON.parse(await AsyncStorage.getItem('level7')),
        level8: JSON.parse(await AsyncStorage.getItem('level8')),
      };
      if (levels !== null) {
        setlevelsAvailable(levels);
      } else {
        await AsyncStorage.setItem('level1', 'true');
        await AsyncStorage.setItem('level2', 'false');
        await AsyncStorage.setItem('level3', 'false');
        await AsyncStorage.setItem('level4', 'false');
        await AsyncStorage.setItem('level5', 'false');
        await AsyncStorage.setItem('level6', 'false');
        await AsyncStorage.setItem('level7', 'false');
        await AsyncStorage.setItem('level8', 'false');
      }
    } catch (e) {
      Alert.alert('Erro', 'Não foi possivel carregar o seu nível atual');
    }
  };

  useEffect(() => {
    setlevelsAvailable(getData());
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.boxContainer}>
          <CardLevel
            level="1"
            image={level1}
            available={levelsAvailable.level1}
            onPress={() => navigation.navigate('Exercises', {data: data[0]})}
          />
          <CardLevel
            level="2"
            image={level2}
            available={levelsAvailable.level2}
            onPress={() => navigation.navigate('Exercises', {data: data[1]})}
          />
        </View>
        <View style={styles.boxContainer}>
          <CardLevel
            level="3"
            image={level3}
            available={levelsAvailable.level3}
            onPress={() => navigation.navigate('Exercises', {data: data[2]})}
          />
          <CardLevel
            level="4"
            image={level4}
            available={levelsAvailable.level4}
            onPress={() => navigation.navigate('Exercises', {data})}
          />
        </View>
        <View style={styles.boxContainer}>
          <CardLevel
            level="5"
            image={level5}
            available={levelsAvailable.level5}
            onPress={() => navigation.navigate('Exercises', {data})}
          />
          <CardLevel
            level="6"
            image={level6}
            available={levelsAvailable.level6}
            onPress={() => navigation.navigate('Exercises', {data})}
          />
        </View>
        <View style={styles.boxContainer}>
          <CardLevel
            level="7"
            image={level7}
            available={levelsAvailable.level7}
            onPress={() => navigation.navigate('Exercises', {data})}
          />
          <CardLevel
            level="8"
            image={level8}
            available={levelsAvailable.level8}
            onPress={() => navigation.navigate('Exercises', {data})}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default LevelSelection;
