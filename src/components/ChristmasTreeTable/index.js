import React from 'react';
import {View} from 'react-native';
import {Table, Rows} from 'react-native-table-component';

import Lottie from 'lottie-react-native';

import ChristmasTreeAnimation from '../../assets/animations/ChristmasTree.json';
import styles from './styles';

const ChristmasTree = <Lottie source={ChristmasTreeAnimation} autoPlay loop />;

const ChristmasTreeTableStepOne = () => {
  const tableDataStepOne = [
    [null, null, null, null, ChristmasTree],
    [null, ChristmasTree, null, ChristmasTree, null],
    [ChristmasTree, null, ChristmasTree, null, ChristmasTree],
    [null, null, ChristmasTree, null, null],
    [null, null, ChristmasTree, null, ChristmasTree],
  ];

  return (
    <View style={styles.container}>
      <Table borderStyle={styles.borderStyles}>
        <Rows data={tableDataStepOne} textStyle={styles.rows} />
      </Table>
    </View>
  );
};

const ChristmasTreeTableStepTwo = () => {
  const tableDataStepTwo = [
    [null, null, ChristmasTree, null, ChristmasTree],
    [ChristmasTree, null, null, ChristmasTree, ChristmasTree],
    [ChristmasTree, null, ChristmasTree, null, null],
    [null, ChristmasTree, ChristmasTree, ChristmasTree, ChristmasTree],
    [ChristmasTree, null, ChristmasTree, null, ChristmasTree],
  ];

  return (
    <View style={styles.container}>
      <Table borderStyle={styles.borderStyles}>
        <Rows data={tableDataStepTwo} textStyle={styles.rows} />
      </Table>
    </View>
  );
};

const ChristmasTreeTableStepThree = () => {
  const tableDataStepThree = [
    [ChristmasTree, null, null, null, null],
    [ChristmasTree, null, null, ChristmasTree, null],
    [null, null, ChristmasTree, null, ChristmasTree],
    [ChristmasTree, null, null, ChristmasTree, ChristmasTree],
    [null, ChristmasTree, ChristmasTree, ChristmasTree, ChristmasTree],
  ];

  return (
    <View style={styles.container}>
      <Table borderStyle={styles.borderStyles}>
        <Rows data={tableDataStepThree} textStyle={styles.rows} />
      </Table>
    </View>
  );
};

export {
  ChristmasTreeTableStepOne,
  ChristmasTreeTableStepTwo,
  ChristmasTreeTableStepThree,
};
