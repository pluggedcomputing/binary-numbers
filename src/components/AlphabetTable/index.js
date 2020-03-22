import React from 'react';
import {Text, View} from 'react-native';
import {DataTable} from 'react-native-paper';

import styles from './styles';

const AlphabetTable = () => {
  const listNumber = [
    {
      numberFirstList: 1,
      numberLastList: 14,
    },
    {
      numberFirstList: 2,
      numberLastList: 15,
    },
    {
      numberFirstList: 3,
      numberLastList: 16,
    },
    {
      numberFirstList: 4,
      numberLastList: 17,
    },
    {
      numberFirstList: 5,
      numberLastList: 18,
    },
    {
      numberFirstList: 6,
      numberLastList: 19,
    },
    {
      numberFirstList: 7,
      numberLastList: 20,
    },
    {
      numberFirstList: 8,
      numberLastList: 21,
    },
    {
      numberFirstList: 9,
      numberLastList: 22,
    },
    {
      numberFirstList: 10,
      numberLastList: 23,
    },
    {
      numberFirstList: 11,
      numberLastList: 24,
    },
    {
      numberFirstList: 12,
      numberLastList: 25,
    },
    {
      numberFirstList: 13,
      numberLastList: 26,
    },
  ];

  const listAlphabet = [
    {
      alphabetFirstList: 'a',
      alphabetLastList: 'n',
    },
    {
      alphabetFirstList: 'b',
      alphabetLastList: 'o',
    },
    {
      alphabetFirstList: 'c',
      alphabetLastList: 'p',
    },
    {
      alphabetFirstList: 'd',
      alphabetLastList: 'q',
    },
    {
      alphabetFirstList: 'e',
      alphabetLastList: 'r',
    },
    {
      alphabetFirstList: 'f',
      alphabetLastList: 's',
    },
    {
      alphabetFirstList: 'g',
      alphabetLastList: 't',
    },
    {
      alphabetFirstList: 'h',
      alphabetLastList: 'u',
    },
    {
      alphabetFirstList: 'i',
      alphabetLastList: 'v',
    },
    {
      alphabetFirstList: 'j',
      alphabetLastList: 'w',
    },
    {
      alphabetFirstList: 'k',
      alphabetLastList: 'x',
    },
    {
      alphabetFirstList: 'l',
      alphabetLastList: 'y',
    },
    {
      alphabetFirstList: 'm',
      alphabetLastList: 'z',
    },
  ];

  return (
    <View style={styles.containerView}>
      <DataTable style={styles.container}>
        <DataTable.Header style={styles.subContainer}>
          {listNumber.map(list => (
            <DataTable.Title
              key={list.numberFirstList}
              style={styles.containerTableHeader}>
              <Text style={styles.text}>{list.numberFirstList}</Text>
            </DataTable.Title>
          ))}
        </DataTable.Header>
        <DataTable.Row style={styles.subContainer}>
          {listAlphabet.map(list => (
            <DataTable.Cell
              key={list.alphabetFirstList}
              style={styles.containerTableRow}>
              <Text style={styles.textBold}>{list.alphabetFirstList}</Text>
            </DataTable.Cell>
          ))}
        </DataTable.Row>
      </DataTable>
      <DataTable style={styles.container}>
        <DataTable.Header style={styles.subContainer}>
          {listNumber.map(list => (
            <DataTable.Title
              key={list.numberLastList}
              style={styles.containerTableHeader}>
              <Text style={styles.text}>{list.numberLastList}</Text>
            </DataTable.Title>
          ))}
        </DataTable.Header>
        <DataTable.Row style={styles.subContainer}>
          {listAlphabet.map(list => (
            <DataTable.Cell
              key={list.alphabetLastList}
              style={styles.containerTableRow}>
              <Text style={styles.textBold}>{list.alphabetLastList}</Text>
            </DataTable.Cell>
          ))}
        </DataTable.Row>
      </DataTable>
    </View>
  );
};

export default AlphabetTable;
