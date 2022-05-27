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
  WatchlistScreen = 'WatchlistScreen',
}

export type RootStackParamList = {
  [ScreenList.WelcomeScreen]: undefined;
  [ScreenList.SignUpScreen]: undefined;
  [ScreenList.LoginScreen]: undefined;
  [ScreenList.ForgotPasswordScreen]: undefined;
  [ScreenList.PasswordChangedScreen]: undefined;
  [ScreenList.MoviesScreen]: undefined;
  [ScreenList.HomeTabNavigator]: undefined;
  [ScreenList.DetailsScreen]: { id: string };
  [ScreenList.MoviesNavigator]: undefined;
  [ScreenList.WatchlistScreen]: undefined;
};

export type DetailsScreenProps = NativeStackScreenProps<
  RootStackParamList,
  ScreenList.DetailsScreen
>;

export type NavProp = NativeStackNavigationProp<RootStackParamList>;

export type ScreenProps = {
  navigation: NavProp;
};

export type Nav = {
  navigate: (screen: string, id?: { id: string }) => void;
};
