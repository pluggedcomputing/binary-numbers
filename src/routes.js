import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Congratulations from './screens/Congratulations';
import LevelSelection from './screens/LevelSelection';
import LoginOrRegister from './screens/LoginOrRegister';
import Main from './screens/Main';
import ScreenAbout from './screens/ScreenAbout';


export default createAppContainer(
  createSwitchNavigator({
    LoginOrRegister,
    Main,
    LevelSelection,
    ScreenAbout,
    Congratulations,

  }),
);
