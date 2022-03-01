import React from 'react';
import { Image } from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import logo from "./assets/images/logo_horizontal/logo_horizontal.png";
import Congratulations from './screens/Congratulations';
import Exercises from './screens/Exercises';
import LevelSelection from './screens/LevelSelection';
import LoginOrRegister from './screens/LoginOrRegister';
import Main from './screens/Main';
import ScreenAbout from './screens/ScreenAbout';
import {colors, fonts} from './styles';

function LogoTitle() {
  return (
    <Image
      style={{ width: 125, height: 40}}
      source={logo}
    />
  );
}

function routes() {
const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Main"
        screenOptions={{
          headerTitleAlign: 'center',
          headerTintColor: colors.colorPrimary,
          headerStyle: {
            backgroundColor: colors.colorBackground,
          },
          headerTitleStyle: {
            fontFamily: 'Poppins-Bold',
            color: colors.textColorPrimary,
            fontSize: fonts.input
          },
        }}>
        <Stack.Screen
          options={{headerShown: false}}
          name="LoginOrRegister"
          component={LoginOrRegister}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Main"
          component={Main}
        />
        <Stack.Screen
          name="LevelSelection"
          component={LevelSelection}
          options={{ headerTitle: (props) => <LogoTitle {...props} /> }}
        />
        <Stack.Screen name="Exercises" component={Exercises} />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Congratulations"
          component={Congratulations}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="ScreenAbout"
          component={ScreenAbout}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default routes;
