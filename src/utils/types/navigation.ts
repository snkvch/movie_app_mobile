import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export enum ScreenList {
  WelcomeScreen = 'WelcomeScreen',
  SignUpScreen = 'SignUpScreen',
  LoginScreen = 'LoginScreen',
  ForgotPasswordScreen = 'ForgotPasswordScreen',
  PasswordChangedScreen = 'PasswordChangedScreen',
  MoviesScreen = 'MoviesScreen',
}

export type RootStackParamList = {
  [ScreenList.WelcomeScreen]: { name: string } | undefined;
  [ScreenList.SignUpScreen]: { name: string } | undefined;
  [ScreenList.LoginScreen]: { name: string } | undefined;
  [ScreenList.ForgotPasswordScreen]: { name: string } | undefined;
  [ScreenList.PasswordChangedScreen]: { name: string } | undefined;
  [ScreenList.MoviesScreen]: { name: string } | undefined;
};

export type NavProp = NativeStackNavigationProp<RootStackParamList>;

export type ScreenProps = {
  navigation: NavProp;
};
