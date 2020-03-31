import React, {useState, useEffect} from 'react';
import {View, SafeAreaView, ScrollView, Alert} from 'react-native';

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
  const data = navigation.getParam('data');
  const [LevelsAvailable, setLevelsAvailable] = useState({
    level1: true,
    level2: true,
    level3: true,
    level4: true,
    level5: true,
    level6: false,
    level7: true,
    level8: false,
  });

  useEffect(() => {
    setLevelsAvailable({
      /* Aqui vai se fazer uma consulta no banco para saber
       qual o nivel atual do usuario e assim mudar a tela automaticamente.

       - Remova os niveis abaixo e os subistitua pela chamada a API.
       - Remova esse comentario.
       */

      level1: true,
      level2: true,
      level3: true,
      level4: true,
      level5: true,
      level6: false,
      level7: true,
      level8: false,
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.boxContainer}>
          <CardLevel
            level="1"
            image={level1}
            available={LevelsAvailable.level1}
            onPress={() => navigation.navigate('Exercises', {data})}
          />
          <CardLevel
            level="2"
            image={level2}
            available={LevelsAvailable.level2}
            onPress={() => navigation.navigate('Exercises', {data})}
          />
        </View>
        <View style={styles.boxContainer}>
          <CardLevel
            level="3"
            image={level3}
            available={LevelsAvailable.level3}
            onPress={() => navigation.navigate('Exercises', {data})}
          />
          <CardLevel
            level="4"
            image={level4}
            available={LevelsAvailable.level4}
            onPress={() => navigation.navigate('Exercises', {data})}
          />
        </View>
        <View style={styles.boxContainer}>
          <CardLevel
            level="5"
            image={level5}
            available={LevelsAvailable.level5}
            onPress={() => navigation.navigate('Exercises', {data})}
          />
          <CardLevel
            level="6"
            image={level6}
            available={LevelsAvailable.level6}
            onPress={() => navigation.navigate('Exercises', {data})}
          />
        </View>
        <View style={styles.boxContainer}>
          <CardLevel
            level="7"
            image={level7}
            available={LevelsAvailable.level7}
            onPress={() => navigation.navigate('Exercises', {data})}
          />
          <CardLevel
            level="8"
            image={level8}
            available={LevelsAvailable.level8}
            onPress={() => navigation.navigate('Exercises', {data})}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default LevelSelection;
