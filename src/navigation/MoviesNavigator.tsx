import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  WelcomeScreen,
  SignUpScreen,
  LoginScreen,
  ForgotPasswordScreen,
  PasswordChangedScreen,
} from '../screens';
import { RootStackParamList, ScreenList } from '../utils/types/navigation';

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();

function MoviesNavigator() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name={ScreenList.WelcomeScreen} component={WelcomeScreen} />
        <Screen name={ScreenList.SignUpScreen} component={SignUpScreen} />
        <Screen name={ScreenList.LoginScreen} component={LoginScreen} />
        <Screen
          name={ScreenList.ForgotPasswordScreen}
          component={ForgotPasswordScreen}
        />
        <Screen
          name={ScreenList.PasswordChangedScreen}
          component={PasswordChangedScreen}
        />
      </Navigator>
    </NavigationContainer>
  );
}

export default MoviesNavigator;
