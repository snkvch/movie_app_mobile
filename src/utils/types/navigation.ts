import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

export enum ScreenList {
  WelcomeScreen = 'WelcomeScreen',
  SignUpScreen = 'SignUpScreen',
  LoginScreen = 'LoginScreen',
  ForgotPasswordScreen = 'ForgotPasswordScreen',
  PasswordChangedScreen = 'PasswordChangedScreen',
  MoviesScreen = 'MoviesScreen',
  HomeTabNavigator = 'HomeTabNavigator',
  DetailsScreen = 'DetailsScreen',
  MoviesNavigator = 'MoviesNavigator',
}

export type RootStackParamList = {
  [ScreenList.WelcomeScreen]: { name: string } | undefined;
  [ScreenList.SignUpScreen]: { name: string } | undefined;
  [ScreenList.LoginScreen]: { name: string } | undefined;
  [ScreenList.ForgotPasswordScreen]: { name: string } | undefined;
  [ScreenList.PasswordChangedScreen]: { name: string } | undefined;
  [ScreenList.MoviesScreen]: { name: string } | undefined;
  [ScreenList.HomeTabNavigator]: { name: string } | undefined;
  [ScreenList.DetailsScreen]: { id: string };
  [ScreenList.MoviesNavigator]: { name: string } | undefined;
};

export type DetailsScreenProps = NativeStackScreenProps<
  RootStackParamList,
  ScreenList.DetailsScreen
>;

export type NavProp = NativeStackNavigationProp<RootStackParamList>;

export type ScreenProps = {
  navigation: NavProp;
};
