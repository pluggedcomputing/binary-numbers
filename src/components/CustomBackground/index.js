/* eslint-disable no-restricted-syntax */
/* eslint-disable no-console */
import React, { useState } from 'react';
import { Image, View, TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

import arrowNext from '../../assets/next.png'
import arrowPrevious from '../../assets/previous.png'


const CustomBackground = props => {
  const { content } = props;
  const [page, setPage] = useState(0)
  const contentSize = content.length - 1

  function nextPage() {
    if(page < contentSize) {
      setPage(page+1)
    }
  }
  function previousPage() {
    if (page > 0) {
      setPage(page - 1)
    }
  }

  return (

    <View style={styles.container}>
      <View style={[styles.container, { transform: [{ rotate: '-3deg' }] }]}>
        <View style={[styles.contain, { transform: [{ rotate: '2deg' }] }]}>{content[page]}</View>
        <View style={[styles.loadButton, { transform: [{ rotate: '3deg' }] }]}>
          <TouchableOpacity
            onPress={previousPage}
            style={styles.button}
          >
            <Image style={styles.Icon} source={arrowPrevious} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={nextPage}
            style={styles.button}
          >
            <Image style={styles.Icon} source={arrowNext} />
          </TouchableOpacity>
        </View>
      </View>
      <View><Text style={styles.textCont}>{page + 1}/{content. length}</Text></View>
    </View>

  );
};

CustomBackground.propTypes = {
  content: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default CustomBackground;
