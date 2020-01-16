import React from 'react';
import {View, Image, Text, Alert, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';
import {colors} from '../../styles';

const CardLevel = props => {
  const {image, level, onPress, available} = props;

  function onPressCardLevel() {
    if (onPress && available) {
      return onPress;
    }
    return () =>
      Alert.alert(
        'Que Pena :(',
        'Esse nível ainda não está liberado, complete os niveis anteriores para debloquea-lo.',
      );
  }

  return (
    <View
      style={[
        available
          ? {borderColor: colors.colorSucess}
          : {borderColor: colors.colorPrimary},
        styles.container,
      ]}>
      <TouchableOpacity
        onPress={onPressCardLevel()}
        style={styles.subContainer}>
        <Image source={image} style={styles.imageLevel} />
        <Text style={styles.textLevel}>Nível {level}</Text>
      </TouchableOpacity>
    </View>
  );
};

CardLevel.propTypes = {
  image: PropTypes.string.isRequired,
  level: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  available: PropTypes.bool,
};

CardLevel.defaultProps = {
  available: false,
};

export default CardLevel;
