import React from 'react';
import { Image, StyleSheet } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';


import logo from "./assets/images/logo_horizontal/logo_horizontal.png";
import Congratulations from './screens/Congratulations';
import Exercises from './screens/Exercises';
import HelpScreen from './screens/HelpScreen';
import LevelSelection from './screens/LevelSelection';
import LoginOrRegister from './screens/LoginOrRegister';
import Main from './screens/Main';
import ScreenAbout from './screens/ScreenAbout';
import {colors, fonts} from './styles';

const styles = StyleSheet.create({
  logo: {
    resizeMode:'contain',
    width:125,
    height:40,
  }
});


function LogoTitle() {
  return (
    <Image
      style={styles.logo}
      source={logo}
    />
  );
}

function Tabs() {
  const Tab = createBottomTabNavigator();
  return(
    <Tab.Navigator
      initialRouteName="Main"
      screenOptions={({ route }) => ({
        // eslint-disable-next-line react/prop-types
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Sobre') {
            iconName = focused ? 'information-circle' : 'information-circle-outline';
          } else if (route.name === 'Ajuda') {
            iconName = focused ? 'help-circle' : 'help-circle-outline';
          }else if(route.name === 'Fases'){
            iconName = focused ? 'home' : 'home';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
          
        },
        
    })}>
      <Tab.Screen name='Fases' component={LevelSelection} />
      <Tab.Screen name='Ajuda' component={HelpScreen}  />
      <Tab.Screen name='Sobre' component={ScreenAbout} />
    </Tab.Navigator>
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
          component={Tabs}
          options={{ headerShown:false }}
        />
        <Stack.Screen name="Exercises" component={Exercises} options={{headerShown:false}} />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Congratulations"
          component={Congratulations}
        />
        <Stack.Screen
          name="ScreenAbout"
          component={Tabs}
          options={{headerShown: false}}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="HelpScreen"
          component={Tabs}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default routes;
