import {StyleSheet} from 'react-native';

import {metrics, fonts, colors} from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: metrics.screenHeight * 0.26,
    backgroundColor: '#263238',
  },
  textTitle: {
    color: colors.colorBackground,
    fontSize: fonts.input,
  },
  textCell: {
    fontSize: fonts.title,
    fontWeight: 'bold',
    color: colors.colorBackground,
  },
  containerHeader: {
    width: metrics.screenWidth * 0.2,
    height: metrics.screenHeight * 0.03,
    backgroundColor: '#263238',
    borderBottomColor: '#000000',
    borderWidth: 2,
    alignItems: 'center',
  },
  containerRow: {
    width: metrics.screenWidth * 0.2,
    height: metrics.screenHeight * 0.1,
    backgroundColor: '#4f5b62',
    borderBottomColor: '#000000',
    borderWidth: 2,
    borderBottomWidth: 2,
  },
  contaninerBody: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
