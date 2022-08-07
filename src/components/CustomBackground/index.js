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
    if(scrollRef.current.getCurrentIndex() !== content.length -1){
      scrollRef.current.scrollToIndex({index: scrollRef.current.getCurrentIndex() + 1,Animated:false})
    }
  }
  const LeftArrowFunction = async () =>{
    if(scrollRef.current.getCurrentIndex() !== 0){
      scrollRef.current.scrollToIndex({index: scrollRef.current.getCurrentIndex() - 1,Animated:false})
    }
    
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
      paginationDefaultColor="#c0c0c0"
      paginationActiveColor="#07377A"
      onChangeIndex={() => scrollRef.current.getCurrentIndex() === content.length -1 ? isLastPage(true) : isLastPage(false)}
      renderItem={({item}) => (
        <View style={styles.container}>
          <View style={styles.listContainer}>
            <TouchableOpacity onPress={RightArrowFunction} style={styles.right}>
              <Image source={RightArrow} style={styles.arrow} />
            </TouchableOpacity>
            <TouchableOpacity onPress={LeftArrowFunction} style={styles.left}>
              <Image source={LeftArrow} style={styles.arrow} />
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
