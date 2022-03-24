import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomeScreen from '../screens/WelcomeScreen/WelcomeScreen';
import SignUpScreen from '../screens/SignUpScreen/SignUpScreen';
import LoginScreen from '../screens/LoginScreen/LoginScreen';
import { RootStackParamList } from '../utils/types/navigation';
import SCREENS from '../utils/constants/screens';

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();

function MoviesNavigator() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name={SCREENS.welcomeScreen} component={WelcomeScreen} />
        <Screen name={SCREENS.signUpScreen} component={SignUpScreen} />
        <Screen name={SCREENS.loginScreen} component={LoginScreen} />
      </Navigator>
    </NavigationContainer>
  );
}

export default MoviesNavigator;
