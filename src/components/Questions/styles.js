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
  alternative: {
    marginTop: metrics.halfMargin,
  },
  descriptive: {
    margin: metrics.baseMargin,
    height: metrics.screenWidth * 0.7,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  subDescriptive: {
    height: metrics.screenHeight * 0.26,
  },
});
export default styles;
