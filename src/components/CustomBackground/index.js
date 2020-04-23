import React, {useState} from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import PropTypes from 'prop-types';

import {colors, general} from '../../styles';
import styles from './styles';

const CustomBackground = props => {
  const {content, style, isLastPage} = props;
  const [page, setPage] = useState(0);
  const contentSize = content.length - 1;

  function nextPage() {
    if (page < contentSize) setPage(page + 1);
    if (page + 1 === contentSize) isLastPage(true);
  }
  function previousPage() {
    if (page > 0) {
      setPage(page - 1);
    }
  }

  return (
    <View style={[styles.container, style]}>
      <View style={styles.content}>{content[page]}</View>
      <View style={styles.footer}>
        <View style={styles.iconsContainer}>
          <Icon
            name="arrow-left-bold-circle-outline"
            size={general.iconSize.regular}
            color={page === 0 ? '#CACACA' : colors.colorPrimary}
            onPress={previousPage}
            disabled={page === 0}
          />
          <Icon
            name="arrow-right-bold-circle-outline"
            size={general.iconSize.regular}
            color={page === contentSize ? '#CACACA' : colors.colorPrimary}
            onPress={nextPage}
            disabled={page === contentSize}
          />
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
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  isLastPage: PropTypes.func,
};
CustomBackground.defaultProps = {
  style: null,
  isLastPage: () => {},
};

export default CustomBackground;
