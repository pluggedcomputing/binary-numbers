import React, {useState} from 'react';
import {Image, View, TouchableOpacity, Text} from 'react-native';

import PropTypes from 'prop-types';

import arrowNext from '../../assets/images/next.png';
import arrowPrevious from '../../assets/images/previous.png';
import styles from './styles';

const CustomBackground = props => {
  const {content} = props;
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

  return (
    <View style={styles.container}>
      <View style={[styles.container, {transform: [{rotate: '-3deg'}]}]}>
        <View style={styles.content}>{content[page]}</View>

        <View style={styles.buttonsContainer}>
          <TouchableOpacity onPress={previousPage}>
            <Image style={styles.Icon} source={arrowPrevious} />
          </TouchableOpacity>
          <TouchableOpacity onPress={nextPage}>
            <Image style={styles.Icon} source={arrowNext} />
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
