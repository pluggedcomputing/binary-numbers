import React, {useState} from 'react';
import {SafeAreaView, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {PropTypes} from 'prop-types';

import {general} from '../../styles';
import styles from './styles';
import Tooltip from './Tooltips';

const HeaderOfExercises = props => {
  const [state, setstate] = useState(false);

  const {title, tips, navigation} = props;

  const handleComeBack = () => navigation.navigate('LevelSelection');

  const handleTips = () => setstate(!state);

  return (
    <SafeAreaView style={styles.container}>
      <Tooltip content={tips} isVisible={state} onCancel={handleTips} />
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
    </SafeAreaView>
  );
};

HeaderOfExercises.propTypes = {
  title: PropTypes.string.isRequired,
  tips: PropTypes.element,
};

HeaderOfExercises.defaultProps = {
  tips: <Text style={styles.defaultTips}>Não há dicas para esse nível.</Text>,
};
export default HeaderOfExercises;
