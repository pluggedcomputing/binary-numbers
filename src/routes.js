import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Congratulations from './screens/Congratulations';
import Exercises from './screens/Exercises';
import LevelSelection from './screens/LevelSelection';
import LoginOrRegister from './screens/LoginOrRegister';
import Main from './screens/Main';
import ScreenAbout from './screens/ScreenAbout';
import {colors, fonts} from './styles';

const Stack = createStackNavigator();

function routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Main"
        screenOptions={{
          headerTitleAlign: 'center',
          headerTintColor: colors.colorPrimary,
          headerStyle: {
            backgroundColor: colors.textColorSecondary,
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
          options={{title: 'Escolha de níveis'}}
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