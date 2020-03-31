import React from 'react';
import {View, Text} from 'react-native';

import Card from './Card';
import styles from './styles';

export default function CardGroup() {
  return (
    <View>
      <Text style={styles.contentText}>Presione o cartão para vira-lo</Text>
      <View style={styles.cardGroup}>
        <Card number={16} rotate />
        <Card number={8} />
        <Card number={4} rotate />
        <Card number={2} rotate />
        <Card number={1} />
      </View>
    </View>
  );
}
