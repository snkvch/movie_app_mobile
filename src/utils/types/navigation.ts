import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList =
  | {
      WelcomeScreen: undefined;
      SignUpScreen: undefined;
      LoginScreen: undefined;
    }
  | any;

type NavProp = NativeStackNavigationProp<RootStackParamList>;

export type ScreenProps = {
  navigation: NavProp;
};
