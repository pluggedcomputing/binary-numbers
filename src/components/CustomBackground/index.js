/* eslint-disable no-console */
import React, {useState} from 'react';
import {Image,View,TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

import arrowNext from './assets/next.png'
import arrowPrevious from './assets/previous.png'

const CustomBackground = props => {
  const { content } = props;
  const [page, setPage] = useState(0)
  const sizeContent = content.lenght - 1

  function nextPage() {
    if (page < sizeContent) {
      setPage(page + 1)
    }
  }
  function previousPage() {
    if(page > sizeContent){
      setPage(page - 1)
    }
  }

  return (

    <View style={styles.container}>
      <View style={[styles.container, { transform: [{ rotate: '-5deg' }] }]}>
        <View style={[styles.contain,{ transform: [{ rotate: '5deg' }] }]}>{content[page]}</View>
        <View style={[styles.loadButton, { transform: [{ rotate: '5deg' }] }]}>
          <TouchableOpacity
            onPress={previousPage}
            style={styles.button}
          >
            <Image style={styles.previousIcon} source={arrowPrevious} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={nextPage}
            style={styles.button}
          >
            <Image style={styles.nextIcon} source={arrowNext} />
          </TouchableOpacity>
        </View>
      </View>
    </View>

  );
};

CustomBackground.propTypes = {
  content: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default CustomBackground;
