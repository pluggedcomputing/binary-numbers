import {StyleSheet} from 'react-native';

import {metrics} from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: metrics.screenWidth,
    height: metrics.screenHeight,
    backgroundColor: '#E5E5E5',
    paddingVertical:metrics.doubleBasePadding
  },
  boxContainer: {
    margin:metrics.smallMargin,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  
});

export default styles;
