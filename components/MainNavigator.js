import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// radioHeadScreens
import {SplashScreen, LoginScreen, PlaySongScreen} from '../screens';

import MainContainer from './MainContainer';

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen // SplashScreen
          name="Splash"
          component={SplashScreen}
          options={{header: () => null}}
        />

        <Stack.Screen // loginScreen
          name="Login"
          component={LoginScreen}
          options={{header: () => null}}
        />

        <Stack.Screen // mainScreen
          name="Main"
          component={MainContainer}
          options={{header: () => null}}
        />
        <Stack.Screen // mainScreen
          name="PlaySongScreen"
          component={PlaySongScreen}
          options={{header: () => null}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
