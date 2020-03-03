import React from 'react';
import {ScrollView, Text} from 'react-native';
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
    <ScrollView
      horizontal
      contentContainerStyle={{paddingLeft: 10, paddingRight: 10}}>
      {listTable.map(list => (
        <DataTable key={list.numberFirstList} style={styles.container}>
          <DataTable.Header style={styles.containerHeader}>
            <DataTable.Title style={styles.contaninerBody}>
              <Text style={styles.textTitle}>{list.numberFirstList}</Text>
            </DataTable.Title>
          </DataTable.Header>
          <DataTable.Row style={styles.containerRow}>
            <DataTable.Cell style={styles.contaninerBody}>
              <Text style={styles.textCell}>{list.alphabetFirstList}</Text>
            </DataTable.Cell>
          </DataTable.Row>
          <DataTable.Header style={styles.containerHeader}>
            <DataTable.Title style={styles.contaninerBody}>
              <Text style={styles.textTitle}>{list.numberLastList}</Text>
            </DataTable.Title>
          </DataTable.Header>
          <DataTable.Row style={styles.containerRow}>
            <DataTable.Cell style={styles.contaninerBody}>
              <Text style={styles.textCell}>{list.alphabetLastList}</Text>
            </DataTable.Cell>
          </DataTable.Row>
        </DataTable>
      ))}
    </ScrollView>
  );
};

export default AlphabetTable;
