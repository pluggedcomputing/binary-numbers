import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import Main from './screens/Main';

export default createAppContainer(
  createSwitchNavigator({
    Main,
  }),
);
