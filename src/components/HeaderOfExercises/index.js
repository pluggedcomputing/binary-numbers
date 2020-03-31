import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {ProgressBar} from 'react-native-paper';

import {MaterialCommunityIcons} from '@expo/vector-icons';
import {PropTypes} from 'prop-types';

import {general, colors} from '../../styles';
import styles from './styles';
import Tooltip from './Tooltips';

const HeaderOfExercises = props => {
  const [state, setstate] = useState(false);

  const {title, tips, progress, navigation} = props;

  const handleComeBack = () => navigation.navigate('LevelSelection');

  const handleTips = () => setstate(!state);

  return (
    <View style={styles.container}>
      <Tooltip content={tips} isVisible={state} onCancel={handleTips} />
      <View style={styles.content}>
        <MaterialCommunityIcons
          name="arrow-left"
          size={general.iconSize.bigger}
          style={styles.icon}
          onPress={handleComeBack}
        />
        <Text style={styles.title}>{title}</Text>

        <MaterialCommunityIcons
          name="lightbulb-on-outline"
          size={general.iconSize.bigger}
          style={styles.icon}
          onPress={handleTips}
        />
      </View>
      <ProgressBar color={colors.colorSucess} progress={progress} />
    </View>
  );
};

HeaderOfExercises.propTypes = {
  title: PropTypes.string.isRequired,
  tips: PropTypes.element,
  progress: PropTypes.number,
};

HeaderOfExercises.defaultProps = {
  tips: <Text style={styles.defaultTips}>Não há dicas para esse nível.</Text>,
  progress: 1,
};
export default HeaderOfExercises;
