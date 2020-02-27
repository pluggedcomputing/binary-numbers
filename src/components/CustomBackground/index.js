import React, { useState } from 'react';
import {View, TouchableOpacity, Text } from 'react-native';
import { Icon } from 'react-native-elements';

import PropTypes from 'prop-types';

import { colors, general } from '../../styles';
import styles from './styles';


const CustomBackground = props => {
  const { content } = props;
  const [page, setPage] = useState(0);
  const contentSize = content.length - 1;


  function nextPage() {
    if (page < contentSize) {
      setPage(page + 1);
    }
  }
  function previousPage() {
    if (page > 0) {
      setPage(page - 1);
    }
  }
  function disableButtonNext() {
    let validity = false
    if (page === contentSize) {
      validity = true
    }
    return validity
  }
  function disableButtonPrevious() {
    let validity = false
    if (page === 0) {
      validity = true
    }
    return validity
  }

  return (
    <View style={styles.container}>
      <View style={[styles.container, { transform: [{ rotate: '-3deg' }] }]}>
        <View style={styles.content}>{content[page]}</View>

        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            onPress={previousPage}
            disabled={disableButtonPrevious()}
          >
            <Icon
              name="arrow-circle-left"
              type="font-awesome"
              color={disableButtonPrevious() ?'#CACACA' :  colors.colorPrimary}
              size={general.iconSize.regular}
              style={styles.Icon}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={nextPage}
            disabled={disableButtonNext()}
          >
            <Icon
              name="arrow-circle-right"
              type="font-awesome"
              color={disableButtonNext() ?'#CACACA' :  colors.colorPrimary}
              size={general.iconSize.regular}
              style={styles.Icon}
            />
          </TouchableOpacity>
        </View>

        <Text style={styles.textCont}>
          {page + 1}/{content.length}
        </Text>
      </View>
    </View>
  );
};

CustomBackground.propTypes = {
  content: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default CustomBackground;
