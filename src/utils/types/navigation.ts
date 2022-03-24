import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export enum ScreenList {
  WelcomeScreen = 'WelcomeScreen',
  SignUpScreen = 'SignUpScreen',
  LoginScreen = 'LoginScreen',
}

export type RootStackParamList = {
  [ScreenList.WelcomeScreen]: { name: string } | undefined;
  [ScreenList.SignUpScreen]: { name: string } | undefined;
  [ScreenList.LoginScreen]: { name: string } | undefined;
};

type NavProp = NativeStackNavigationProp<RootStackParamList>;

export type ScreenProps = {
  navigation: NavProp;
};
