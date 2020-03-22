import React from 'react';
import {Text, View} from 'react-native';
import {DataTable} from 'react-native-paper';

import styles from './styles';

const AlphabetTable = () => {
  const listTable = [
    {
      numberFirstList: 1,
      numberLastList: 14,
      alphabetFirstList: 'a',
      alphabetLastList: 'n',
    },
    {
      numberFirstList: 2,
      numberLastList: 15,
      alphabetFirstList: 'b',
      alphabetLastList: 'o',
    },
    {
      numberFirstList: 3,
      numberLastList: 16,
      alphabetFirstList: 'c',
      alphabetLastList: 'p',
    },
    {
      numberFirstList: 4,
      numberLastList: 17,
      alphabetFirstList: 'd',
      alphabetLastList: 'q',
    },
    {
      numberFirstList: 5,
      numberLastList: 18,
      alphabetFirstList: 'e',
      alphabetLastList: 'r',
    },
    {
      numberFirstList: 6,
      numberLastList: 19,
      alphabetFirstList: 'f',
      alphabetLastList: 's',
    },
    {
      numberFirstList: 7,
      numberLastList: 20,
      alphabetFirstList: 'g',
      alphabetLastList: 't',
    },
    {
      numberFirstList: 8,
      numberLastList: 21,
      alphabetFirstList: 'h',
      alphabetLastList: 'u',
    },
    {
      numberFirstList: 9,
      numberLastList: 22,
      alphabetFirstList: 'i',
      alphabetLastList: 'v',
    },
    {
      numberFirstList: 10,
      numberLastList: 23,
      alphabetFirstList: 'j',
      alphabetLastList: 'w',
    },
    {
      numberFirstList: 11,
      numberLastList: 24,
      alphabetFirstList: 'k',
      alphabetLastList: 'x',
    },
    {
      numberFirstList: 12,
      numberLastList: 25,
      alphabetFirstList: 'l',
      alphabetLastList: 'y',
    },
    {
      numberFirstList: 13,
      numberLastList: 26,
      alphabetFirstList: 'm',
      alphabetLastList: 'z',
    },
  ];

  return (
    <View style={styles.containerView}>
      <DataTable style={styles.container}>
        <DataTable.Header style={styles.subContainer}>
          {listTable.map(list => (
            <DataTable.Title
              key={list.numberFirstList}
              style={styles.containerTableHeader}>
              <Text style={styles.text}>{list.numberFirstList}</Text>
            </DataTable.Title>
          ))}
        </DataTable.Header>
        <DataTable.Row style={styles.subContainer}>
          {listTable.map(list => (
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
          {listTable.map(list => (
            <DataTable.Title
              key={list.numberLastList}
              style={styles.containerTableHeader}>
              <Text style={styles.text}>{list.numberLastList}</Text>
            </DataTable.Title>
          ))}
        </DataTable.Header>
        <DataTable.Row style={styles.subContainer}>
          {listTable.map(list => (
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
