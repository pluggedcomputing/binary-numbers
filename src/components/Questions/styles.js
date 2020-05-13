import {StyleSheet} from 'react-native';

import {metrics} from '../../styles';

const styles = StyleSheet.create({
  trueOrFalseButtons: {
    height: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  correspondenceContainer: {
    height: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  correspondenceListContent: {
    flex: 1,
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  correspondenceListText: {fontFamily: 'Poppins-Bold', margin: 10},
  correspondenceSecondListView: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  descriptive: {
    height: metrics.screenWidth / 1.3,
    alignItems: 'center',
  },
  subDescriptive: {
    height: metrics.screenHeight * 0.25,
  },
});
export default styles;
