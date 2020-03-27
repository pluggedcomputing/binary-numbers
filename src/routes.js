import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Congratulations from './screens/Congratulations';
import ExerciseLevelFive from './screens/Exercises/LevelFive';
import ExerciseLevelFour from './screens/Exercises/LevelFour';
import ExerciseLevelOne from './screens/Exercises/LevelOne';
import ExerciseLevelSeven from './screens/Exercises/LevelSeven';
import ExerciseLevelThree from './screens/Exercises/LevelThree';
import ExerciseLevelTwo from './screens/Exercises/LevelTwo';
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
    ExerciseLevelOne,
    ExerciseLevelThree,
    ExerciseLevelTwo,
    ExerciseLevelFour,
    ExerciseLevelFive,
    ExerciseLevelSeven,
  }),
);

