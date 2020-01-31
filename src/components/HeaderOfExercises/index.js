import React from 'react';
import {View, Text, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {PropTypes} from 'prop-types';

import {general} from '../../styles';
import styles from './styles';

const HeaderOfExercises = props => {
  const {title, tips, navigation} = props;

  const handleComeBack = () => navigation.navigate('LevelSelection');

  const handleTips = () => Alert.alert('Dicas', tips);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Icon
        name="arrow-left-bold-circle-outline"
        size={general.iconSize.bigger}
        style={styles.icon}
        onPress={handleComeBack}
      />
      <Icon
        name="help-circle-outline"
        size={general.iconSize.bigger}
        style={styles.icon}
        onPress={handleTips}
      />
    </View>
  );
};

HeaderOfExercises.propTypes = {
  title: PropTypes.string.isRequired,
  tips: PropTypes.string,
};

HeaderOfExercises.defaultProps = {
  tips: 'Não há dicas para esse nível',
};
export default HeaderOfExercises;
