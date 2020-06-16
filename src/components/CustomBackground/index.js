import React from 'react';
import {View, Text, FlatList} from 'react-native';

import PropTypes from 'prop-types';

import styles from './styles';

const CustomBackground = props => {
  const {content, style, isLastPage} = props;

  return (
    <FlatList
      style={[styles.container, style]}
      keyExtractor={(item, index) => String(index)}
      showsHorizontalScrollIndicator={false}
      onEndReached={() => isLastPage(true)}
      onEndReachedThreshold={0.1}
      data={content}
      horizontal
      renderItem={({item, index}) => (
        <View style={styles.listContainer}>
          <View style={styles.content}>{item}</View>
          <View style={styles.footer}>
            <Text style={styles.textCont}>{index + 1}</Text>
          </View>
        </View>
      )}
    />
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
