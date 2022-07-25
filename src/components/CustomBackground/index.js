import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import { SwiperFlatList } from 'react-native-swiper-flatlist';

import PropTypes from 'prop-types';

import LeftArrow from '../../assets/images/icons/left_arrow/left_arrow.png'
import RightArrow from '../../assets/images/icons/left_arrow/rigth_arrow.png'
import styles from './styles';


const CustomBackground = props => {

  const {content, style, isLastPage} = props;

  const RightArrowFunction = async () =>{
    if(scrollRef.current.getCurrentIndex() !== 2){
      scrollRef.current.scrollToIndex({index: scrollRef.current.getCurrentIndex() + 1,Animated:false})
    }
    // eslint-disable-next-line no-unused-expressions
    scrollRef.current.getCurrentIndex() === 2 ? isLastPage(false) : null
  }
  const LeftArrowFunction = async () =>{
    if(scrollRef.current.getCurrentIndex() !== 0){
      scrollRef.current.scrollToIndex({index: scrollRef.current.getCurrentIndex() - 1,Animated:false})
    }
    // eslint-disable-next-line no-unused-expressions
    scrollRef.current.getCurrentIndex() !== 3 ? isLastPage(false) : null
  }
  const scrollRef = React.useRef(null);

  return (
    <SwiperFlatList 
      ref={scrollRef}
      style={[styles.container, style]}
      keyExtractor={(item, index) => String(index)}
      showsHorizontalScrollIndicator={false}
      data={content}
      horizontal
      showPagination
      paginationDefaultColor="#ee82ee"
      paginationActiveColor="#07377A"
      onChangeIndex={() => scrollRef.current.getCurrentIndex() === 2 ? isLastPage(true) : isLastPage(false)}
      renderItem={({item}) => (
        <View style={styles.container}>
          <View style={styles.listContainer}>
            <TouchableOpacity onPress={RightArrowFunction} style={styles.right}>
              <Image source={RightArrow}  />
            </TouchableOpacity>
            <TouchableOpacity onPress={LeftArrowFunction} style={styles.left}>
              <Image source={LeftArrow}  />
            </TouchableOpacity>
            <View style={styles.content}>{item}</View>
            
            
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
