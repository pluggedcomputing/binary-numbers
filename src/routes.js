import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import LoginOrRegister from './screens/LoginOrRegister';
import Main from './screens/Main';
import ScreenAbout from './screens/ScreenAbout';

export default createAppContainer(
  createSwitchNavigator({
    LoginOrRegister,
    Main,
    ScreenAbout,
  }),
);
